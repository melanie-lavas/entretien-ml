import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import logoAsset from "@/assets/ml-excellence-logo.png.asset.json";
import { CITIES, getCityBySlug } from "@/lib/seo-locations";
import { Sparkles, Check, Home, Building2, Leaf, Car, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

const BASE = "https://mlentretien.com";

export const Route = createFileRoute("/menage/$city")({
  loader: ({ params }) => {
    const city = getCityBySlug(params.city);
    if (!city) throw notFound();
    return city;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const c = loaderData;
    const url = `${BASE}/menage/${c.slug}`;
    const title = `Ménage ${c.name} | M.L Excellence Mauricie`;
    const description = `Ménage résidentiel et commercial à ${c.name} (${c.region}) : contrats récurrents, grand ménage, plates-bandes. Équipe assurée, soumission gratuite.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: `ménage ${c.name}, entretien ménager ${c.name}, nettoyage commercial ${c.name}, femme de ménage ${c.name}, M.L Excellence ${c.name}` },
        { name: "geo.region", content: "CA-QC" },
        { name: "geo.placename", content: `${c.name}, ${c.region}, Québec` },
        { name: "geo.position", content: `${c.lat};${c.lng}` },
        { name: "ICBM", content: `${c.lat}, ${c.lng}` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_CA" },
        { property: "og:image", content: `${BASE}/og-image.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: `${BASE}/og-image.jpg` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE}/` },
              { "@type": "ListItem", position: 2, name: "Villes desservies", item: `${BASE}/services` },
              { "@type": "ListItem", position: 3, name: c.name, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Ménage résidentiel et commercial à ${c.name}`,
            serviceType: "Entretien ménager",
            provider: { "@id": `${BASE}/#business` },
            areaServed: { "@type": "City", name: c.name, address: { "@type": "PostalAddress", addressLocality: c.name, addressRegion: "QC", addressCountry: "CA" } },
            url,
            description,
            offers: {
              "@type": "Offer",
              priceCurrency: "CAD",
              availability: "https://schema.org/InStock",
              areaServed: c.name,
            },
          }),
        },
        ...(c.faq && c.faq.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: c.faq.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: CityPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-2xl font-bold">Ville non desservie</h1>
        <p className="text-muted-foreground mt-2">Consultez la liste de nos villes desservies.</p>
        <Link to="/services" className="mt-4 inline-block text-primary underline">Voir nos services</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <Link to="/" className="text-primary underline">Retour à l'accueil</Link>
    </div>
  ),
});

function CityPage() {
  const c = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:px-6 py-2 sm:py-4 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={logoAsset.url} alt="M.L Excellence" className="h-9 sm:h-12 w-auto" width={180} height={120} />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Accueil</Link>
          <Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
          <a href="tel:+18199969022" className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-primary-foreground text-xs sm:text-sm" style={{ background: "var(--gradient-hero)" }}>
            <Phone className="h-4 w-4" /> 819-996-9022
          </a>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-6 pt-8 pb-12">
        <nav aria-label="Fil d'Ariane" className="text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Accueil</Link> ›{" "}
          <Link to="/services" className="hover:text-foreground">Services</Link> ›{" "}
          <span className="text-foreground font-medium">{c.name}</span>
        </nav>
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" /> {c.region} · {c.name}
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Ménage résidentiel et commercial à{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
            {c.name}
          </span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">{c.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/soumission" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-lg" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
            <Sparkles className="h-4 w-4" /> Soumission gratuite à {c.name}
          </Link>
          <a href="tel:+18199969022" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border-2 border-primary">
            <Phone className="h-4 w-4" /> 819-996-9022
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Nos services à {c.name}</h2>
        <p className="text-center text-muted-foreground mb-8">Tout est offert dans votre secteur — résidentiel comme commercial.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Home, t: "Ménage résidentiel", slug: "menage-residentiel" },
            { icon: Building2, t: "Nettoyage commercial", slug: "nettoyage-commercial" },
            { icon: Leaf, t: "Plates-bandes", slug: "entretien-plates-bandes" },
            { icon: Car, t: "Lavage auto", slug: "lavage-auto" },
          ].map(({ icon: Icon, t, slug }) => (
            <Link
              key={slug}
              to="/services/$slug"
              params={{ slug }}
              className="rounded-2xl bg-card p-5 border border-border hover:-translate-y-1 transition shadow-sm"
            >
              <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-3 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold">{t}</h3>
              <p className="text-xs text-muted-foreground mt-1">à {c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-3">Secteurs desservis à {c.name}</h2>
          <p className="text-muted-foreground mb-4">Nous nous déplaçons dans tous les quartiers, sans frais supplémentaires de déplacement à l'intérieur de la ville.</p>
          <ul className="flex flex-wrap gap-2">
            {c.neighborhoods.map((n: string) => (
              <li key={n} className="rounded-full border border-border px-3 py-1.5 text-sm bg-background">
                <Check className="inline h-3.5 w-3.5 text-primary mr-1" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {c.longform && c.longform.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-4">Entretien ménager à {c.name} : ce qu'il faut savoir</h2>
          <div className="space-y-4 text-muted-foreground">
            {c.longform.map((p: string) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Pourquoi nous choisir à {c.name}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, t: "Assurée", d: "Responsabilité civile complète" },
            { icon: MapPin, t: "Locale", d: `Équipe basée à Nicolet, proche de ${c.name}` },
            { icon: Check, t: "Garantie", d: "On revient gratuitement si besoin" },
            { icon: Sparkles, t: "Sans engagement", d: "Vous arrêtez quand vous voulez" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border p-5 bg-card">
              <Icon className="h-6 w-6 text-primary mb-2" />
              <p className="font-bold">{t}</p>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {c.faq && c.faq.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes — {c.name}</h2>
          <div className="space-y-3">
            {c.faq.map((f) => (
              <details key={f.q} className="rounded-2xl border border-border bg-card p-5">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto rounded-3xl p-1" style={{ background: "var(--gradient-hero)" }}>
          <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Recevez votre soumission pour {c.name}</h2>
            <p className="text-muted-foreground mt-2">Réponse en moins de 24 h. Gratuit, sans engagement.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/soumission" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
                Demander ma soumission
              </Link>
              <a href="mailto:melanielavas4@gmail.com" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border-2 border-primary">
                <Mail className="h-4 w-4" /> melanielavas4@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-bold mb-4">Autres villes desservies en Mauricie & Centre-du-Québec</h2>
        <ul className="flex flex-wrap gap-2">
          {CITIES.filter((x) => x.slug !== c.slug).map((other) => (
            <li key={other.slug}>
              <Link
                to="/menage/$city"
                params={{ city: other.slug }}
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm hover:bg-accent transition"
              >
                Ménage {other.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-center py-8 text-sm text-muted-foreground px-4">
        <p className="font-semibold text-foreground">M.L Excellence</p>
        <p>905 rue Saint-Jean-Baptiste, Nicolet (QC) · <a href="tel:+18199969022" className="hover:underline">819-996-9022</a></p>
        <p className="mt-2">© {new Date().getFullYear()} — Au service de la Mauricie</p>
      </footer>
    </div>
  );
}
