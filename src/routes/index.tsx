import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-ml.png";
import hero from "@/assets/hero-cleaning.jpg";
import { Sparkles, Home, Leaf, Car, Mail, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entretien M.L — Demandez votre soumission gratuite" },
      { name: "description", content: "Entretien ménager intérieur, contrats, entretien extérieur, plates-bandes et lavage auto. Soumission rapide et gratuite." },
      { property: "og:title", content: "Entretien M.L — Services de nettoyage" },
      { property: "og:description", content: "Ménage intérieur (une fois ou contrat), plates-bandes et lavage auto. Soumission gratuite en 30 secondes." },
      { property: "og:url", content: "https://entretien-ml.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://entretien-ml.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Entretien M.L",
          description: "Services d'entretien ménager intérieur (ponctuel ou contrat), entretien extérieur, plates-bandes et lavage auto.",
          email: "Melanielavas@outlook.com",
          url: "https://entretien-ml.lovable.app/",
          areaServed: "Mauricie, Québec",
          priceRange: "$$",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services d'entretien",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien ménager intérieur — une fois" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien ménager intérieur — contrat" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien extérieur / plates-bandes" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lavage auto" } },
            ],
          },
        }),
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { id: "interieur-unique", label: "Entretien ménager intérieur — une fois", icon: Home },
  { id: "interieur-contrat", label: "Entretien ménager intérieur — contrat", icon: Sparkles },
  { id: "plates-bandes", label: "Entretien extérieur / plates-bandes", icon: Leaf },
  { id: "auto", label: "Lavage auto", icon: Car },
  { id: "autre", label: "Autre / sur mesure", icon: Check },
];

function Index() {
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ nom: "", tel: "", courriel: "", message: "" });

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const services = selected
      .map((id) => SERVICES.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    const subject = encodeURIComponent("Demande de soumission — Entretien M.L");
    const body = encodeURIComponent(
      `Nom: ${form.nom}\nTéléphone: ${form.tel}\nCourriel: ${form.courriel}\n\nServices demandés:\n${services || "(aucun sélectionné)"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:Melanielavas@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <img src={logo} alt="Entretien M.L" className="h-14 w-auto" width={120} height={120} />
        <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
          <Link to="/" className="text-foreground font-semibold">
            Accueil
          </Link>
          <Link to="/services" className="text-muted-foreground hover:text-foreground transition">
            Services & tarifs
          </Link>
          <a
            href="#soumission"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-primary-foreground"
            style={{ background: "var(--gradient-hero)" }}
          >
            <Sparkles className="h-4 w-4" /> Soumission
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Propre, frais,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                impeccable.
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Intérieur, extérieur, plates-bandes, lavage auto. Demandez votre soumission gratuite en 30 secondes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#soumission"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-lg transition hover:scale-105"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
              >
                Demander une soumission
              </a>
              <a
                href="mailto:Melanielavas@outlook.com"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border-2 border-primary text-foreground"
              >
                <Mail className="h-4 w-4" /> Nous écrire
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "var(--gradient-hero)" }}
            />
            <img
              src={hero}
              alt="Maison propre et brillante"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Nos services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Home, t: "Ménager intérieur", d: "Une fois ou récurrent" },
            { icon: Sparkles, t: "Contrats d'entretien", d: "Hebdo, bi-mensuel, mensuel" },
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
      </section>

      {/* Form */}
      <section id="soumission" className="px-6 py-16">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-1"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="bg-card rounded-[calc(1.5rem-4px)] p-8 sm:p-10">
            <h2 className="text-3xl font-bold">Demandez votre soumission</h2>
            <p className="text-muted-foreground mt-2">Gratuit, sans engagement. Réponse rapide.</p>

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
                  placeholder="Votre nom"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
                <input
                  placeholder="Téléphone"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Courriel"
                value={form.courriel}
                onChange={(e) => setForm({ ...form, courriel: e.target.value })}
                className="w-full rounded-xl border-2 border-border px-4 py-3 bg-background focus:border-primary outline-none"
              />
              <textarea
                placeholder="Détails (adresse, fréquence, surface, etc.)"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
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
                Votre demande sera envoyée à Melanielavas@outlook.com
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Entretien M.L — Tous droits réservés
      </footer>
    </div>
  );
}
