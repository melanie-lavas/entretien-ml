import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ml-excellence-logo.png.asset.json";
import { Home, Sparkles, Check, Building2, Mail, ArrowLeft, ShieldCheck, HardHat } from "lucide-react";

type ServiceBlock = {
  icon: typeof Home;
  title: string;
  intro: string;
  includes: string[];
  residential: string[];
  commercial: string[];
  whyUs: { t: string; d: string }[];
  faq: { q: string; a: string }[];
};

const SERVICES: ServiceBlock[] = [  {
    icon: HardHat,
    title: "Ménage après chantier",
    intro: "Construction neuve ou rénovation terminée ? Nous enlevons la poussière de chantier et nettoyons jusqu’à la finition : armoires, cuisine, salles de bain, vitres intérieures et planchers — pour remettre un bâtiment impeccable, prêt à livrer ou à habiter. Service pour entrepreneurs et propriétaires à Gentilly, Bécancour et Nicolet.",
    includes: ["Poussière de construction (murs, plafonds, surfaces)", "Armoires et rangements, intérieur et extérieur", "Cuisine et salles de bain complètes", "Vitres, cadres et rails (intérieur)", "Planchers aspirés et lavés", "Plinthes, luminaires et bouches de ventilation dépoussiérés"],
    residential: ["Maison neuve avant emménagement", "Après rénovation", "Agrandissement"],
    commercial: ["Remise de chantier à l’entrepreneur", "Projets commerciaux", "Coordination avec l’échéancier"],
    whyUs: [{ t: "Prêt à livrer", d: "Une finition qui met votre travail en valeur." }, { t: "Équipe assurée", d: "Responsabilité civile complète." }, { t: "Selon votre échéancier", d: "Intervention coordonnée avec la fin des travaux." }, { t: "Contact direct", d: "Vous parlez directement à Mélanie." }],
    faq: [{ q: "Quel est le délai pour une soumission ?", a: "La soumission est gratuite et arrive en moins de 24 h. Indiquez la superficie et la date de fin des travaux." }, { q: "Desservez-vous les entrepreneurs de Gentilly et Bécancour ?", a: "Oui, c’est même un de nos secteurs prioritaires, avec Nicolet." }],
  },
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
    commercial: [],
    whyUs: [
      { t: "Équipe assurée", d: "Responsabilité civile complète, employés vérifiés." },
      { t: "Satisfaction garantie", d: "Pas content ? On revient sans frais." },
      { t: "Matériel fourni", d: "Produits, vadrouilles, aspirateur — tout est inclus." },
      { t: "Prix ferme", d: "Aucune surprise à la fin du mandat." },
    ],
    faq: [
      { q: "Combien coûte un ménage résidentiel ?", a: "Le prix dépend de la superficie et de l'état actuel. Soumission gratuite en 24 h." },
      { q: "Dois-je être présent ?", a: "Non. Plusieurs clients nous laissent une clé ou un code — nous sommes assurés." },
      { q: "Quels produits utilisez-vous ?", a: "Produits professionnels efficaces, gamme écoresponsable sur demande sans frais." },
    ],
  },
  {
    icon: Sparkles,
    title: "Contrat d'entretien récurrent",
    intro:
      "Reprenez votre temps. Avec un contrat hebdomadaire, aux deux semaines ou mensuel, vous rentrez chez vous dans un espace impeccable, sans y penser. Tarif réduit, même équipe à chaque visite quand possible, et une liste personnalisée selon vos pièces et vos priorités. Aucun engagement à long terme — on bâtit la confiance visite après visite.",
    includes: [
      "Plan de ménage 100 % personnalisé selon vos pièces prioritaires",
      "Même équipe à chaque visite quand possible — vous n'avez rien à réexpliquer",
      "Produits écoresponsables fournis sur demande, sans frais",
      "Ajustements saisonniers en option (vitres, frigo, four, garde-robes)",
      "Rappels automatiques et flexibilité d'horaire",
      "Tarif visite réduit par rapport au ménage ponctuel",
    ],
    residential: ["Visites aux 2 semaines", "Visites hebdomadaires", "Forfait sur mesure"],
    commercial: [],
    whyUs: [
      { t: "Sans engagement", d: "Vous arrêtez quand vous voulez, aucune pénalité." },
      { t: "Tarif dégressif", d: "Plus la fréquence est haute, plus le prix baisse." },
      { t: "Même équipe", d: "Constance du résultat, aucune zone oubliée." },
      { t: "Facturation simple", d: "Mensuelle ou par visite, à votre choix." },
    ],
    faq: [
      { q: "Quelle fréquence recommandez-vous ?", a: "Famille active : aux 2 semaines. Grands besoins : chaque semaine." },
      { q: "Puis-je suspendre durant les vacances ?", a: "Oui, sans frais. Prévenez-nous au moins 48 h à l'avance." },
      { q: "Y a-t-il un rabais vs ponctuel ?", a: "Oui, généralement entre 10 % et 25 % par visite selon la fréquence." },
    ],
  }
];

