import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ml-excellence-logo.png.asset.json";
import { Home, Sparkles, Leaf, Car, Check, Building2, Mail, ArrowLeft } from "lucide-react";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & tarifs 2027 — M.L Excellence Mauricie" },
      {
        name: "description",
        content:
          "Tarifs moyens 2027 en Mauricie : ménage résidentiel et commercial, contrats récurrents, plates-bandes et lavage auto. Ce qui est inclus dans chaque service M.L Excellence.",
      },
      { property: "og:title", content: "Services & tarifs 2027 — M.L Excellence" },
      {
        property: "og:description",
        content:
          "Détails et tarifs moyens 2027 pour résidentiel et commercial partout en Mauricie.",
      },
      { property: "og:url", content: "https://entretien-ml.lovable.app/services" },
    ],

    links: [{ rel: "canonical", href: "https://entretien-ml.lovable.app/services" }],
  }),
  component: ServicesPage,
});

type Tier = { label: string; price: string; note?: string };
type ServiceBlock = {
  icon: typeof Home;
  title: string;
  intro: string;
  includes: string[];
  residential: Tier[];
  commercial: Tier[];
};

const SERVICES: ServiceBlock[] = [
  {
    icon: Home,
    title: "Ménage intérieur — une fois",
    intro:
      "Idéal pour un grand ménage saisonnier, un déménagement ou une remise à neuf ponctuelle.",
    includes: [
      "Dépoussiérage complet (meubles, plinthes, cadrages)",
      "Salles de bain : douche, bain, toilette, lavabo, miroirs",
      "Cuisine : comptoirs, électros extérieurs, évier, dosseret",
      "Planchers : aspirateur et lavage",
      "Vidage des poubelles et changement des sacs",
    ],
    residential: [
      { label: "Condo / 3½ – 4½", price: "180 – 260 $", note: "≈ 3 h" },
      { label: "Maison 5½ – 6½", price: "260 – 380 $", note: "≈ 4 – 5 h" },
      { label: "Grande propriété 7½ +", price: "380 – 550 $", note: "sur mesure" },
    ],
    commercial: [
      { label: "Bureau / local < 100 m²", price: "240 – 360 $" },
      { label: "Local 100 – 250 m²", price: "360 – 600 $" },
      { label: "Espace 250 m² +", price: "sur soumission" },
    ],
  },
  {
    icon: Sparkles,
    title: "Contrat d'entretien récurrent",
    intro:
      "Visites régulières (hebdo, aux 2 semaines ou mensuelles) avec liste personnalisée et tarif réduit.",
    includes: [
      "Plan de ménage adapté à vos pièces prioritaires",
      "Même équipe à chaque visite quand possible",
      "Produits écoresponsables fournis sur demande",
      "Ajustements saisonniers (vitres, frigo, four) en option",
    ],
    residential: [
      { label: "Aux 2 semaines — 4½", price: "120 – 160 $ / visite" },
      { label: "Aux 2 semaines — 5½/6½", price: "160 – 220 $ / visite" },
      { label: "Hebdomadaire", price: "−10 % sur le tarif visite" },
    ],
    commercial: [
      { label: "Bureau, 1 visite / semaine", price: "à partir de 180 $ / visite" },
      { label: "Commerce, 2–3 visites / semaine", price: "forfait mensuel sur mesure" },
      { label: "Contrat annuel", price: "tarif préférentiel" },
    ],
  },
  {
    icon: Leaf,
    title: "Entretien extérieur & plates-bandes",
    intro:
      "Désherbage, nettoyage et mise en beauté des plates-bandes, bordures et entrées partout en Mauricie.",
    includes: [
      "Désherbage manuel des plates-bandes",
      "Taille légère des vivaces et arbustes",
      "Nettoyage des bordures et paillis remis en place",
      "Ramassage et disposition des résidus végétaux",
    ],
    residential: [
      { label: "Petite plate-bande (< 10 m²)", price: "90 – 140 $" },
      { label: "Moyenne (10 – 25 m²)", price: "140 – 240 $" },
      { label: "Grande (25 m² +)", price: "à partir de 240 $" },
    ],
    commercial: [
      { label: "Entrée de commerce", price: "à partir de 160 $" },
      { label: "Forfait saison (mai à oct.)", price: "sur soumission" },
    ],
  },
  {
    icon: Car,
    title: "Lavage auto intérieur & extérieur",
    intro:
      "Remise à neuf complète du véhicule : carrosserie, jantes, habitacle, vitres et tapis.",
    includes: [
      "Lavage extérieur, jantes et pneus lustrés",
      "Aspirateur complet (sièges, tapis, coffre)",
      "Nettoyage du tableau de bord et des plastiques",
      "Vitres intérieures et extérieures sans traces",
      "Désodorisation légère",
    ],
    residential: [
      { label: "Berline / compacte", price: "80 – 110 $" },
      { label: "VUS / multisegment", price: "110 – 150 $" },
      { label: "Camionnette / 7 passagers", price: "140 – 190 $" },
    ],
    commercial: [
      { label: "Flotte 3 véhicules +", price: "−15 % par véhicule" },
      { label: "Contrat mensuel", price: "sur soumission" },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="M.L Excellence — Services de propreté" className="h-12 w-auto" width={180} height={120} />
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition">
            Accueil
          </Link>
          <Link to="/services" className="text-foreground font-semibold">
            Services
          </Link>
          <Link
            to="/"
            hash="soumission"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-primary-foreground"
            style={{ background: "var(--gradient-hero)" }}
          >
            Soumission
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-6 pb-10 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Tarifs moyens 2027 · Mauricie
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Nos services &{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            tarifs 2027
          </span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Résidentiel ou commercial, partout en Mauricie. Voici ce que comprend chaque service et
          les fourchettes de prix moyennes pour 2027. Chaque soumission reste personnalisée selon la
          superficie, l'état et la fréquence.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 pb-16 space-y-10">
        {SERVICES.map(({ icon: Icon, title, intro, includes, residential, commercial }) => (
          <article
            key={title}
            className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm"
          >
            <div
              className="p-6 sm:p-8 flex items-start gap-5"
              style={{ background: "color-mix(in oklab, var(--primary) 6%, transparent)" }}
            >
              <div
                className="h-14 w-14 shrink-0 rounded-2xl flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-muted-foreground mt-1">{intro}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Ce qui est inclus
                </h3>
                <ul className="mt-3 space-y-2">
                  {includes.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <PricingColumn
                label="Résidentiel — privé"
                icon={Home}
                tiers={residential}
              />
              <PricingColumn
                label="Commercial"
                icon={Building2}
                tiers={commercial}
              />
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-1"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Une soumission précise en 30 secondes</h2>
            <p className="text-muted-foreground mt-2">
              Les tarifs ci-dessus sont des moyennes 2027 en Mauricie. Donnez-nous quelques détails
              et recevez un prix ferme adapté à votre besoin.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                to="/"
                hash="soumission"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
              >
                Demander ma soumission
              </Link>
              <a
                href="mailto:Melanielavas@outlook.com"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border-2 border-primary"
              >
                <Mail className="h-4 w-4" /> Melanielavas@outlook.com
              </a>
            </div>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Entretien M.L — Au service de la Mauricie
      </footer>
    </div>
  );
}

function PricingColumn({
  label,
  icon: Icon,
  tiers,
}: {
  label: string;
  icon: typeof Home;
  tiers: Tier[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" /> {label}
      </h3>
      <ul className="mt-3 space-y-2">
        {tiers.map((t) => (
          <li
            key={t.label}
            className="flex items-baseline justify-between gap-3 rounded-xl border border-border px-3 py-2 bg-background"
          >
            <div>
              <p className="text-sm font-medium leading-tight">{t.label}</p>
              {t.note && <p className="text-xs text-muted-foreground">{t.note}</p>}
            </div>
            <span className="text-sm font-bold text-foreground whitespace-nowrap">{t.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
