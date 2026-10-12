import { createOpenAI } from "@ai-sdk/openai";
import { createServerFn } from "@tanstack/react-start";
import { streamText } from "ai";
import { z } from "zod";

import { createLovableAiGatewayRunIdFetch } from "./ai/run-id.server.ts";

const MODEL = "openai/gpt-6-astra";
const GATEWAY = "https://ai.gateway.lovable.dev/v1";

const advisorInputSchema = z.object({
  description: z.string().trim().min(30).max(3000),
});

const SERVICE_IDS = [
  "Époussetage complet",
  "Aspirateur",
  "Lavage des planchers",
  "Nettoyage de la cuisine",
  "Nettoyage des salles de bain",
  "Désinfection des surfaces",
  "Nettoyage des miroirs",
  "Changement de la literie",
  "Lavage et pliage du linge",
  "Vidage des poubelles",
  "Entrées, halls et vestibules",
  "Corridors et cages d’escalier",
  "Buanderies et espaces communs",
  "Remise en état entre locataires",
] as const;

const FREQUENCIES = [
  "Une seule fois (ponctuel)",
  "Deux fois par semaine",
  "Une fois par semaine",
  "Aux 2 semaines",
  "Une fois par mois",
  "Saisonnier",
  "Je ne sais pas encore",
] as const;

const advisorResultSchema = z.object({
  resume: z.string().trim().max(500),
  services: z.array(z.enum(SERVICE_IDS)).max(8),
  serviceType: z.enum(["regulier", "grand-menage", "grand-menage-seul"]),
  frequence: z.enum(FREQUENCIES),
  raisons: z.array(z.string().trim().max(240)).max(5),
  renseignements: z.array(z.string().trim().max(240)).max(8),
});

export type ServiceAdvisorResult = z.infer<typeof advisorResultSchema>;

function extractJson(text: string) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1];
  const candidate = fenced ?? text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
  return JSON.parse(candidate) as unknown;
}

export const getServiceRecommendations = createServerFn({ method: "POST" })
  .inputValidator((input) => advisorInputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      return { ok: false as const, error: "Le conseiller est temporairement indisponible." };
    }

    const runIdFetch = createLovableAiGatewayRunIdFetch();
    const openai = createOpenAI({
      baseURL: GATEWAY,
      apiKey,
      headers: {
        "Lovable-API-Key": apiKey,
        "X-Lovable-AIG-SDK": "vercel-ai-sdk",
      },
      fetch: runIdFetch.fetch,
    });

    const prompt = `Tu es le conseiller de M.L Excellence, entreprise d'entretien en Mauricie et Centre-du-Québec.
Analyse la description d'un client et recommande seulement les services du catalogue fourni.
Ne donne jamais de prix, ne garantis jamais une disponibilité et ne pose pas de diagnostic sanitaire.
Indique surtout les renseignements factuels manquants qui permettront une soumission précise.

Catalogue exact des services sélectionnables :
${SERVICE_IDS.map((service) => `- ${service}`).join("\n")}

Types possibles : regulier, grand-menage, grand-menage-seul.
Fréquences possibles : ${FREQUENCIES.join(" | ")}.

Retourne uniquement un objet JSON avec exactement ces clés :
{"resume":"résumé bref","services":["valeurs exactes du catalogue"],"serviceType":"valeur permise","frequence":"valeur permise","raisons":["raisons brèves"],"renseignements":["informations à ajouter"]}

Description du client :
${data.description}`;

    try {
      const result = streamText({
        model: openai.responses(MODEL),
        prompt,
        providerOptions: {
          openai: {
            forceReasoning: true,
            reasoningEffort: "low",
            reasoningSummary: "auto",
            store: false,
            include: ["reasoning.encrypted_content"],
          },
        },
      });
      const text = await result.text;
      const recommendation = advisorResultSchema.parse(extractJson(text));
      return { ok: true as const, recommendation };
    } catch (error) {
      console.error("Service advisor failed", error);
      const status =
        typeof error === "object" && error !== null && "statusCode" in error
          ? Number(error.statusCode)
          : undefined;
      if (status === 402 || status === 403) {
        return {
          ok: false as const,
          error: "Le conseiller intelligent n’est pas disponible pour le moment. Vous pouvez continuer le formulaire normalement.",
        };
      }
      return {
        ok: false as const,
        error: "L’analyse n’a pas pu être complétée. Réessayez ou continuez le formulaire normalement.",
      };
    }
  });