import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import {
  Sparkles,
  Home,
  Building2,
  Repeat,
  Flower2,
  Car,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
} from "lucide-react";

const BASE = "https://mlentretien.com";

const FAQ = [
  {
    q: "Combien de temps avant de recevoir ma soumission ?",
    a: "Vous recevez une réponse personnalisée en moins de 24 h ouvrables. La plupart des soumissions partent la journée même.",
  },
  {
    q: "La soumission est-elle vraiment gratuite ?",
    a: "Oui — toujours gratuite et sans aucun engagement. Vous recevez un prix ferme et clair, adapté à vos besoins réels.",
  },
  {
    q: "Quelles informations dois-je fournir ?",
    a: "Le type de service souhaité, votre ville, la superficie ou le nombre de pièces, la fréquence désirée et toute particularité (animaux, allergies, accès, etc.).",
  },
  {
    q: "Quels secteurs desservez-vous ?",
    a: "Toute la Mauricie et le Centre-du-Québec : Trois-Rivières, Shawinigan, Bécancour, Nicolet, Cap-de-la-Madeleine, Grand-Mère et environs.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Virement Interac, chèque ou comptant pour les particuliers. Facturation mensuelle par courriel pour les contrats commerciaux.",
  },
  {
    q: "Êtes-vous assurés ?",
    a: "Oui. Responsabilité civile complète, employés vérifiés. Preuve d'assurance fournie sur demande.",
  },
];

export const Route = createFileRoute("/soumission")({
  head: () => ({
    meta: [
      { title: "Demander une soumission gratuite — M.L Excellence Mauricie" },
      {
        name: "description",
        content:
          "Soumission gratuite en moins de 24 h pour ménage résidentiel, commercial, contrats récurrents, plates-bandes et lavage auto en Mauricie. Formulaire clair, sans engagement.",
      },
      { name: "keywords", content: "soumission ménage Mauricie, devis nettoyage Trois-Rivières, prix entretien ménager Shawinigan, soumission gratuite Bécancour, devis ménage commercial" },
      { property: "og:title", content: "Soumission gratuite — M.L Excellence" },
      {
        property: "og:description",
        content:
          "Recevez votre soumission en moins de 24 h. Résidentiel, commercial, plates-bandes, lavage auto. Sans engagement.",
      },
      { property: "og:url", content: `${BASE}/soumission` },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Soumission gratuite — M.L Excellence" },
      {
        name: "twitter:description",
        content: "Réponse en moins de 24 h. Sans engagement. Partout en Mauricie.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE}/soumission` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Soumission",
                  item: `${BASE}/soumission`,
                },
              ],
            },
            {
              "@type": "ContactPage",
              name: "Demander une soumission — M.L Excellence",
              url: `${BASE}/soumission`,
              inLanguage: "fr-CA",
              isPartOf: { "@type": "WebSite", name: "M.L Excellence", url: BASE },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: SoumissionPage,
});

const SERVICES = [
  { id: "residentiel", label: "Ménage résidentiel", icon: Home },
  { id: "commercial", label: "Nettoyage commercial", icon: Building2 },
  { id: "recurrent", label: "Contrat récurrent", icon: Repeat },
  { id: "plates-bandes", label: "Plates-bandes / extérieur", icon: Flower2 },
  { id: "auto", label: "Lavage auto", icon: Car },
];

const FREQUENCES = [
  "Ponctuel (une seule fois)",
  "Hebdomadaire",
  "Aux 2 semaines",
  "Mensuel",
  "Saisonnier",
  "Je ne sais pas encore",
];

const TYPES = ["Résidentiel", "Commercial"] as const;

const soumissionSchema = z.object({
  nom: z
    .string()
    .trim()
    .min(2, "Nom trop court")
    .max(120, "Nom trop long"),
  tel: z
    .string()
    .trim()
    .min(8, "Téléphone requis (min. 8 chiffres)")
    .max(30, "Téléphone trop long")
    .regex(/^[0-9+()\-.\s]+$/, "Téléphone invalide"),
  courriel: z
    .string()
    .trim()
    .email("Courriel invalide")
    .max(150, "Courriel trop long"),
  ville: z.string().trim().min(2, "Ville requise").max(80, "Ville trop longue"),
  type: z.enum(TYPES, { errorMap: () => ({ message: "Sélectionnez un type" }) }),
  services: z.array(z.string()).min(1, "Sélectionnez au moins un service"),
  frequence: z.string().trim().max(60).optional().or(z.literal("")),
  superficie: z.string().trim().max(80).optional().or(z.literal("")),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000, "Message trop long").optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "Consentement requis" }) }),
});

