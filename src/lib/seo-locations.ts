// Données SEO locales — une entrée = un secteur desservi (Bécancour et Nicolet).
// Utilisé par la route dynamique src/routes/menage.$city.tsx et par sitemap.xml.

export type CityData = {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  intro: string;
  neighborhoods: string[];
  /** Contenu long optionnel (paragraphes) pour renforcer le SEO local. */
  longform?: string[];
  /** FAQ locale optionnelle — génère un schéma FAQPage sur la page ville. */
  faq?: { q: string; a: string }[];
};

export const CITIES: CityData[] = [  {
    slug: "becancour",
    name: "Bécancour",
    region: "Centre-du-Québec",
    lat: 46.3406,
    lng: -72.4341,
    intro:
      "Vous cherchez une entreprise d'entretien ménager à Bécancour ? M.L Excellence est basée à Nicolet, à quelques minutes de vos secteurs : nous sommes chez vous rapidement, sans frais de déplacement. Ménage résidentiel, ménage après chantier et entretien régulier — équipe assurée, produits fournis, soumission gratuite en moins de 24 h.",
    neighborhoods: [
      "Gentilly",
      "Sainte-Angèle-de-Laval",
      "Saint-Grégoire",
      "Précieux-Sang",
      "Sainte-Gertrude",
      "Bécancour (secteur)",
      "Parc industriel et portuaire",
      "Wôlinak",
    ],
    longform: [
      "Bécancour est notre voisine directe : notre point de service à Nicolet est à moins de 15 minutes de Saint-Grégoire, Gentilly et Sainte-Angèle-de-Laval. C'est ce qui nous permet d'offrir des contrats d'entretien fiables, même 5 jours par semaine, sans surcharge de déplacement.",
      "Côté après chantier, nous nettoyons les constructions neuves et les rénovations — résidentielles comme commerciales, y compris dans le parc industriel et portuaire de Bécancour — jusqu'à la finition, prêtes à livrer. Nous développons présentement ce service à Bécancour pour l'horaire automne-hiver 2026-2027 : entrepreneurs, réservez votre place.",
      "Côté résidentiel, nous faisons le grand ménage initial, l'entretien récurrent (hebdomadaire, aux 2 semaines ou mensuel), les fins de bail et les ménages avant la vente d'une propriété.",
    ],
    faq: [
      {
        q: "Desservez-vous tous les secteurs de Bécancour ?",
        a: "Oui : Gentilly, Sainte-Angèle-de-Laval, Saint-Grégoire, Précieux-Sang, Sainte-Gertrude, le secteur Bécancour ainsi que le parc industriel et portuaire. Aucun frais de déplacement à l'intérieur de la ville.",
      },
      {
        q: "Quel est le prix d'un ménage à Bécancour ?",
        a: "Le prix est établi selon le service, la superficie et la fréquence. Vous recevez une soumission gratuite et ferme en moins de 24 h, sans engagement.",
      },
      {
        q: "Faites-vous le ménage après chantier à Bécancour ?",
        a: "Oui, c'est le service que nous développons en priorité : nettoyage complet après construction ou rénovation, jusqu'à la finition, pour les entrepreneurs et les propriétaires de tous les secteurs de Bécancour.",
      },
      {
        q: "En combien de temps pouvez-vous commencer ?",
        a: "Bécancour étant voisine de notre point de service à Nicolet, nous pouvons généralement débuter dans la même semaine selon les disponibilités.",
      },
    ],
  },
  {
    slug: "gentilly",
    name: "Gentilly",
    region: "Centre-du-Québec",
    lat: 46.3967,
    lng: -72.2683,
    intro:
      "M.L Excellence offre le ménage résidentiel à Gentilly, secteur de Bécancour. Grand ménage saisonnier, entretien régulier de la maison, ménage de fin de bail ou avant une vente : une équipe locale, assurée, qui se déplace chez vous avec tout le matériel nécessaire. Soumission gratuite et réponse en moins de 24 h.",
    neighborhoods: ["Centre du village", "Secteur résidentiel", "Secteur rural", "Bord du fleuve"],
    longform: [
      "Gentilly est un secteur que nous développons activement côté résidentiel : nous y ouvrons présentement des places en entretien régulier. En vous joignant tôt à notre route de Gentilly, vous réservez votre plage horaire récurrente — hebdomadaire, aux 2 semaines ou mensuelle — avec la même équipe à chaque visite.",
      "Nos services à Gentilly incluent le grand ménage en profondeur, l'entretien ménager récurrent, les fins de bail et les ménages avant la vente d'une propriété. Nous offrons aussi le ménage après chantier pour les constructions neuves et les rénovations du secteur.",
    ],
    faq: [
      {
        q: "Desservez-vous tout le secteur de Gentilly ?",
        a: "Oui : le village, les secteurs résidentiels et ruraux ainsi que le bord du fleuve, sans frais de déplacement à l'intérieur du secteur.",
      },
      {
        q: "Quel est le prix d'un ménage résidentiel à Gentilly ?",
        a: "Le prix est établi selon la superficie, les services demandés et la fréquence. La soumission est gratuite, ferme et sans engagement, en moins de 24 h.",
      },
      {
        q: "Puis-je réserver une place en entretien régulier à Gentilly ?",
        a: "Oui, nous ouvrons présentement des places en entretien récurrent à Gentilly. Contactez-nous pour réserver votre plage horaire hebdomadaire, aux 2 semaines ou mensuelle.",
      },
      {
        q: "En combien de temps pouvez-vous commencer ?",
        a: "Selon les disponibilités de la route de Gentilly, nous pouvons généralement débuter dans la même semaine ou la semaine suivante.",
      },
    ],
  },
  {
    slug: "saint-gregoire",
    name: "Saint-Grégoire",
    region: "Centre-du-Québec",
    lat: 46.2689,
    lng: -72.5103,
    intro:
      "Vous cherchez un service de ménage résidentiel à Saint-Grégoire, secteur de Bécancour ? M.L Excellence est basée tout près, à Nicolet : nous sommes chez vous en quelques minutes, sans frais de déplacement. Grand ménage, entretien régulier de votre maison, ménage avant une vente ou après un déménagement — équipe assurée, produits fournis, soumission gratuite en moins de 24 h.",
    neighborhoods: ["Centre du village", "Secteur résidentiel", "Secteur rural"],
    longform: [
      "Saint-Grégoire est l'un de nos secteurs résidentiels prioritaires : nous y avons déjà des clientes et des clients satisfaits, et nous y développons activement notre route d'entretien régulier. Que vous soyez au cœur du village ou en secteur rural, vous profitez de la même équipe à chaque visite — vous n'avez jamais à réexpliquer vos préférences.",
      "Côté résidentiel, nous offrons le grand ménage initial, l'entretien récurrent (hebdomadaire, aux 2 semaines ou mensuel), les fins de bail et les ménages avant la vente d'une propriété. Nous offrons aussi le ménage après chantier pour les constructions neuves et les rénovations du secteur.",
    ],
    faq: [
      {
        q: "Desservez-vous tout le secteur de Saint-Grégoire ?",
        a: "Oui : le village, le secteur résidentiel et le secteur rural de Saint-Grégoire, sans frais de déplacement.",
      },
      {
        q: "Quel est le prix d'un ménage résidentiel à Saint-Grégoire ?",
        a: "Le prix dépend de la superficie de la maison, des services demandés et de la fréquence. Vous recevez une soumission gratuite et ferme en moins de 24 h, sans engagement.",
      },
      {
        q: "Offrez-vous l'entretien régulier aux 2 semaines ?",
        a: "Oui. Nos forfaits les plus populaires à Saint-Grégoire sont l'entretien hebdomadaire, aux 2 semaines et mensuel, toujours avec la même équipe.",
      },
      {
        q: "En combien de temps pouvez-vous commencer ?",
        a: "Saint-Grégoire est tout près de notre point de service à Nicolet : nous pouvons généralement débuter dans la même semaine selon les disponibilités.",
      },
    ],
  },
  {
    slug: "nicolet",
    name: "Nicolet",
    region: "Centre-du-Québec",
    lat: 46.2225,
    lng: -72.6175,
    intro:
      "Basée à Nicolet, M.L Excellence est votre entreprise de ménage de proximité. Service rapide, équipe locale et tarifs justes pour le résidentiel comme pour l'après chantier. Nous connaissons votre coin — vous nous voyez sur la route presque tous les jours.",
    neighborhoods: ["Centre-ville Nicolet", "Nicolet-Sud", "Port-Saint-François"],
  }
];

export const getCityBySlug = (slug: string) => CITIES.find((c) => c.slug === slug);
