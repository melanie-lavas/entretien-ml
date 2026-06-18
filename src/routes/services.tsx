import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ml-excellence-logo.png.asset.json";
import { Home, Sparkles, Leaf, Car, Check, Building2, Mail, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services de propreté — M.L Excellence Mauricie" },
      {
        name: "description",
        content:
          "Découvrez tous les services M.L Excellence en Mauricie : ménage résidentiel et commercial, contrats récurrents, plates-bandes et lavage auto. Prix personnalisé selon votre besoin — soumission gratuite.",
      },
      { property: "og:title", content: "Services de propreté — M.L Excellence Mauricie" },
      {
        property: "og:description",
        content:
          "Résidentiel et commercial partout en Mauricie. Prix selon le service — soumission gratuite et sans engagement.",
      },
      { property: "og:url", content: "https://entretien-ml.lovable.app/services" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://entretien-ml.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services de propreté — M.L Excellence Mauricie" },
      { name: "twitter:description", content: "Résidentiel et commercial partout en Mauricie. Soumission gratuite." },
      { name: "twitter:image", content: "https://entretien-ml.lovable.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://entretien-ml.lovable.app/services" }],
  }),
  component: ServicesPage,
});

type ServiceBlock = {
  icon: typeof Home;
  title: string;
  intro: string;
  includes: string[];
  residential: string[];
  commercial: string[];
};

