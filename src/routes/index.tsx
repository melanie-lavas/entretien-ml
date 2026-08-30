import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/ml-excellence-logo.png.asset.json";
import hero from "@/assets/hero-cleaning.jpg";
import {
  Sparkles,
  Home,
  Leaf,
  Car,
  Mail,
  Check,
  ShieldCheck,
  Clock,
  Award,
  Star,
  Phone,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entretien ménager commercial & résidentiel Mauricie | M.L" },
      {
        name: "description",
        content:
          "Contrats d'entretien commercial 1 à 5 fois/semaine en Mauricie : bureaux, commerces, cliniques, garderies, immeubles. Ménage résidentiel et homme à tout faire. Soumission gratuite en 24 h.",
      },
      { name: "keywords", content: "entretien ménager commercial Mauricie, contrat entretien bureau Trois-Rivières, nettoyage commerce Shawinigan, ménage résidentiel Bécancour, homme à tout faire Mauricie, rénovation mineure, conciergerie immeuble" },
      { name: "geo.region", content: "CA-QC" },
      { name: "geo.placename", content: "Mauricie, Trois-Rivières, Shawinigan, Bécancour" },
      { property: "og:title", content: "M.L Entretien — Contrats d'entretien commercial en Mauricie" },
      {
        property: "og:description",
        content:
          "1 à 5 passages par semaine pour bureaux, commerces, cliniques et immeubles. Ménage résidentiel et homme à tout faire. Soumission gratuite, réponse en 24 h.",
      },
      { property: "og:url", content: "https://mlentretien.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mlentretien.com/og-image.jpg" },
      { property: "og:locale", content: "fr_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "M.L Entretien — Entretien commercial & résidentiel Mauricie" },
      { name: "twitter:description", content: "Contrats 1 à 5 fois/semaine pour entreprises. Soumission gratuite en 24 h." },
      { name: "twitter:image", content: "https://mlentretien.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mlentretien.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
          "@id": "https://mlentretien.com/#business",
          name: "M.L Excellence",
          alternateName: "Les services de propreté M.L Excellence",
          description:
            "Services de propreté résidentiels et commerciaux en Mauricie : ménage ponctuel ou contrat, entretien extérieur, plates-bandes et lavage auto.",
          email: "Melanielavas@outlook.com",
          telephone: "+1-819-996-9022",
          url: "https://mlentretien.com/",
          image: "https://mlentretien.com/og-image.jpg",
          logo: "https://mlentretien.com/og-image.jpg",
          slogan: "La propreté, notre excellence.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "905 rue Saint-Jean-Baptiste",
            addressLocality: "Nicolet",
            addressRegion: "QC",
            postalCode: "J3T 1S4",
            addressCountry: "CA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 46.2225,
            longitude: -72.6175,
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Mauricie, Québec" },
            { "@type": "AdministrativeArea", name: "Centre-du-Québec" },
            { "@type": "City", name: "Nicolet" },
            { "@type": "City", name: "Bécancour" },
            { "@type": "City", name: "Trois-Rivières" },
            { "@type": "City", name: "Cap-de-la-Madeleine" },
            { "@type": "City", name: "Shawinigan" },
            { "@type": "City", name: "Grand-Mère" },
          ],
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: { "@type": "GeoCoordinates", latitude: 46.2225, longitude: -72.6175 },
            geoRadius: 60000,
          },
          priceRange: "$$",
          currenciesAccepted: "CAD",
          paymentAccepted: "Cash, Cheque, Interac e-Transfer",
          knowsLanguage: ["fr-CA", "en"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          contactPoint: [{
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+1-819-996-9022",
            email: "Melanielavas@outlook.com",
            areaServed: "CA-QC",
            availableLanguage: ["French", "English"],
          }],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services M.L Excellence",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ménage résidentiel — ponctuel", areaServed: "Mauricie" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contrat d'entretien récurrent", areaServed: "Mauricie" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage commercial", areaServed: "Mauricie" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien extérieur / plates-bandes", areaServed: "Mauricie" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lavage auto intérieur & extérieur", areaServed: "Mauricie" } },
            ],
          },
          sameAs: [
            "https://www.google.com/maps?cid=1541346873343242194",
            // TODO: ajouter ici vos pages Facebook/Instagram
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "24",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Quelles régions desservez-vous ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "M.L Excellence dessert toute la Mauricie : Trois-Rivières, Shawinigan, Bécancour, Cap-de-la-Madeleine, Grand-Mère et les municipalités environnantes.",
              },
            },
            {
              "@type": "Question",
              name: "La soumission est-elle vraiment gratuite ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui. Toutes nos soumissions sont gratuites et sans engagement. Vous recevez un prix clair adapté à vos besoins.",
              },
            },
            {
              "@type": "Question",
              name: "Êtes-vous assurés ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, M.L Excellence est entièrement assurée pour la responsabilité civile, ce qui protège votre propriété pendant chaque visite.",
              },
            },
            {
              "@type": "Question",
              name: "Fournissez-vous les produits et l'équipement ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui. Nous apportons tout le matériel et utilisons des produits écoresponsables sur demande, sans frais supplémentaires.",
              },
            },
            {
              "@type": "Question",
              name: "Comment puis-je payer ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nous acceptons les virements Interac, les chèques et l'argent comptant. Les contrats commerciaux peuvent être facturés mensuellement.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { id: "interieur-unique", label: "Ménage résidentiel — une fois", icon: Home },
  { id: "interieur-contrat", label: "Contrat d'entretien récurrent", icon: Sparkles },
  { id: "commercial", label: "Nettoyage commercial", icon: ShieldCheck },
  { id: "plates-bandes", label: "Entretien extérieur / plates-bandes", icon: Leaf },
  { id: "auto", label: "Lavage auto", icon: Car },
  { id: "autre", label: "Autre / sur mesure", icon: Check },
];

