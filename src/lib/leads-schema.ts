import { z } from "zod";

export const LEAD_SECTEURS = ["Saint-Grégoire", "Gentilly", "Bécancour (autre secteur)", "Nicolet", "Trois-Rivières", "Shawinigan", "Cap-de-la-Madeleine", "Grand-Mère", "Autre secteur"] as const;
export const LEAD_BESOINS = ["Entretien régulier résidentiel", "Grand ménage", "Ménage avant vente / fin de bail", "Commercial", "Autre"] as const;
export const LEAD_FREQUENCES = ["Chaque semaine", "Aux 2 semaines", "Chaque mois", "Une seule fois", "À déterminer"] as const;
export const leadSchema = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom.").max(120),
  telephone: z.string().trim().max(30).regex(/^[0-9+().\s-]+$/, "Téléphone invalide.").refine((v) => { const n = v.replace(/\D/g, "").length; return n >= 10 && n <= 15; }, "Indiquez un téléphone avec indicatif régional."),
  courriel: z.union([z.literal(""), z.string().trim().email("Courriel invalide.").max(150)]).optional(),
  secteur: z.enum(LEAD_SECTEURS, { errorMap: () => ({ message: "Choisissez votre ville ou secteur." }) }),
  type_besoin: z.enum(LEAD_BESOINS, { errorMap: () => ({ message: "Choisissez votre besoin." }) }),
  frequence: z.enum(LEAD_FREQUENCES, { errorMap: () => ({ message: "Choisissez une fréquence." }) }),
  message: z.string().trim().max(1000).optional(),
  source_page: z.enum(["/", "/soumission"]),
});