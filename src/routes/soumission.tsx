import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import {
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Sparkles,
  LoaderCircle,
  WandSparkles,
} from "lucide-react";
import {
  getServiceRecommendations,
  type ServiceAdvisorResult,
} from "@/lib/service-advisor.functions";

const BASE = "https://mlentretien.com";
const CONTACT_EMAIL = "info.mlexcellance@gmail.com";

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
    q: "Pourquoi un grand ménage initial est-il parfois nécessaire ?",
    a: "Lorsqu'une résidence n'a pas été nettoyée en profondeur depuis longtemps, un grand ménage initial remet la maison à niveau. L'entretien régulier devient ensuite plus rapide et plus efficace.",
  },
  {
    q: "Quelles informations dois-je fournir ?",
    a: "Le type de résidence, le nombre de pièces, la superficie, les services souhaités, la fréquence désirée et toute particularité (animaux, allergies, accès, produits).",
  },
  {
    q: "Quels secteurs desservez-vous ?",
    a: "Toute la Mauricie et le Centre-du-Québec : Trois-Rivières, Shawinigan, Bécancour, Nicolet, Cap-de-la-Madeleine, Grand-Mère et environs.",
  },
  {
    q: "Êtes-vous assurés ?",
    a: "Oui. Responsabilité civile complète, employés vérifiés. Preuve d'assurance fournie sur demande.",
  },
];

