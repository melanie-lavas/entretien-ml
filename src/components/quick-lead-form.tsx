import { useState, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Phone, Send, CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitLead } from "@/lib/leads.functions";
import { leadSchema, LEAD_SECTEURS, LEAD_BESOINS, LEAD_FREQUENCES } from "@/lib/leads-schema";

export function QuickLeadForm({ sourcePage = "/soumission" }: { sourcePage?: "/" | "/soumission" }) {
  const send = useServerFn(submitLead);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [failure, setFailure] = useState("");
  const locked = useRef(false);
  const inputClass = "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = leadSchema.safeParse({ ...values, source_page: sourcePage });
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      return;
    }
    locked.current = true;
    setPending(true); setErrors({}); setFailure("");
    try { await send({ data: parsed.data }); setSuccess(true); }
    catch { setFailure("Votre demande n’a pas été enregistrée. Réessayez ou appelez le 819-996-9022."); }
    finally { locked.current = false; setPending(false); }
  }
  return <section aria-label="Demande rapide" className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
    <h2 className="text-3xl font-bold">Votre soumission gratuite</h2>
    <p className="mt-2 text-muted-foreground">Entretien régulier, grand ménage ou besoin ponctuel — parlons de votre maison.</p>
    {success ? <div role="status" className="mt-6 flex gap-3 rounded-lg border border-primary bg-accent p-5 text-accent-foreground"><CheckCircle2 className="h-6 w-6 shrink-0" /><p className="font-semibold">Merci ! Votre demande est bien reçue, Mélanie vous répond en moins de 24 h</p></div> :
      <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
        {([{ name: "nom", label: "Nom", type: "text", max: 120, autocomplete: "name" }, { name: "telephone", label: "Téléphone", type: "tel", max: 30, autocomplete: "tel" }, { name: "courriel", label: "Courriel (optionnel)", type: "email", max: 150, autocomplete: "email" }] as const).map((field) => <label key={field.name} className="text-sm font-semibold">{field.label}<input name={field.name} type={field.type} maxLength={field.max} autoComplete={field.autocomplete} required={field.name !== "courriel"} aria-invalid={!!errors[field.name]} className={inputClass} />{errors[field.name] && <span className="mt-1 block text-sm text-destructive">{errors[field.name]}</span>}</label>)}
        {([{ name: "secteur", label: "Ville / secteur", options: LEAD_SECTEURS }, { name: "type_besoin", label: "Type de besoin", options: LEAD_BESOINS }, { name: "frequence", label: "Fréquence souhaitée", options: LEAD_FREQUENCES }] as const).map((field) => <label key={field.name} className="text-sm font-semibold">{field.label}<select name={field.name} required defaultValue="" aria-invalid={!!errors[field.name]} className={inputClass}><option value="" disabled>Choisir…</option>{field.options.map((option) => <option key={option}>{option}</option>)}</select>{errors[field.name] && <span className="mt-1 block text-sm text-destructive">{errors[field.name]}</span>}</label>)}
        <label className="text-sm font-semibold sm:col-span-2">Message (optionnel)<textarea name="message" maxLength={1000} rows={3} className={inputClass} /></label>
        {failure && <p role="alert" className="text-sm text-destructive sm:col-span-2">{failure}</p>}
        <Button type="submit" disabled={pending} className="h-auto min-h-12 whitespace-normal py-3 font-bold sm:col-span-2">{pending ? <LoaderCircle className="animate-spin" /> : <Send />}{pending ? "Envoi en cours…" : "Envoyer ma demande gratuite"}</Button>
        <p className="text-xs text-muted-foreground sm:col-span-2">En envoyant cette demande, vous acceptez que M.L Excellence vous contacte à son sujet.</p>
      </form>}
    <Button asChild variant="outline" className="mt-5 h-auto min-h-12 w-full whitespace-normal py-3 font-bold"><a href="tel:+18199969022"><Phone />Ou appelez directement : 819-996-9022</a></Button>
  </section>;
}