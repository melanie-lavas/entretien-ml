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
      { title: "M.L Excellence — Ménage résidentiel & commercial en Mauricie" },
      {
        name: "description",
        content:
          "Services de propreté M.L Excellence en Mauricie : ménage résidentiel, contrats commerciaux, entretien de plates-bandes et lavage auto. Soumission gratuite en 30 secondes.",
      },
      { name: "keywords", content: "ménage Mauricie, entretien ménager Trois-Rivières, nettoyage commercial Mauricie, lavage auto, plates-bandes, M.L Excellence" },
      { property: "og:title", content: "M.L Excellence — Services de propreté en Mauricie" },
      {
        property: "og:description",
        content:
          "Ménage résidentiel et commercial, contrats récurrents, plates-bandes et lavage auto. Soumission gratuite et sans engagement.",
      },
      { property: "og:url", content: "https://entretien-ml.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://entretien-ml.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://entretien-ml.lovable.app/#business",
          name: "M.L Excellence",
          alternateName: "Les services de propreté M.L Excellence",
          description:
            "Services de propreté résidentiels et commerciaux en Mauricie : ménage ponctuel ou contrat, entretien extérieur, plates-bandes et lavage auto.",
          email: "Melanielavas@outlook.com",
          url: "https://entretien-ml.lovable.app/",
          image: "https://entretien-ml.lovable.app/og.png",
          areaServed: [
            { "@type": "AdministrativeArea", name: "Mauricie, Québec" },
            { "@type": "City", name: "Trois-Rivières" },
            { "@type": "City", name: "Shawinigan" },
            { "@type": "City", name: "Bécancour" },
          ],
          priceRange: "$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services M.L Excellence",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ménage résidentiel — ponctuel" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contrat d'entretien récurrent" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage commercial" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien extérieur / plates-bandes" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lavage auto intérieur & extérieur" } },
            ],
          },
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
      {/* Header */}
      <header
        className="sticky top-0 z-30 backdrop-blur border-b border-border/50"
        style={{ background: "color-mix(in oklab, var(--background) 85%, transparent)" }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-6xl mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="M.L Excellence — Services de propreté" className="h-12 sm:h-14 w-auto" width={180} height={120} />
          </Link>
          <nav className="flex items-center gap-1 sm:gap-3 text-sm font-medium">
            <Link to="/services" className="px-2 py-1 text-muted-foreground hover:text-foreground transition">
              Services & tarifs
            </Link>
            <a href="#faq" className="hidden sm:inline px-2 py-1 text-muted-foreground hover:text-foreground transition">
              FAQ
            </a>
            <a
              href="#soumission"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-primary-foreground text-sm"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Sparkles className="h-4 w-4" /> Soumission
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
                href="#soumission"
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
            Voir tous les services & tarifs 2027 →
          </Link>
        </div>
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
                  placeholder="Votre nom *"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  maxLength={120}
                  autoComplete="name"
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
                <input
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
                  placeholder="Courriel *"
                  value={form.courriel}
                  onChange={(e) => setForm({ ...form, courriel: e.target.value })}
                  maxLength={150}
                  autoComplete="email"
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
                <input
                  placeholder="Ville (Trois-Rivières, Shawinigan…)"
                  value={form.ville}
                  onChange={(e) => setForm({ ...form, ville: e.target.value })}
                  maxLength={80}
                  autoComplete="address-level2"
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
              </div>
              <textarea
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
        href="#soumission"
        className="sm:hidden fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-full py-3.5 font-bold text-primary-foreground shadow-2xl"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
      >
        <Phone className="h-4 w-4" /> Soumission gratuite
      </a>

      <footer className="text-center py-10 px-6 text-sm text-muted-foreground border-t border-border">
        <p className="font-bold text-foreground">M.L Excellence</p>
        <p className="mt-1">Les services de propreté · Mauricie, Québec</p>
        <p className="mt-2">
          <a href="mailto:Melanielavas@outlook.com" className="hover:text-foreground">
            Melanielavas@outlook.com
          </a>
        </p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} M.L Excellence — Tous droits réservés</p>
      </footer>
    </div>
  );
}
