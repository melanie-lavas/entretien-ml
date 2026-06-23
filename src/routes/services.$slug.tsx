import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import logoAsset from "@/assets/ml-excellence-logo.png.asset.json";
import { SERVICES, getServiceBySlug } from "@/lib/seo-services";
import { CITIES } from "@/lib/seo-locations";
import { Sparkles, Check, Mail, Phone, ArrowLeft } from "lucide-react";

const BASE = "https://mlentretien.com";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = getServiceBySlug(params.slug);
    if (!svc) throw notFound();
    return svc;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const s = loaderData;
    const url = `${BASE}/services/${s.slug}`;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { name: "keywords", content: s.keywords },
        { name: "geo.region", content: "CA-QC" },
        { name: "geo.placename", content: "Mauricie, Centre-du-Québec" },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_CA" },
        { property: "og:image", content: `${BASE}/og-image.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: s.metaTitle },
        { name: "twitter:description", content: s.metaDescription },
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
              { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
              { "@type": "ListItem", position: 3, name: s.title, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            provider: { "@id": `${BASE}/#business` },
            serviceType: s.title,
            areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
            url,
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: s.title,
              itemListElement: s.includes.map((inc) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: inc },
              })),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-2xl font-bold">Service introuvable</h1>
        <Link to="/services" className="mt-4 inline-block text-primary underline">Voir tous nos services</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <Link to="/" className="text-primary underline">Retour à l'accueil</Link>
    </div>
  ),
});

function ServiceDetailPage() {
  const s = Route.useLoaderData();
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

      <section className="max-w-5xl mx-auto px-6 pt-8 pb-10">
        <nav aria-label="Fil d'Ariane" className="text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Accueil</Link> ›{" "}
          <Link to="/services" className="hover:text-foreground">Services</Link> ›{" "}
          <span className="text-foreground font-medium">{s.title}</span>
        </nav>
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> {s.title}
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">{s.h1}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{s.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/soumission" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-lg" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
            <Sparkles className="h-4 w-4" /> Soumission gratuite
          </Link>
          <a href="tel:+18199969022" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border-2 border-primary">
            <Phone className="h-4 w-4" /> 819-996-9022
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4">Ce qui est inclus</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {s.includes.map((i: string) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Pourquoi choisir M.L Excellence</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.benefits.map((b: { t: string; d: string }) => (
            <div key={b.t} className="rounded-2xl border border-border p-5 bg-card">
              <p className="font-bold">{b.t}</p>
              <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h2>
        <div className="space-y-3">
          {s.faq.map((f: { q: string; a: string }) => (
            <details key={f.q} className="rounded-2xl border border-border bg-card p-5">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Disponible dans toute la Mauricie & Centre-du-Québec</h2>
        <ul className="flex flex-wrap gap-2">
          {CITIES.map((c) => (
            <li key={c.slug}>
              <Link
                to="/menage/$city"
                params={{ city: c.slug }}
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm hover:bg-accent transition"
              >
                {s.title.split(" ")[0]} à {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto rounded-3xl p-1" style={{ background: "var(--gradient-hero)" }}>
          <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Demander une soumission pour {s.title.toLowerCase()}</h2>
            <p className="text-muted-foreground mt-2">Réponse en moins de 24 h. Gratuit, sans engagement.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/soumission" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
                Demander ma soumission
              </Link>
              <a href="mailto:Melanielavas@outlook.com" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border-2 border-primary">
                <Mail className="h-4 w-4" /> Melanielavas@outlook.com
              </a>
            </div>
            <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-bold mb-4">Nos autres services</h2>
        <ul className="flex flex-wrap gap-2">
          {SERVICES.filter((o) => o.slug !== s.slug).map((o) => (
            <li key={o.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm hover:bg-accent transition"
              >
                {o.title}
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