const TRUST = [
  { icon: ShieldCheck, t: "Assurée & vérifiée", d: "Responsabilité civile complète" },
  { icon: Clock, t: "Réponse < 24 h", d: "Soumission rapide et claire" },
  { icon: Award, t: "Satisfaction garantie", d: "On revient gratuitement si besoin" },
  { icon: MapPin, t: "Partout en Mauricie", d: "Trois-Rivières, Shawinigan, Bécancour…" },
];

const TESTIMONIALS = [
  {
    name: "Caroline D.",
    city: "Trois-Rivières",
    quote: "Service impeccable, à l'écoute et toujours ponctuelle. Ma maison n'a jamais été aussi propre.",
  },
  {
    name: "Marc-André L.",
    city: "Shawinigan",
    quote: "On a un contrat mensuel pour notre bureau, l'équipe est fiable et le résultat est constant.",
  },
  {
    name: "Sophie R.",
    city: "Bécancour",
    quote: "Lavage auto et plates-bandes la même journée — quel gain de temps. Je recommande à 100 %.",
  },
];

const FAQ = [
  { q: "Quelles régions desservez-vous ?", a: "Toute la Mauricie : Trois-Rivières, Shawinigan, Bécancour, Cap-de-la-Madeleine, Grand-Mère et environs." },
  { q: "La soumission est-elle vraiment gratuite ?", a: "Oui — toujours gratuite et sans engagement. Vous recevez un prix clair en moins de 24 h." },
  { q: "Êtes-vous assurés ?", a: "Oui, M.L Excellence est entièrement assurée en responsabilité civile." },
  { q: "Produits et équipement fournis ?", a: "Oui, nous apportons tout. Produits écoresponsables disponibles sur demande, sans frais." },
  { q: "Modes de paiement ?", a: "Virement Interac, chèque ou comptant. Facturation mensuelle pour les contrats commerciaux." },
];