const ALL_FAQ = SERVICES.flatMap((s) => s.faq);

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services de ménage Bécancour & Nicolet | M.L Excellence" },
      {
        name: "description",
        content:
          "Services M.L Excellence à Bécancour et Nicolet : ménage après chantier et ménage résidentiel. Soumission gratuite.",
      },
      { name: "geo.region", content: "CA-QC" },
      { name: "geo.placename", content: "Bécancour, Gentilly, Nicolet" },
      { property: "og:title", content: "Services de ménage à Bécancour — M.L Excellence" },
      {
        property: "og:description",
        content:
          "Après chantier et résidentiel à Bécancour et Nicolet. Prix selon le service — soumission gratuite et sans engagement.",
      },
      { property: "og:url", content: "https://mlentretien.com/services" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mlentretien.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services de ménage Bécancour — M.L Excellence" },
      { name: "twitter:description", content: "Après chantier et résidentiel à Bécancour et Nicolet. Soumission gratuite." },
      { name: "twitter:image", content: "https://mlentretien.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mlentretien.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://mlentretien.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://mlentretien.com/services" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Services de propreté M.L Excellence à Bécancour",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              provider: { "@id": "https://mlentretien.com/#business" },
              areaServed: [
                { "@type": "City", name: "Bécancour" },
                { "@type": "City", name: "Gentilly" },
                { "@type": "City", name: "Nicolet" },
              ],
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ALL_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

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
            to="/soumission"
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
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Services de propreté · Bécancour & Nicolet
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Services de ménage à{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            Bécancour et Nicolet
          </span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Après chantier et résidentiel, à Bécancour et Nicolet. Voici ce que comprend chaque service.
          Le prix est toujours établi selon le service demandé, la superficie et la fréquence —
          soumission gratuite et sans engagement.
        </p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >
          Prix selon le service · Soumission gratuite
        </p>
      </section>

      {/* Pages dédiées par service (SEO) */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="sr-only">Pages détaillées par service</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {[
            { slug: "menage-apres-chantier", label: "Ménage après chantier" },
            { slug: "menage-residentiel", label: "Ménage résidentiel" },
            { slug: "contrat-entretien-recurrent", label: "Contrat récurrent" },
          ].map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition"
              >
                {s.label} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 pb-16 space-y-10">
        {SERVICES.map(({ icon: Icon, title, intro, includes, residential, commercial, whyUs, faq }) => (
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
              {commercial.length > 0 && <OptionColumn label="Commercial" icon={Building2} items={commercial} />}
            </div>

            {/* Pourquoi nous choisir */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Pourquoi nous choisir
              </h3>
              <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {whyUs.map((b) => (
                  <div key={b.t} className="rounded-2xl border border-border p-4 bg-background">
                    <p className="font-bold text-sm">{b.t}</p>
                    <p className="text-xs text-muted-foreground mt-1">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Questions fréquentes
              </h3>
              <div className="mt-3 space-y-2">
                {faq.map((f) => (
                  <details key={f.q} className="rounded-2xl border border-border bg-background p-4">
                    <summary className="font-semibold cursor-pointer text-sm">{f.q}</summary>
                    <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Prix selon le service.</span>{" "}
                Réponse en moins de 24 h, sans engagement.
              </p>
              <Link
                to="/soumission"
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
                to="/soumission"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
              >
                Demander ma soumission
              </Link>
              <a
                href="mailto:info.mlexcellance@gmail.com"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border-2 border-primary"
              >
                <Mail className="h-4 w-4" /> info.mlexcellance@gmail.com
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
        <p className="font-semibold text-foreground">M.L Excellence</p>
        <p className="mt-1">Nicolet (QC) · Desserte : Bécancour et Nicolet · 819-996-9022</p>
        <p className="mt-2">
          <a
            href="https://www.google.com/maps?cid=1541346873343242194"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Voir sur Google · Avis & horaires
          </a>
        </p>
        <p className="mt-3">© {new Date().getFullYear()} M.L Excellence — Au service de Bécancour et Nicolet</p>
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
