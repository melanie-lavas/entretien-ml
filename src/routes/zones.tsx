import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { CITIES } from "@/lib/seo-locations";

const PHONE = "819-996-9022";
const PHONE_HREF = "tel:+18199969022";

export const Route = createFileRoute("/zones")({
  head: () => ({
    meta: [
      { title: "Zones desservies en Mauricie | M.L Excellence" },
      {
        name: "description",
        content:
          "Ménage résidentiel et commercial à Trois-Rivières, Shawinigan, Bécancour, Nicolet, Cap-de-la-Madeleine et Grand-Mère. Rappel rapide, réponse en moins de 24 h.",
      },
      { property: "og:title", content: "Zones desservies — Mauricie et Centre-du-Québec" },
      {
        property: "og:description",
        content:
          "M.L Excellence dessert toute la Mauricie et le Centre-du-Québec. Soumission gratuite, réponse en moins de 24 h.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mlentretien.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://mlentretien.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mlentretien.com/zones" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://mlentretien.com/" },
            { "@type": "ListItem", position: 2, name: "Zones desservies", item: "https://mlentretien.com/zones" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Zones desservies par M.L Excellence",
          itemListElement: CITIES.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Ménage à ${c.name}`,
            url: `https://mlentretien.com/menage/${c.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ZonesPage,
});

function ZonesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Bandeau réponse 24 h */}
      <div
        className="px-4 py-2 text-center text-xs sm:text-sm font-semibold text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Clock className="inline h-4 w-4 mr-1.5 -mt-0.5" />
        Réponse garantie en moins de 24 h ·{" "}
        <a href={PHONE_HREF} className="underline underline-offset-2">
          {PHONE}
        </a>
      </div>

      <header className="border-b border-border/50">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between gap-3">
          <Link to="/" className="font-bold tracking-tight">
            M.L Excellence
          </Link>
          <nav className="flex items-center gap-3 text-sm">
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition">
              Services
            </Link>
            <a
              href="/soumission"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-sm text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Sparkles className="h-4 w-4" /> Soumission
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Mauricie · Centre-du-Québec
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Zones desservies — entretien ménager partout en Mauricie
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Basés au 905 rue Saint-Jean-Baptiste à Nicolet, nous nous déplaçons dans un rayon de 60 km :
          Trois-Rivières, Shawinigan, Bécancour, Cap-de-la-Madeleine, Grand-Mère et les municipalités
          environnantes. Résidentiel, commercial, contrats récurrents, plates-bandes et lavage auto.
        </p>

        {/* Rappel rapide */}
        <section className="mt-8 rounded-2xl border border-border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div>
            <h2 className="text-lg font-bold">Besoin d'un rappel rapide ?</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Appelez-nous directement ou demandez une soumission — nous répondons en moins de 24 h,
              7 jours sur 7.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-semibold hover:bg-muted transition"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a
              href="/soumission"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-primary-foreground shadow-lg transition hover:scale-105"
              style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
            >
              Demander une soumission
            </a>
          </div>
        </section>

        {/* Villes */}
        <section className="mt-10 grid gap-5 sm:grid-cols-2">
          {CITIES.map((c) => (
            <article key={c.slug} className="rounded-2xl border border-border p-5">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <MapPin className="h-5 w-5 text-primary" /> {c.name}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">{c.region}</p>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-4">{c.intro}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Secteurs :</span>{" "}
                {c.neighborhoods.join(" · ")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  to="/menage/$city"
                  params={{ city: c.slug }}
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted transition"
                >
                  Ménage à {c.name}
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <Phone className="h-4 w-4" /> Rappel rapide
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-border p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <ShieldCheck className="h-5 w-5 text-primary" /> Votre municipalité n'est pas listée ?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Nous desservons aussi Saint-Célestin, Sainte-Monique, Baie-du-Febvre, Louiseville,
            Yamachiche, Pointe-du-Lac, Saint-Grégoire et plusieurs autres. Écrivez-nous : si c'est
            dans notre rayon, on s'y rend.
          </p>
          <a
            href="/soumission"
            className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-hero)" }}
          >
            Vérifier ma zone
          </a>
        </section>
      </main>

      <footer className="border-t border-border/50 mt-10">
        <div className="max-w-5xl mx-auto px-5 py-8 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">M.L Excellence</p>
          <p>905 rue Saint-Jean-Baptiste, Nicolet (Québec)</p>
          <p>
            <a href={PHONE_HREF} className="hover:text-foreground">
              {PHONE}
            </a>{" "}
            ·{" "}
            <a href="mailto:melanielavas4@gmail.com" className="hover:text-foreground">
              melanielavas4@gmail.com
            </a>{" "}
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
        </div>
      </footer>
    </div>
  );
}