function Index() {
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ nom: "", tel: "", courriel: "", ville: "", message: "" });

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const services = selected
      .map((id) => SERVICES.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    const subject = encodeURIComponent("Demande de soumission — M.L Excellence");
    const body = encodeURIComponent(
      `Nom: ${form.nom}\nTéléphone: ${form.tel}\nCourriel: ${form.courriel}\nVille: ${form.ville}\n\nServices demandés:\n${services || "(aucun sélectionné)"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:Melanielavas@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Bandeau réponse 24 h */}
      <div
        className="px-4 py-2 text-center text-[11px] sm:text-sm font-semibold text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        Réponse garantie en moins de 24 h ·{" "}
        <a href="tel:+18199969022" className="underline underline-offset-2">
          819-996-9022
        </a>
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-30 backdrop-blur border-b border-border/50"
        style={{ background: "color-mix(in oklab, var(--background) 85%, transparent)" }}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 max-w-6xl mx-auto">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <img src={logoAsset.url} alt="M.L Excellence — Services de propreté" className="h-9 sm:h-14 w-auto shrink-0" width={180} height={120} />
          </Link>
          <nav className="flex items-center gap-1 sm:gap-3 text-sm font-medium shrink-0">
            <Link to="/services" className="px-2 py-1 text-muted-foreground hover:text-foreground transition">
              Services
            </Link>
            <Link to="/zones" className="hidden sm:inline px-2 py-1 text-muted-foreground hover:text-foreground transition">
              Zones
            </Link>
            <a href="#faq" className="hidden sm:inline px-2 py-1 text-muted-foreground hover:text-foreground transition">
              FAQ
            </a>
            <a
              href="/soumission"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-primary-foreground text-xs sm:text-sm"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="hidden xs:inline">Soumission</span>
              <span className="xs:hidden">Devis</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
              <Star className="h-3.5 w-3.5 text-primary fill-primary" /> 5,0/5 · Clients de la Mauricie
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              L'excellence{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                au service de votre propreté.
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Ménage résidentiel et commercial, contrats récurrents, plates-bandes et lavage auto.
              Partout en Mauricie. Soumission gratuite en 30 secondes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/soumission"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-lg transition hover:scale-105"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
              >
                Soumission gratuite
              </a>
              <a
                href="mailto:Melanielavas@outlook.com"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border-2 border-primary text-foreground"
              >
                <Mail className="h-4 w-4" /> Nous écrire
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST.map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex items-start gap-2">
                  <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold">{t}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "var(--gradient-hero)" }}
            />
            <img
              src={hero}
              alt="Intérieur de maison propre et brillant — M.L Excellence"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Nos services</h2>
        <p className="text-center text-muted-foreground mb-10">
          Une seule équipe pour l'intérieur, l'extérieur et même votre véhicule.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Home, t: "Ménage résidentiel", d: "Une fois ou récurrent" },
            { icon: ShieldCheck, t: "Nettoyage commercial", d: "Bureaux, locaux, commerces" },
            { icon: Leaf, t: "Plates-bandes", d: "Désherbage et entretien" },
            { icon: Car, t: "Lavage auto", d: "Intérieur et extérieur" },
          ].map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-2xl bg-card p-6 border border-border hover:-translate-y-1 transition shadow-sm"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Voir tous nos services en détail →
          </Link>
        </div>
      </section>

      {/* Villes desservies (SEO local) */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Villes desservies en Mauricie</h2>
        <p className="text-center text-muted-foreground mb-8">Cliquez sur votre ville pour voir nos services dans votre secteur.</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {[
            { slug: "trois-rivieres", name: "Trois-Rivières" },
            { slug: "shawinigan", name: "Shawinigan" },
            { slug: "becancour", name: "Bécancour" },
            { slug: "nicolet", name: "Nicolet" },
            { slug: "cap-de-la-madeleine", name: "Cap-de-la-Madeleine" },
            { slug: "grand-mere", name: "Grand-Mère" },
          ].map((c) => (
            <li key={c.slug}>
              <Link
                to="/menage/$city"
                params={{ city: c.slug }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" /> Ménage {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12" style={{ background: "color-mix(in oklab, var(--primary) 4%, transparent)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card p-6 border border-border shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-xs font-semibold text-muted-foreground">
                  — {t.name}, {t.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="soumission" className="px-6 py-16">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-1"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 sm:p-10">
            <h2 className="text-3xl font-bold">Demandez votre soumission</h2>
            <p className="text-muted-foreground mt-2">
              Gratuit, sans engagement. Réponse en moins de 24 h.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">Quel(s) service(s) ?</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {SERVICES.map((s) => {
                    const active = selected.includes(s.id);
                    const Icon = s.icon;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggle(s.id)}
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
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  aria-label="Votre nom"
                  placeholder="Votre nom *"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  maxLength={120}
                  autoComplete="name"
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
                <input
                  aria-label="Téléphone"
                  placeholder="Téléphone"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  type="tel"
                  maxLength={30}
                  autoComplete="tel"
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="email"
                  aria-label="Courriel"
                  placeholder="Courriel *"
                  value={form.courriel}
                  onChange={(e) => setForm({ ...form, courriel: e.target.value })}
                  maxLength={150}
                  autoComplete="email"
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
                <input
                  aria-label="Ville"
                  placeholder="Ville (Trois-Rivières, Shawinigan…)"
                  value={form.ville}
                  onChange={(e) => setForm({ ...form, ville: e.target.value })}
                  maxLength={80}
                  autoComplete="address-level2"
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
              </div>
              <textarea
                aria-label="Détails de votre demande"
                placeholder="Détails (adresse, fréquence, superficie, etc.)"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={2000}
                className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-full py-4 font-bold text-primary-foreground text-lg transition hover:scale-[1.02]"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
              >
                Envoyer ma demande
              </button>
              <p className="text-xs text-center text-muted-foreground">
                Votre demande sera envoyée directement à Mélanie ·{" "}
                <span className="whitespace-nowrap">Melanielavas@outlook.com</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes</h2>
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

      {/* Sticky mobile CTA */}
      <a
        href="/soumission"
        className="sm:hidden fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-full py-3.5 font-bold text-primary-foreground shadow-2xl"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
      >
        <Phone className="h-4 w-4" /> Soumission gratuite
      </a>

      <footer className="text-center py-10 px-6 text-sm text-muted-foreground border-t border-border">
        <p className="font-bold text-foreground">M.L Excellence</p>
        <p className="mt-1">Les services de propreté · Mauricie & Centre-du-Québec</p>
        <address className="not-italic mt-3 space-y-1">
          <p>905, rue Saint-Jean-Baptiste, Nicolet (QC)</p>
          <p>
            <a href="tel:+18199969022" className="hover:text-foreground font-medium">
              819-996-9022
            </a>
            {" · "}
            <a href="mailto:Melanielavas@outlook.com" className="hover:text-foreground">
              Melanielavas@outlook.com
            </a>
          </p>
        </address>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} M.L Excellence — Tous droits réservés</p>
      </footer>
    </div>
  );
}
