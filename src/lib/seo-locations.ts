// Données SEO locales — une entrée = une ville desservie en Mauricie / Centre-du-Québec.
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

export const CITIES: CityData[] = [
  {
    slug: "trois-rivieres",
    name: "Trois-Rivières",
    region: "Mauricie",
    lat: 46.3432,
    lng: -72.5432,
    intro:
      "M.L Excellence offre un service de ménage résidentiel et commercial à Trois-Rivières et dans tous ses quartiers. Que ce soit pour un grand ménage saisonnier, un contrat d'entretien hebdomadaire dans votre maison ou un nettoyage commercial régulier pour votre bureau, nous nous déplaçons partout en ville avec tout le matériel nécessaire.",
    neighborhoods: ["Centre-ville", "Cap-de-la-Madeleine", "Pointe-du-Lac", "Sainte-Marthe-du-Cap", "Trois-Rivières-Ouest"],
  },
  {
    slug: "shawinigan",
    name: "Shawinigan",
    region: "Mauricie",
    lat: 46.5667,
    lng: -72.75,
    intro:
      "Service complet de ménage résidentiel et de nettoyage commercial à Shawinigan. Nos contrats d'entretien récurrents sont parfaits pour les commerces, bureaux professionnels et résidences du secteur. Réponse en moins de 24 h, soumission gratuite et sans engagement.",
    neighborhoods: ["Shawinigan-Sud", "Grand-Mère", "Saint-Georges-de-Champlain", "Lac-à-la-Tortue"],
  },
  {
    slug: "becancour",
    name: "Bécancour",
    region: "Centre-du-Québec",
    lat: 46.3406,
    lng: -72.4341,
    intro:
      "Vous cherchez une entreprise d'entretien ménager à Bécancour ? M.L Excellence est basée à Nicolet, à quelques minutes de vos secteurs : nous sommes chez vous rapidement, sans frais de déplacement. Ménage résidentiel, contrats commerciaux et industriels, entretien des plates-bandes et lavage auto — équipe assurée, produits fournis, soumission gratuite en moins de 24 h.",
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
      "Bécancour est notre voisine directe : notre point de service du 905 rue Saint-Jean-Baptiste à Nicolet est à moins de 15 minutes de Saint-Grégoire, Gentilly et Sainte-Angèle-de-Laval. C'est ce qui nous permet d'offrir des contrats d'entretien fiables, même 5 jours par semaine, sans surcharge de déplacement.",
      "Côté commercial, nous entretenons bureaux, commerces de détail, cliniques, garderies, salons, immeubles locatifs et espaces communs, incluant les entreprises du parc industriel et portuaire de Bécancour. Passages de 1 à 5 fois par semaine, le soir, la nuit ou la fin de semaine selon vos opérations. Nous cherchons actuellement de nouvelles entreprises pour l'horaire automne-hiver 2026-2027.",
      "Côté résidentiel, nous faisons le grand ménage initial, l'entretien récurrent (hebdomadaire, aux 2 semaines ou mensuel), les fins de bail et les ménages avant la vente d'une propriété. Un homme à tout faire est aussi disponible sur demande pour les réparations et rénovations mineures.",
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
        q: "Faites-vous l'entretien de bureaux et de commerces à Bécancour ?",
        a: "Oui. Nous offrons des contrats commerciaux de 1 à 5 passages par semaine pour bureaux, commerces, cliniques, garderies, immeubles locatifs et entreprises du parc industriel.",
      },
      {
        q: "En combien de temps pouvez-vous commencer ?",
        a: "Bécancour étant voisine de notre point de service à Nicolet, nous pouvons généralement débuter dans la même semaine selon les disponibilités.",
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
      "Basée au 905 rue Saint-Jean-Baptiste à Nicolet, M.L Excellence est votre entreprise de ménage de proximité. Service rapide, équipe locale et tarifs justes pour le résidentiel comme pour le commercial. Nous connaissons votre coin — vous nous voyez sur la route presque tous les jours.",
    neighborhoods: ["Centre-ville Nicolet", "Nicolet-Sud", "Port-Saint-François"],
  },
  {
    slug: "cap-de-la-madeleine",
    name: "Cap-de-la-Madeleine",
    region: "Mauricie",
    lat: 46.3667,
    lng: -72.5167,
    intro:
      "Ménage résidentiel et nettoyage de bureaux à Cap-de-la-Madeleine. Nous offrons des forfaits hebdomadaires, aux deux semaines et mensuels avec la même équipe à chaque visite — vous n'avez rien à réexpliquer.",
    neighborhoods: ["Sanctuaire", "Sainte-Marthe", "Cap-Ouest"],
  },
  {
    slug: "grand-mere",
    name: "Grand-Mère",
    region: "Mauricie",
    lat: 46.6105,
    lng: -72.6856,
    intro:
      "Service de ménage à Grand-Mère pour particuliers, petits commerces et bureaux. Plates-bandes en saison estivale et lavage auto sur rendez-vous. Soumission gratuite par téléphone ou courriel en moins de 24 h.",
    neighborhoods: ["Centre Grand-Mère", "Lac-à-la-Tortue", "Saint-Théophile"],
  },
];

export const getCityBySlug = (slug: string) => CITIES.find((c) => c.slug === slug);
