import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { leadSchema } from "./leads-schema";
import { sendLeadByEmail } from "./web3forms";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) throw new Error("La demande ne peut pas être enregistrée pour le moment.");
    const client = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      } },
    });
    const { error } = await client.from("leads").insert({ ...data, courriel: data.courriel || null, message: data.message || null });
    if (error) throw new Error("Votre demande n’a pas été enregistrée. Réessayez ou appelez-nous.");

    const emailSent = await sendLeadByEmail({
      subject: `Nouvelle demande (formulaire rapide) — ${data.nom} — ${data.secteur}`,
      ...(data.courriel ? { email: data.courriel } : {}),
      Nom: data.nom,
      Téléphone: data.telephone,
      Courriel: data.courriel || "(non fourni)",
      Secteur: data.secteur,
      "Type de besoin": data.type_besoin,
      Fréquence: data.frequence,
      Message: data.message || "(aucun)",
      Page: data.source_page,
    });
    if (!emailSent) console.error("Demande enregistrée, mais avis courriel Web3Forms non envoyé.", { sourcePage: data.source_page });
    return { ok: true, emailSent };
  });