export const Route = createFileRoute("/soumission")({
  head: () => ({
    meta: [
      { title: "Soumission gratuite Mauricie | M.L Excellence" },
      {
        name: "description",
        content:
          "Questionnaire de soumission détaillé : entretien régulier ou grand ménage initial, services, fréquence, produits. Réponse en moins de 24 h, sans engagement.",
      },
      {
        name: "keywords",
        content:
          "soumission ménage Mauricie, devis nettoyage Trois-Rivières, grand ménage initial, entretien régulier Nicolet, soumission gratuite Bécancour",
      },
      { property: "og:title", content: "Soumission gratuite — M.L Excellence" },
      {
        property: "og:description",
        content:
          "Questionnaire complet pour une soumission précise. Réponse en moins de 24 h. Sans engagement.",
      },
      { property: "og:url", content: `${BASE}/soumission` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

const TYPES_RESIDENCE = [
  "Maison unifamiliale",
  "Condo",
  "Jumelé",
  "Duplex / plex",
  "Appartement",
  "Chalet",
  "Local commercial",
  "Immeuble locatif / bloc appartements",
  "Autre",
];

const SERVICE_TYPE = [
  {
    id: "regulier",
    titre: "Entretien régulier seulement",
    desc: "La maison est déjà bien entretenue.",
  },
  {
    id: "grand-menage",
    titre: "Grand ménage initial + entretien régulier",
    desc: "Remise à niveau complète avant le suivi régulier.",
  },
  {
    id: "grand-menage-seul",
    titre: "Grand ménage ponctuel seulement",
    desc: "Une seule visite en profondeur.",
  },
] as const;

const GRAND_MENAGE_OPTIONS = [
  "Armoires (extérieur)",
  "Armoires (intérieur)",
  "Réfrigérateur",
  "Four",
  "Hotte de cuisine",
  "Fenêtres intérieures",
  "Cadres de fenêtres",
  "Plinthes",
  "Murs",
  "Ventilateurs",
  "Luminaires",
];

const SERVICES_OPTIONS = [
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
  "Déneigement manuel saisonnier",
];

const FREQUENCES = [
  "Une seule fois (ponctuel)",
  "Deux fois par semaine",
  "Une fois par semaine",
  "Aux 2 semaines",
  "Une fois par mois",
  "Saisonnier",
  "Je ne sais pas encore",
];

const JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

const OUI_NON = ["Oui", "Non"] as const;

const ESPACES_COMMUNS = [
  "Entrée / hall",
  "Corridors",
  "Cages d'escalier",
  "Ascenseur",
  "Buanderie commune",
  "Salle communautaire",
  "Sortie de secours",
  "Stationnement / remise",
] as const;

const trimmed = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

const soumissionSchema = z.object({
  nom: z.string().trim().min(2, "Nom trop court").max(120, "Nom trop long"),
  adresse: z.string().trim().min(4, "Adresse requise").max(200, "Adresse trop longue"),
  tel: z
    .string()
    .trim()
    .min(8, "Téléphone requis (min. 8 chiffres)")
    .max(30, "Téléphone trop long")
    .regex(/^[0-9+()\-.\s]+$/, "Téléphone invalide"),
  courriel: z.string().trim().email("Courriel invalide").max(150, "Courriel trop long"),
  typeResidence: z.string().trim().min(2, "Type de résidence requis").max(80),
  chambres: trimmed(20),
  sdb: trimmed(20),
  sallesEau: trimmed(20),
  etages: trimmed(20),
  superficie: trimmed(60),
  sousSol: z.string().trim().max(10).optional().or(z.literal("")),
  garage: z.string().trim().max(10).optional().or(z.literal("")),
  nomImmeuble: trimmed(120),
  nbLogements: trimmed(20),
  nbEntrees: trimmed(20),
  espacesCommuns: z.array(z.string()).max(20),
  disponibilitesAcces: trimmed(300),
  serviceType: z.enum(["regulier", "grand-menage", "grand-menage-seul"], {
    errorMap: () => ({ message: "Sélectionnez le service recherché" }),
  }),
  depuisQuand: trimmed(120),
  accumulations: trimmed(500),
  piecesAttention: trimmed(500),
  grandMenageOptions: z.array(z.string()).max(20),
  grandMenageAutre: trimmed(200),
  services: z.array(z.string()).min(1, "Sélectionnez au moins un service"),
  servicesAutre: trimmed(200),
  frequence: z.string().trim().min(2, "Fréquence requise").max(60),
  jours: z.array(z.string()).max(7),
  heure: trimmed(40),
  flexible: z.string().trim().max(10).optional().or(z.literal("")),
  animaux: z.string().trim().max(10).optional().or(z.literal("")),
  animauxDetails: trimmed(200),
  produits: z.string().trim().max(60).optional().or(z.literal("")),
  produitsPreferences: trimmed(300),
  present: z.string().trim().max(10).optional().or(z.literal("")),
  acces: trimmed(300),
  consignes: trimmed(500),
  commentaires: trimmed(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Consentement requis" }) }),
});

type FormState = {
  nom: string;
  adresse: string;
  tel: string;
  courriel: string;
  typeResidence: string;
  chambres: string;
  sdb: string;
  sallesEau: string;
  etages: string;
  superficie: string;
  sousSol: string;
  garage: string;
  nomImmeuble: string;
  nbLogements: string;
  nbEntrees: string;
  espacesCommuns: string[];
  disponibilitesAcces: string;
  serviceType: "" | (typeof SERVICE_TYPE)[number]["id"];
  depuisQuand: string;
  accumulations: string;
  piecesAttention: string;
  grandMenageOptions: string[];
  grandMenageAutre: string;
  services: string[];
  servicesAutre: string;
  frequence: string;
  jours: string[];
  heure: string;
  flexible: string;
  animaux: string;
  animauxDetails: string;
  produits: string;
  produitsPreferences: string;
  present: string;
  acces: string;
  consignes: string;
  commentaires: string;
  consent: boolean;
};

const initialForm: FormState = {
  nom: "",
  adresse: "",
  tel: "",
  courriel: "",
  typeResidence: "",
  chambres: "",
  sdb: "",
  sallesEau: "",
  etages: "",
  superficie: "",
  sousSol: "",
  garage: "",
  nomImmeuble: "",
  nbLogements: "",
  nbEntrees: "",
  espacesCommuns: [],
  disponibilitesAcces: "",
  serviceType: "",
  depuisQuand: "",
  accumulations: "",
  piecesAttention: "",
  grandMenageOptions: [],
  grandMenageAutre: "",
  services: [],
  servicesAutre: "",
  frequence: "",
  jours: [],
  heure: "",
  flexible: "",
  animaux: "",
  animauxDetails: "",
  produits: "",
  produitsPreferences: "",
  present: "",
  acces: "",
  consignes: "",
  commentaires: "",
  consent: false,
};

function SoumissionPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mailtoUrl, setMailtoUrl] = useState<string | null>(null);
  const [advisorDescription, setAdvisorDescription] = useState("");
  const [advisorResult, setAdvisorResult] = useState<ServiceAdvisorResult | null>(null);
  const [advisorError, setAdvisorError] = useState("");
  const [advisorLoading, setAdvisorLoading] = useState(false);
  const recommendServices = useServerFn(getServiceRecommendations);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggle = (
    k: "grandMenageOptions" | "services" | "jours" | "espacesCommuns",
    value: string,
  ) =>
    setForm((f) => ({
      ...f,
      [k]: f[k].includes(value) ? f[k].filter((x) => x !== value) : [...f[k], value],
    }));

  const grandMenage = form.serviceType !== "regulier" && form.serviceType !== "";

  const handleAdvisor = async () => {
    const description = advisorDescription.trim();
    if (description.length < 30) {
      setAdvisorError("Décrivez votre logement et vos besoins en au moins quelques phrases.");
      return;
    }
    setAdvisorError("");
    setAdvisorLoading(true);
    try {
      const response = await recommendServices({ data: { description } });
      if (!response.ok) {
        setAdvisorResult(null);
        setAdvisorError(response.error);
        return;
      }
      setAdvisorResult(response.recommendation);
    } catch {
      setAdvisorResult(null);
      setAdvisorError("L’analyse n’a pas pu être complétée. Vous pouvez continuer le formulaire normalement.");
    } finally {
      setAdvisorLoading(false);
    }
  };

  const applyAdvisorResult = () => {
    if (!advisorResult) return;
    setForm((current) => ({
      ...current,
      serviceType: current.serviceType || advisorResult.serviceType,
      frequence: current.frequence || advisorResult.frequence,
      services: Array.from(new Set([...current.services, ...advisorResult.services])),
      commentaires: current.commentaires || advisorDescription,
    }));
    document.querySelector("#form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const buildBody = (d: z.infer<typeof soumissionSchema>) => {
    const serviceLabel =
      SERVICE_TYPE.find((s) => s.id === d.serviceType)?.titre ?? d.serviceType;
    const L: (string | null)[] = [
      "=== INFORMATIONS GÉNÉRALES ===",
      `Nom: ${d.nom}`,
      `Adresse: ${d.adresse}`,
      `Téléphone: ${d.tel}`,
      `Courriel: ${d.courriel}`,
      "",
      "=== RÉSIDENCE ===",
      `Type de résidence: ${d.typeResidence}`,
      `Chambres: ${d.chambres || "—"}`,
      `Salles de bain: ${d.sdb || "—"}`,
      `Salles d'eau: ${d.sallesEau || "—"}`,
      `Étages: ${d.etages || "—"}`,
      `Superficie approximative: ${d.superficie || "—"}`,
      `Sous-sol à entretenir: ${d.sousSol || "—"}`,
      `Garage à entretenir: ${d.garage || "—"}`,
      "",
      "=== IMMEUBLE LOCATIF (si applicable) ===",
      `Nom de l'immeuble: ${d.nomImmeuble || "—"}`,
      `Nombre de logements: ${d.nbLogements || "—"}`,
      `Nombre d'entrées: ${d.nbEntrees || "—"}`,
      `Espaces communs à entretenir: ${
        d.espacesCommuns.length ? d.espacesCommuns.join(", ") : "—"
      }`,
      `Disponibilités d'accès: ${d.disponibilitesAcces || "—"}`,
      "",
      "=== TYPE DE SERVICE ===",
      `Service recherché: ${serviceLabel}`,
    ];

    if (d.serviceType !== "regulier") {
      L.push(
        `Dernier ménage complet: ${d.depuisQuand || "—"}`,
        `Accumulations (poussière, graisse, savon, calcaire): ${d.accumulations || "—"}`,
        `Pièces demandant une attention particulière: ${d.piecesAttention || "—"}`,
        `Nettoyages en profondeur demandés: ${
          d.grandMenageOptions.length ? d.grandMenageOptions.join(", ") : "—"
        }`,
        d.grandMenageAutre ? `Autres (grand ménage): ${d.grandMenageAutre}` : null,
      );
    }

    L.push(
      "",
      "=== SERVICES SOUHAITÉS ===",
      d.services.join(", "),
      d.servicesAutre ? `Autres: ${d.servicesAutre}` : null,
      "",
      "=== FRÉQUENCE ===",
      `Fréquence: ${d.frequence}`,
      `Journées préférées: ${d.jours.length ? d.jours.join(", ") : "—"}`,
      `Heure souhaitée: ${d.heure || "—"}`,
      `Horaire flexible: ${d.flexible || "—"}`,
      "",
      "=== ANIMAUX ===",
      `Animaux: ${d.animaux || "—"}`,
      d.animauxDetails ? `Lesquels: ${d.animauxDetails}` : null,
      "",
      "=== PRODUITS ===",
      `Fourniture des produits: ${d.produits || "—"}`,
      `Préférences particulières: ${d.produitsPreferences || "—"}`,
      "",
      "=== ACCÈS À LA RÉSIDENCE ===",
      `Présent lors des visites: ${d.present || "—"}`,
      `Clé / serrure intelligente / code: ${d.acces || "—"}`,
      `Consignes particulières: ${d.consignes || "—"}`,
      "",
      "=== COMMENTAIRES ===",
      d.commentaires || "(aucun)",
    );

    return L.filter((x) => x !== null).join("\n");
  };

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
      const first = document.querySelector<HTMLElement>("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});
    const d = result.data;
    const subject = encodeURIComponent(
      `Demande de soumission — ${d.typeResidence} — ${d.nom}`,
    );
    const body = encodeURIComponent(buildBody(d));
    const url = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setMailtoUrl(url);
    window.location.href = url;
  };

  const fieldClass = (k: string) =>
    `w-full rounded-xl border-2 px-4 py-3 bg-background outline-none transition ${
      errors[k]
        ? "border-destructive focus:border-destructive"
        : "border-border focus:border-primary"
    }`;

  const Err = ({ k }: { k: string }) =>
    errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;

  const Section = ({
    n,
    title,
    subtitle,
    children,
  }: {
    n: number | string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
  }) => (
    <fieldset className="rounded-2xl border border-border bg-background/40 p-5">
      <legend className="px-2 text-sm font-bold text-primary">
        {n}. {title}
      </legend>
      {subtitle && <p className="mb-4 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="space-y-3">{children}</div>
    </fieldset>
  );

  const CheckCard = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 text-left rounded-xl px-3 py-2.5 border-2 text-sm font-medium transition ${
        active
          ? "border-primary bg-primary/10"
          : "border-border bg-background hover:border-primary/50"
      }`}
    >
      <span
        className={`grid h-4 w-4 shrink-0 place-items-center rounded border-2 ${
          active ? "border-primary bg-primary" : "border-muted-foreground/40"
        }`}
      >
        {active && <Check className="h-3 w-3 text-primary-foreground" />}
      </span>
      {label}
    </button>
  );

  const YesNo = ({
    value,
    onChange,
    name,
  }: {
    value: string;
    onChange: (v: string) => void;
    name: string;
  }) => (
    <div className="flex gap-2">
      {OUI_NON.map((o) => (
        <button
          key={o}
          type="button"
          aria-label={`${name} : ${o}`}
          aria-pressed={value === o}
          onClick={() => onChange(value === o ? "" : o)}
          className={`rounded-xl px-4 py-2 border-2 text-sm font-medium transition ${
            value === o
              ? "border-primary bg-primary/10"
              : "border-border bg-background hover:border-primary/50"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className="sticky top-0 z-30 backdrop-blur border-b border-border/50"
        style={{ background: "color-mix(in oklab, var(--background) 85%, transparent)" }}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 max-w-6xl mx-auto">
          <Link to="/" className="flex min-w-0 items-center gap-2 font-bold text-lg">
            M.L Excellence
          </Link>
          <nav className="flex items-center gap-1 sm:gap-3 text-sm font-medium shrink-0">
            <Link
              to="/services"
              className="px-2 py-1 text-muted-foreground hover:text-foreground transition"
            >
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

      <section className="px-6 pt-12 pb-8 max-w-3xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
          <Star className="h-3.5 w-3.5 text-primary fill-primary" />
          Réponse garantie en moins de 24 h
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Questionnaire de{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            soumission gratuite
          </span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Plus vos réponses sont précises, plus votre soumission sera juste. Mélanie vous
          répond personnellement avec un prix clair — sans engagement.
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
          {[
            { icon: Clock, t: "Réponse < 24 h" },
            { icon: ShieldCheck, t: "Équipe assurée" },
            { icon: Check, t: "Sans engagement" },
          ].map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-3 py-2"
            >
              <Icon className="h-4 w-4 text-primary" /> {t}
            </div>
          ))}
        </div>
      </section>

      <section id="form" className="px-4 sm:px-6 pb-16">
        <div className="mx-auto mb-8 max-w-3xl overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-sm">
          <div className="border-b border-border bg-primary/5 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                <WandSparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase text-primary">Conseiller intelligent</p>
                <h2 className="mt-1 text-2xl font-bold">Trouvez le bon service en quelques mots</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Décrivez votre logement, son état actuel, vos priorités et la fréquence souhaitée.
                  Vous recevrez des recommandations avant de remplir la demande.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 p-5 sm:p-6">
            <label htmlFor="advisor-description" className="text-sm font-semibold">
              Votre logement et le service recherché
            </label>
            <textarea
              id="advisor-description"
              rows={5}
              value={advisorDescription}
              onChange={(event) => setAdvisorDescription(event.target.value)}
              maxLength={3000}
              placeholder="Ex. Maison de 3 chambres à Bécancour, deux salles de bain, avec un chien. Nous aimerions un grand ménage puis un entretien aux deux semaines, surtout pour la cuisine et les planchers."
              className={`${fieldClass("advisorDescription")} resize-none`}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-muted-foreground">{advisorDescription.length} / 3 000 caractères</span>
              <button
                type="button"
                onClick={handleAdvisor}
                disabled={advisorLoading}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {advisorLoading ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                )}
                {advisorLoading ? "Analyse en cours…" : "Obtenir mes recommandations"}
              </button>
            </div>
            {advisorError && (
              <p role="alert" className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                {advisorError}
              </p>
            )}
            {advisorResult && (
              <div className="space-y-5 border-t border-border pt-5" aria-live="polite">
                <div>
                  <p className="text-xs font-bold uppercase text-primary">Notre recommandation</p>
                  <p className="mt-1 font-medium leading-relaxed">{advisorResult.resume}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold">Services adaptés</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      {advisorResult.services.map((service) => (
                        <li key={service} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Pourquoi</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      {advisorResult.raisons.map((raison) => (
                        <li key={raison} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {raison}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <h3 className="text-sm font-bold">À préciser dans votre demande</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {advisorResult.renseignements.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={applyAdvisorResult}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary/10 px-5 py-3 font-bold text-primary transition hover:bg-primary/15"
                >
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Ajouter ces choix à ma demande
                </button>
                <p className="text-xs text-muted-foreground">
                  Ces conseils sont indicatifs. M.L Excellence confirmera les services après examen de votre demande.
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className="max-w-3xl mx-auto rounded-3xl p-1"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="bg-card rounded-[calc(1.5rem-4px)] p-4 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* 1 — Informations générales */}
              <Section n={1} title="Informations générales">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div data-error={!!errors.nom}>
                    <input
                      placeholder="Nom complet *"
                      aria-label="Nom complet"
                      value={form.nom}
                      onChange={(e) => set("nom", e.target.value)}
                      maxLength={120}
                      autoComplete="name"
                      className={fieldClass("nom")}
                      aria-invalid={!!errors.nom}
                    />
                    <Err k="nom" />
                  </div>
                  <div data-error={!!errors.tel}>
                    <input
                      placeholder="Téléphone *"
                      aria-label="Téléphone"
                      value={form.tel}
                      onChange={(e) => set("tel", e.target.value)}
                      type="tel"
                      maxLength={30}
                      autoComplete="tel"
                      inputMode="tel"
                      className={fieldClass("tel")}
                      aria-invalid={!!errors.tel}
                    />
                    <Err k="tel" />
                  </div>
                  <div data-error={!!errors.courriel}>
                    <input
                      type="email"
                      placeholder="Courriel *"
                      aria-label="Courriel"
                      value={form.courriel}
                      onChange={(e) => set("courriel", e.target.value)}
                      maxLength={150}
                      autoComplete="email"
                      inputMode="email"
                      className={fieldClass("courriel")}
                      aria-invalid={!!errors.courriel}
                    />
                    <Err k="courriel" />
                  </div>
                  <div data-error={!!errors.adresse}>
                    <input
                      placeholder="Adresse complète (ville incluse) *"
                      aria-label="Adresse complète"
                      value={form.adresse}
                      onChange={(e) => set("adresse", e.target.value)}
                      maxLength={200}
                      autoComplete="street-address"
                      className={fieldClass("adresse")}
                      aria-invalid={!!errors.adresse}
                    />
                    <Err k="adresse" />
                  </div>
                </div>
              </Section>

              {/* Immeuble locatif */}
              <Section
                n={1.5 as unknown as number}
                title="Immeuble locatif (si applicable)"
                subtitle="À remplir si la demande concerne un bloc appartements ou un immeuble avec espaces communs."
              >
                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    placeholder="Nom de l'immeuble"
                    aria-label="Nom de l'immeuble"
                    value={form.nomImmeuble}
                    onChange={(e) => set("nomImmeuble", e.target.value)}
                    maxLength={120}
                    className={fieldClass("nomImmeuble")}
                  />
                  <input
                    placeholder="Nombre de logements"
                    aria-label="Nombre de logements"
                    value={form.nbLogements}
                    onChange={(e) => set("nbLogements", e.target.value)}
                    maxLength={20}
                    inputMode="numeric"
                    className={fieldClass("nbLogements")}
                  />
                  <input
                    placeholder="Nombre d'entrées"
                    aria-label="Nombre d'entrées"
                    value={form.nbEntrees}
                    onChange={(e) => set("nbEntrees", e.target.value)}
                    maxLength={20}
                    inputMode="numeric"
                    className={fieldClass("nbEntrees")}
                  />
                </div>
                <p className="text-sm font-semibold">Espaces communs à entretenir</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {ESPACES_COMMUNS.map((e) => (
                    <CheckCard
                      key={e}
                      label={e}
                      active={form.espacesCommuns.includes(e)}
                      onClick={() => toggle("espacesCommuns", e)}
                    />
                  ))}
                </div>
                <textarea
                  placeholder="Disponibilités d'accès (jours, heures, code de porte, concierge sur place…)"
                  aria-label="Disponibilités d'accès"
                  value={form.disponibilitesAcces}
                  onChange={(e) => set("disponibilitesAcces", e.target.value)}
                  maxLength={300}
                  rows={3}
                  className={fieldClass("disponibilitesAcces")}
                />
              </Section>

              {/* 2 — Résidence */}
              <Section n={2} title="Informations sur la résidence">
                <div data-error={!!errors.typeResidence}>
                  <select
                    aria-label="Type de résidence"
                    value={form.typeResidence}
                    onChange={(e) => set("typeResidence", e.target.value)}
                    className={fieldClass("typeResidence")}
                  >
                    <option value="">Type de résidence *</option>
                    {TYPES_RESIDENCE.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <Err k="typeResidence" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <input
                    placeholder="Chambres"
                    aria-label="Nombre de chambres"
                    inputMode="numeric"
                    value={form.chambres}
                    onChange={(e) => set("chambres", e.target.value)}
                    maxLength={20}
                    className={fieldClass("chambres")}
                  />
                  <input
                    placeholder="Salles de bain"
                    aria-label="Nombre de salles de bain"
                    inputMode="numeric"
                    value={form.sdb}
                    onChange={(e) => set("sdb", e.target.value)}
                    maxLength={20}
                    className={fieldClass("sdb")}
                  />
                  <input
                    placeholder="Salles d'eau"
                    aria-label="Nombre de salles d'eau"
                    inputMode="numeric"
                    value={form.sallesEau}
                    onChange={(e) => set("sallesEau", e.target.value)}
                    maxLength={20}
                    className={fieldClass("sallesEau")}
                  />
                  <input
                    placeholder="Étages"
                    aria-label="Nombre d'étages"
                    inputMode="numeric"
                    value={form.etages}
                    onChange={(e) => set("etages", e.target.value)}
                    maxLength={20}
                    className={fieldClass("etages")}
                  />
                </div>
                <input
                  placeholder="Superficie approximative (pi²)"
                  aria-label="Superficie approximative"
                  value={form.superficie}
                  onChange={(e) => set("superficie", e.target.value)}
                  maxLength={60}
                  className={fieldClass("superficie")}
                />
                <div className="grid sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <p className="mb-2 text-sm font-medium">Sous-sol à entretenir</p>
                    <YesNo
                      name="Sous-sol à entretenir"
                      value={form.sousSol}
                      onChange={(v) => set("sousSol", v)}
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium">Garage à entretenir</p>
                    <YesNo
                      name="Garage à entretenir"
                      value={form.garage}
                      onChange={(v) => set("garage", v)}
                    />
                  </div>
                </div>
              </Section>

              {/* 3 — Type de service */}
              <Section
                n={3}
                title="Entretien régulier ou grand ménage initial"
                subtitle="Avant de débuter un entretien régulier, certaines résidences nécessitent un grand ménage initial afin de remettre la maison à niveau."
              >
                <div className="grid gap-2" data-error={!!errors.serviceType}>
                  {SERVICE_TYPE.map((s) => {
                    const active = form.serviceType === s.id;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        aria-pressed={active}
                        onClick={() => set("serviceType", s.id)}
                        className={`text-left rounded-xl px-4 py-3 border-2 transition ${
                          active
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-primary/50"
                        }`}
                      >
                        <span className="block font-semibold text-sm">{s.titre}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                          {s.desc}
                        </span>
                      </button>
                    );
                  })}
                  <Err k="serviceType" />
                </div>

                {grandMenage && (
                  <div className="mt-4 space-y-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
                    <p className="text-sm font-semibold">
                      Précisions pour le grand ménage
                    </p>
                    <input
                      placeholder="Depuis combien de temps un ménage complet n'a pas été fait ?"
                      aria-label="Depuis combien de temps un ménage complet n'a pas été effectué"
                      value={form.depuisQuand}
                      onChange={(e) => set("depuisQuand", e.target.value)}
                      maxLength={120}
                      className={fieldClass("depuisQuand")}
                    />
                    <textarea
                      rows={2}
                      placeholder="Accumulations importantes de poussière, graisse, savon ou calcaire ?"
                      aria-label="Accumulations importantes"
                      value={form.accumulations}
                      onChange={(e) => set("accumulations", e.target.value)}
                      maxLength={500}
                      className={`${fieldClass("accumulations")} resize-none`}
                    />
                    <textarea
                      rows={2}
                      placeholder="Certaines pièces demandent-elles une attention particulière ?"
                      aria-label="Pièces demandant une attention particulière"
                      value={form.piecesAttention}
                      onChange={(e) => set("piecesAttention", e.target.value)}
                      maxLength={500}
                      className={`${fieldClass("piecesAttention")} resize-none`}
                    />
                    <p className="pt-1 text-sm font-medium">
                      Souhaitez-vous également le nettoyage des :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {GRAND_MENAGE_OPTIONS.map((o) => (
                        <CheckCard
                          key={o}
                          label={o}
                          active={form.grandMenageOptions.includes(o)}
                          onClick={() => toggle("grandMenageOptions", o)}
                        />
                      ))}
                    </div>
                    <input
                      placeholder="Autres (précisez)"
                      aria-label="Autres éléments à nettoyer"
                      value={form.grandMenageAutre}
                      onChange={(e) => set("grandMenageAutre", e.target.value)}
                      maxLength={200}
                      className={fieldClass("grandMenageAutre")}
                    />
                  </div>
                )}
              </Section>

              {/* 4 — Services souhaités */}
              <Section n={4} title="Services souhaités">
                <div className="grid sm:grid-cols-2 gap-2" data-error={!!errors.services}>
                  {SERVICES_OPTIONS.map((o) => (
                    <CheckCard
                      key={o}
                      label={o}
                      active={form.services.includes(o)}
                      onClick={() => toggle("services", o)}
                    />
                  ))}
                </div>
                <Err k="services" />
                <input
                  placeholder="Autres services (précisez)"
                  aria-label="Autres services"
                  value={form.servicesAutre}
                  onChange={(e) => set("servicesAutre", e.target.value)}
                  maxLength={200}
                  className={fieldClass("servicesAutre")}
                />
              </Section>

              {/* 5 — Fréquence */}
              <Section n={5} title="Fréquence et horaire">
                <div data-error={!!errors.frequence}>
                  <select
                    aria-label="Fréquence souhaitée"
                    value={form.frequence}
                    onChange={(e) => set("frequence", e.target.value)}
                    className={fieldClass("frequence")}
                  >
                    <option value="">Fréquence souhaitée *</option>
                    {FREQUENCES.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <Err k="frequence" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium">Journées préférées</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {JOURS.map((j) => (
                      <CheckCard
                        key={j}
                        label={j}
                        active={form.jours.includes(j)}
                        onClick={() => toggle("jours", j)}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 items-end">
                  <input
                    placeholder="Heure souhaitée (ex. avant-midi)"
                    aria-label="Heure souhaitée"
                    value={form.heure}
                    onChange={(e) => set("heure", e.target.value)}
                    maxLength={40}
                    className={fieldClass("heure")}
                  />
                  <div>
                    <p className="mb-2 text-sm font-medium">Horaire flexible</p>
                    <YesNo
                      name="Horaire flexible"
                      value={form.flexible}
                      onChange={(v) => set("flexible", v)}
                    />
                  </div>
                </div>
              </Section>

              {/* 6 — Animaux */}
              <Section n={6} title="Animaux">
                <div>
                  <p className="mb-2 text-sm font-medium">Avez-vous des animaux ?</p>
                  <YesNo
                    name="Avez-vous des animaux"
                    value={form.animaux}
                    onChange={(v) => set("animaux", v)}
                  />
                </div>
                {form.animaux === "Oui" && (
                  <input
                    placeholder="Si oui, lesquels ?"
                    aria-label="Quels animaux"
                    value={form.animauxDetails}
                    onChange={(e) => set("animauxDetails", e.target.value)}
                    maxLength={200}
                    className={fieldClass("animauxDetails")}
                  />
                )}
              </Section>

              {/* 7 — Produits */}
              <Section n={7} title="Produits ménagers">
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Je fournis les produits",
                    "L'entreprise fournit les produits",
                  ].map((p) => (
                    <CheckCard
                      key={p}
                      label={p}
                      active={form.produits === p}
                      onClick={() => set("produits", form.produits === p ? "" : p)}
                    />
                  ))}
                </div>
                <input
                  placeholder="Préférences particulières (sans parfum, écologiques…)"
                  aria-label="Préférences de produits"
                  value={form.produitsPreferences}
                  onChange={(e) => set("produitsPreferences", e.target.value)}
                  maxLength={300}
                  className={fieldClass("produitsPreferences")}
                />
              </Section>

              {/* 8 — Accès */}
              <Section n={8} title="Accès à la résidence">
                <div>
                  <p className="mb-2 text-sm font-medium">
                    Serez-vous présent lors des visites ?
                  </p>
                  <YesNo
                    name="Présent lors des visites"
                    value={form.present}
                    onChange={(v) => set("present", v)}
                  />
                </div>
                <input
                  placeholder="Clé, serrure intelligente ou code d'accès ?"
                  aria-label="Mode d'accès"
                  value={form.acces}
                  onChange={(e) => set("acces", e.target.value)}
                  maxLength={300}
                  className={fieldClass("acces")}
                />
                <textarea
                  rows={2}
                  placeholder="Consignes particulières ?"
                  aria-label="Consignes particulières"
                  value={form.consignes}
                  onChange={(e) => set("consignes", e.target.value)}
                  maxLength={500}
                  className={`${fieldClass("consignes")} resize-none`}
                />
              </Section>

              {/* 9 — Commentaires */}
              <Section
                n={9}
                title="Commentaires"
                subtitle="Ajoutez toute information pouvant nous aider à préparer une soumission précise."
              >
                <textarea
                  rows={4}
                  placeholder="Vos commentaires…"
                  aria-label="Commentaires"
                  value={form.commentaires}
                  onChange={(e) => set("commentaires", e.target.value)}
                  maxLength={2000}
                  className={`${fieldClass("commentaires")} resize-none`}
                />
              </Section>

              <label className="flex items-start gap-3 text-sm" data-error={!!errors.consent}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                  aria-label="Consentement à être contacté"
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

              {mailtoUrl && (
                <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 text-sm text-center">
                  <p className="font-medium">
                    Votre logiciel de courriel devrait s'ouvrir avec votre questionnaire
                    complété.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    S'il ne s'ouvre pas,{" "}
                    <a href={mailtoUrl} className="text-primary underline font-medium">
                      cliquez ici
                    </a>{" "}
                    ou écrivez directement à{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-primary underline font-medium break-all"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </div>
              )}

              <p className="text-xs text-center text-muted-foreground">
                Réponse en moins de 24 h · Gratuit · Sans engagement
              </p>
            </form>
          </div>
        </div>

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
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary transition"
          >
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Courriel</p>
              <p className="text-muted-foreground break-all">{CONTACT_EMAIL}</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Zone de service</p>
              <p className="text-muted-foreground">Nicolet et environs · Mauricie & Centre-du-Québec</p>
            </div>
          </div>
        </div>
      </section>

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
        <p className="mt-2">Nicolet (QC) · Desserte : Mauricie & Centre-du-Québec · 819-996-9022</p>
        <p className="mt-3">
          <Link to="/" className="hover:text-foreground">
            Accueil
          </Link>{" "}
          ·{" "}
          <Link to="/services" className="hover:text-foreground">
            Services
          </Link>{" "}
          ·{" "}
          <a
            href="https://www.google.com/maps?cid=1541346873343242194"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Voir sur Google
          </a>
        </p>
      </footer>
    </div>
  );
}