const SERVICES: ServiceBlock[] = [
  {
    icon: Home,
    title: "Ménage intérieur — une fois",
    intro:
      "Retrouvez une maison qui sent le neuf en une seule visite. Parfait pour un grand ménage saisonnier, une fin de bail, un déménagement, une vente immobilière ou simplement un coup de frais avant de recevoir. Notre équipe arrive avec tout le matériel, suit une liste détaillée et ne quitte pas avant que chaque pièce brille — satisfaction garantie ou on revient sans frais.",
    includes: [
      "Dépoussiérage complet (meubles, plinthes, cadrages, luminaires)",
      "Salles de bain désinfectées : douche, bain, toilette, lavabo, miroirs",
      "Cuisine : comptoirs, électros extérieurs, évier, dosseret, hotte",
      "Planchers : aspirateur et lavage adapté au revêtement",
      "Vidage des poubelles et changement des sacs",
      "Finition : vitres intérieures sur demande, parfum frais et discret",
    ],
    residential: ["Condo / 3½ – 4½", "Maison 5½ – 6½", "Grande propriété 7½ +"],
    commercial: ["Bureau / local < 100 m²", "Local 100 – 250 m²", "Espace 250 m² +"],
  },
  {
    icon: Sparkles,
    title: "Contrat d'entretien récurrent",
    intro:
      "Reprenez votre temps. Avec un contrat hebdomadaire, aux deux semaines ou mensuel, vous rentrez chez vous (ou au bureau) dans un espace impeccable, sans y penser. Tarif réduit, même équipe à chaque visite quand possible, et une liste personnalisée selon vos pièces et vos priorités. Aucun engagement à long terme — on bâtit la confiance visite après visite.",
    includes: [
      "Plan de ménage 100 % personnalisé selon vos pièces prioritaires",
      "Même équipe à chaque visite quand possible — vous n'avez rien à réexpliquer",
      "Produits écoresponsables fournis sur demande, sans frais",
      "Ajustements saisonniers en option (vitres, frigo, four, garde-robes)",
      "Rappels automatiques et flexibilité d'horaire",
      "Tarif visite réduit par rapport au ménage ponctuel",
    ],
    residential: ["Visites aux 2 semaines", "Visites hebdomadaires", "Forfait sur mesure"],
    commercial: ["Bureau — 1 visite / semaine", "Commerce — 2 à 3 visites / semaine", "Contrat annuel préférentiel"],
  },
  {
    icon: Leaf,
    title: "Entretien extérieur & plates-bandes",
    intro:
      "Vos plates-bandes méritent autant d'attention que votre salon. On désherbe à la main, on taille proprement, on remet le paillis en place et on repart en laissant vos bordures nettes — comme au premier jour. Idéal pour la mise en beauté printanière, la préparation à la vente d'une propriété ou un simple coup de fraîcheur avant un événement.",
    includes: [
      "Désherbage manuel complet (racines retirées, pas seulement coupées)",
      "Taille légère des vivaces et arbustes pour un rendu net",
      "Nettoyage des bordures et paillis redistribué uniformément",
      "Ramassage et disposition responsable des résidus végétaux",
      "Conseils gratuits pour garder un résultat durable",
    ],
    residential: ["Petite plate-bande", "Plate-bande moyenne", "Grande plate-bande"],
    commercial: ["Entrée de commerce", "Forfait saison (mai à oct.)"],
  },
  {
    icon: Car,
    title: "Lavage auto intérieur & extérieur",
    intro:
      "Redonnez à votre véhicule l'allure du jour de l'achat. Carrosserie lustrée, jantes propres, habitacle aspiré dans les moindres recoins, vitres sans traces et léger parfum frais. Parfait avant une revente, pour un véhicule de flotte à présenter à un client, ou simplement pour le plaisir de conduire un char impeccable.",
    includes: [
      "Lavage extérieur complet, jantes et pneus lustrés",
      "Aspirateur en profondeur (sièges, tapis, coffre, entre-sièges)",
      "Nettoyage du tableau de bord, console et plastiques",
      "Vitres intérieures et extérieures sans traces",
      "Désodorisation légère et discrète",
      "Tarif dégressif pour les flottes commerciales",
    ],
    residential: ["Berline / compacte", "VUS / multisegment", "Camionnette / 7 passagers"],
    commercial: ["Flotte 3 véhicules et +", "Contrat mensuel"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:px-6 py-2 sm:py-4 max-w-6xl mx-auto">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logoAsset.url} alt="M.L Excellence — Services de propreté" className="h-9 sm:h-12 w-auto shrink-0" width={180} height={120} />
        </Link>

        <nav className="flex items-center gap-1 sm:gap-4 text-sm font-medium shrink-0">
          <Link to="/" className="px-2 py-1 text-muted-foreground hover:text-foreground transition">
            Accueil
          </Link>
          <Link to="/services" className="px-2 py-1 text-foreground font-semibold">
            Services
          </Link>
          <Link
            to="/"
            hash="soumission"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-primary-foreground text-xs sm:text-sm"
            style={{ background: "var(--gradient-hero)" }}
          >
            Devis
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-6 pb-10 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Services de propreté · Mauricie
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Nos{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            services
          </span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Résidentiel ou commercial, partout en Mauricie. Voici ce que comprend chaque service.
          Le prix est toujours établi selon le service demandé, la superficie et la fréquence —
          soumission gratuite et sans engagement.
        </p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >
          Prix selon le service · Soumission gratuite
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

              <OptionColumn label="Résidentiel — privé" icon={Home} items={residential} />
              <OptionColumn label="Commercial" icon={Building2} items={commercial} />
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Prix selon le service.</span>{" "}
                Réponse en moins de 24 h, sans engagement.
              </p>
              <Link
                to="/"
                hash="soumission"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
              >
                <Sparkles className="h-4 w-4" /> Demander une soumission
              </Link>
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
              Le prix dépend toujours du service choisi, de la superficie et de la fréquence.
              Donnez-nous quelques détails et recevez un prix ferme, sans engagement.
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
        © {new Date().getFullYear()} M.L Excellence — Au service de la Mauricie
      </footer>
    </div>
  );
}

function OptionColumn({
  label,
  icon: Icon,
  items,
}: {
  label: string;
  icon: typeof Home;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" /> {label}
      </h3>
      <ul className="mt-3 space-y-2">
        {items.map((t) => (
          <li
            key={t}
            className="flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-2 bg-background"
          >
            <span className="text-sm font-medium leading-tight">{t}</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-primary whitespace-nowrap">
              Sur soumission
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