type FormState = {
  nom: string;
  tel: string;
  courriel: string;
  ville: string;
  type: "" | (typeof TYPES)[number];
  services: string[];
  frequence: string;
  superficie: string;
  date: string;
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  nom: "",
  tel: "",
  courriel: "",
  ville: "",
  type: "",
  services: [],
  frequence: "",
  superficie: "",
  date: "",
  message: "",
  consent: false,
};

function SoumissionPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleService = (id: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(id)
        ? f.services.filter((x) => x !== id)
        : [...f.services, id],
    }));

  const servicesLabels = useMemo(
    () =>
      form.services
        .map((id) => SERVICES.find((s) => s.id === id)?.label)
        .filter(Boolean)
        .join(", "),
    [form.services],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = soumissionSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0];
        if (typeof path === "string" && !fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const data = result.data;
    const subject = encodeURIComponent(
      `Demande de soumission — ${data.type} — ${data.ville}`,
    );
    const lines = [
      `Nom: ${data.nom}`,
      `Téléphone: ${data.tel}`,
      `Courriel: ${data.courriel}`,
      `Ville: ${data.ville}`,
      `Type: ${data.type}`,
      `Services: ${servicesLabels}`,
      data.frequence ? `Fréquence souhaitée: ${data.frequence}` : null,
      data.superficie ? `Superficie / pièces: ${data.superficie}` : null,
      data.date ? `Date souhaitée: ${data.date}` : null,
      "",
      "Message:",
      data.message || "(aucun)",
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));
    setSent(true);
    window.location.href = `mailto:Melanielavas@outlook.com?subject=${subject}&body=${body}`;
  };

  const fieldClass = (k: string) =>
    `w-full rounded-xl border-2 px-4 py-3 bg-background outline-none transition ${
      errors[k]
        ? "border-destructive focus:border-destructive"
        : "border-border focus:border-primary"
    }`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className="sticky top-0 z-30 backdrop-blur border-b border-border/50"
        style={{ background: "color-mix(in oklab, var(--background) 85%, transparent)" }}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 max-w-6xl mx-auto">
          <Link to="/" className="flex min-w-0 items-center gap-2 font-bold text-lg">
            M.L Excellence
          </Link>
          <nav className="flex items-center gap-1 sm:gap-3 text-sm font-medium shrink-0">
            <Link to="/services" className="px-2 py-1 text-muted-foreground hover:text-foreground transition">
              Services
            </Link>
            <a
              href="tel:+18199969022"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-muted-foreground hover:text-foreground transition"
            >
              <Phone className="h-4 w-4" /> 819-996-9022
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-12 pb-8 max-w-3xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
          <Star className="h-3.5 w-3.5 text-primary fill-primary" />
          Réponse garantie en moins de 24 h
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Demandez votre{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            soumission gratuite
          </span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Remplissez le formulaire ci-dessous — c'est rapide, sans engagement et toujours
          gratuit. Mélanie vous répond personnellement avec un prix clair.
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
          {[
            { icon: Clock, t: "Réponse < 24 h" },
            { icon: ShieldCheck, t: "Équipe assurée" },
            { icon: Check, t: "Sans engagement" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-3 py-2">
              <Icon className="h-4 w-4 text-primary" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="form" className="px-6 pb-16">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-1"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="bg-card rounded-[calc(1.5rem-4px)] p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              {/* Type */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  1. Type de demande <span className="text-destructive">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TYPES.map((t) => {
                    const active = form.type === t;
                    return (
                      <button
                        type="button"
                        key={t}
                        onClick={() => set("type", t)}
                        className={`rounded-xl px-4 py-3 border-2 font-medium transition ${
                          active
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-primary/50"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
                {errors.type && (
                  <p className="mt-2 text-sm text-destructive">{errors.type}</p>
                )}
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  2. Service(s) souhaité(s) <span className="text-destructive">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {SERVICES.map((s) => {
                    const active = form.services.includes(s.id);
                    const Icon = s.icon;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={`flex items-center gap-3 text-left rounded-xl px-4 py-3 border-2 transition ${
                          active
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-primary/50"
                        }`}
                      >
                        <Icon className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm font-medium">{s.label}</span>
                        {active && <Check className="h-4 w-4 ml-auto text-primary" />}
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                  <p className="mt-2 text-sm text-destructive">{errors.services}</p>
                )}
              </div>

              {/* Coordonnées */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  3. Vos coordonnées <span className="text-destructive">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      placeholder="Nom complet *"
                      value={form.nom}
                      onChange={(e) => set("nom", e.target.value)}
                      maxLength={120}
                      autoComplete="name"
                      className={fieldClass("nom")}
                      aria-invalid={!!errors.nom}
                    />
                    {errors.nom && <p className="mt-1 text-xs text-destructive">{errors.nom}</p>}
                  </div>
                  <div>
                    <input
                      placeholder="Téléphone *"
                      value={form.tel}
                      onChange={(e) => set("tel", e.target.value)}
                      type="tel"
                      maxLength={30}
                      autoComplete="tel"
                      inputMode="tel"
                      className={fieldClass("tel")}
                      aria-invalid={!!errors.tel}
                    />
                    {errors.tel && <p className="mt-1 text-xs text-destructive">{errors.tel}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Courriel *"
                      value={form.courriel}
                      onChange={(e) => set("courriel", e.target.value)}
                      maxLength={150}
                      autoComplete="email"
                      inputMode="email"
                      className={fieldClass("courriel")}
                      aria-invalid={!!errors.courriel}
                    />
                    {errors.courriel && (
                      <p className="mt-1 text-xs text-destructive">{errors.courriel}</p>
                    )}
                  </div>
                  <div>
                    <input
                      placeholder="Ville *"
                      value={form.ville}
                      onChange={(e) => set("ville", e.target.value)}
                      maxLength={80}
                      autoComplete="address-level2"
                      className={fieldClass("ville")}
                      aria-invalid={!!errors.ville}
                    />
                    {errors.ville && (
                      <p className="mt-1 text-xs text-destructive">{errors.ville}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Détails */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  4. Détails (optionnel mais accélère la soumission)
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <select
                    value={form.frequence}
                    onChange={(e) => set("frequence", e.target.value)}
                    className={fieldClass("frequence")}
                  >
                    <option value="">Fréquence souhaitée</option>
                    {FREQUENCES.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <input
                    placeholder="Superficie / nb de pièces"
                    value={form.superficie}
                    onChange={(e) => set("superficie", e.target.value)}
                    maxLength={80}
                    className={fieldClass("superficie")}
                  />
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => set("date", e.target.value)}
                    className={`${fieldClass("date")} sm:col-span-2`}
                  />
                </div>
                <textarea
                  placeholder="Message — adresse, particularités, animaux, allergies, accès…"
                  rows={4}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  maxLength={2000}
                  className={`${fieldClass("message")} mt-3 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <span className="text-muted-foreground">
                  J'accepte d'être contacté par M.L Excellence concernant ma demande. Mes
                  informations ne seront jamais partagées avec un tiers.
                </span>
              </label>
              {errors.consent && (
                <p className="text-sm text-destructive">{errors.consent}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-full py-4 font-bold text-primary-foreground text-lg transition hover:scale-[1.02]"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
              >
                Envoyer ma demande de soumission
              </button>

              {sent && (
                <p className="text-sm text-center text-primary font-medium">
                  Votre logiciel de courriel devrait s'ouvrir. Sinon, écrivez à
                  Melanielavas@outlook.com.
                </p>
              )}

              <p className="text-xs text-center text-muted-foreground">
                Réponse en moins de 24 h · Gratuit · Sans engagement
              </p>
            </form>
          </div>
        </div>

        {/* Contact alternatif */}
        <div className="max-w-3xl mx-auto mt-8 grid sm:grid-cols-3 gap-3 text-sm">
          <a
            href="tel:+18199969022"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary transition"
          >
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Téléphone</p>
              <p className="text-muted-foreground">819-996-9022</p>
            </div>
          </a>
          <a
            href="mailto:Melanielavas@outlook.com"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary transition"
          >
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Courriel</p>
              <p className="text-muted-foreground break-all">Melanielavas@outlook.com</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Adresse</p>
              <p className="text-muted-foreground">905 rue St-Jean-Baptiste, Nicolet</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-card p-5 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold">
                {item.q}
                <span className="text-primary transition group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 px-6 text-sm text-muted-foreground border-t border-border">
        <p className="font-bold text-foreground">M.L Excellence</p>
        <p className="mt-1">Services de propreté · Mauricie & Centre-du-Québec</p>
        <p className="mt-3">
          <Link to="/" className="hover:text-foreground">Accueil</Link> ·{" "}
          <Link to="/services" className="hover:text-foreground">Services</Link>
        </p>
      </footer>
    </div>
  );
}
