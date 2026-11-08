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
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  travelNote?: string;
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
      "Notre point de service est à Nicolet, à moins de 15 minutes de Saint-Grégoire et à environ 25 minutes de Gentilly. Nous desservons les secteurs de Bécancour sans frais de déplacement.",
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
    metaTitle: "Ménage après construction à Gentilly | M.L Excellence",
    metaDescription: "Nettoyage après construction et rénovation à Gentilly : poussière, armoires, vitres intérieures et planchers. Soumission gratuite avec M.L Excellence.",
    h1: "Ménage après construction et rénovation à Gentilly",
    region: "Centre-du-Québec",
    lat: 46.3967,
    lng: -72.2683,
    intro:
      "Votre maison neuve ou votre rénovation à Gentilly est presque terminée ? M.L Excellence offre le ménage après construction avant l’emménagement ou la remise des clés : poussière de chantier, armoires, cuisine, salles de bain, vitres intérieures et planchers. Basée à Nicolet, à environ 25 minutes, notre équipe dessert Gentilly sans frais de déplacement. Le ménage résidentiel régulier et le grand ménage restent également disponibles.",
    neighborhoods: ["Centre du village", "Secteur résidentiel", "Secteur rural", "Bord du fleuve"],
    longform: [
      "Pour votre nettoyage de fin de chantier à Gentilly, précisez les pièces rénovées, la superficie à nettoyer et l’état des travaux. Un nettoyage après construction demande une attention particulière à la poussière fine sur les surfaces, les plinthes et les rangements : les tâches sont définies dans votre soumission, selon votre projet.",
      "Pour coordonner la visite avant la livraison ou l’emménagement, indiquez la date prévue de fin des travaux, votre échéance et les disponibilités d’accès. Nous confirmons les possibilités d’intervention avec vous; le prix est établi selon le service, la superficie et l’état des lieux.",
      "Gentilly est un secteur que nous développons activement côté résidentiel : nous y ouvrons présentement des places en entretien régulier. En vous joignant tôt à notre route de Gentilly, vous réservez votre plage horaire récurrente — hebdomadaire, aux 2 semaines ou mensuelle — avec la même équipe à chaque visite.",
      "Nos services à Gentilly incluent le grand ménage en profondeur, l'entretien ménager récurrent, les fins de bail et les ménages avant la vente d'une propriété. Nous offrons aussi le ménage après chantier pour les constructions neuves et les rénovations du secteur.",
    ],
    faq: [
      {
        q: "Faites-vous le ménage après construction à Gentilly ?",
        a: "Oui, pour une maison neuve, une rénovation ou un agrandissement. Les tâches comprennent notamment le dépoussiérage, les armoires, la cuisine, les salles de bain, les vitres intérieures et les planchers, selon la soumission.",
      },
      {
        q: "Que préciser pour une soumission après chantier à Gentilly ?",
        a: "Indiquez Gentilly, la superficie, les pièces concernées, l’état du chantier, la date de fin des travaux et les disponibilités d’accès. La soumission est gratuite et la réponse arrive en moins de 24 h.",
      },
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
    slug: "saint-leonard-daston",
    name: "Saint-Léonard-d’Aston",
    region: "Centre-du-Québec",
    lat: 46.108,
    lng: -72.373,
    metaTitle: "Ménage après construction Saint-Léonard-d’Aston | M.L Excellence",
    metaDescription: "Ménage après construction et rénovation à Saint-Léonard-d’Aston : surfaces, armoires, vitres intérieures et planchers. Demandez votre soumission gratuite.",
    h1: "Ménage après construction à Saint-Léonard-d’Aston",
    travelNote: "Pour Saint-Léonard-d’Aston et les environs, indiquez votre secteur dans votre demande. Les modalités de déplacement et la disponibilité sont confirmées lors de la soumission.",
    intro: "Une construction neuve à livrer ou des rénovations terminées à Saint-Léonard-d’Aston ? M.L Excellence propose le nettoyage après chantier pour les propriétaires et les entrepreneurs : dépoussiérage des surfaces, nettoyage des armoires, cuisine, salles de bain, vitres intérieures et planchers. Décrivez votre projet pour recevoir une soumission gratuite adaptée à l’état des lieux et à votre échéancier.",
    neighborhoods: ["Saint-Léonard-d’Aston", "Environs — disponibilité à confirmer"],
    longform: [
      "Avant d’emménager dans une maison neuve ou de réutiliser une pièce rénovée, le ménage après construction vise la poussière laissée par les travaux, y compris sur les plinthes, les luminaires et les rangements. Nous définissons les inclusions selon les surfaces à nettoyer et les besoins du projet; les vitres proposées dans ce service sont les vitres intérieures.",
      "Votre demande doit préciser la superficie, le nombre de pièces, le type de travaux et la date prévue de livraison. Ajoutez les disponibilités d’accès et les particularités du chantier pour que Mélanie puisse coordonner l’intervention selon les places disponibles.",
      "Notre point de service est à Nicolet. Pour un chantier à Saint-Léonard-d’Aston ou dans les alentours, indiquez la municipalité dans le message du formulaire rapide et choisissez « Autre secteur ». Nous confirmons la disponibilité et les modalités de déplacement dans la soumission, sans vous imposer un prix affiché à l’avance.",
    ],
    faq: [
      { q: "Que comprend le ménage après construction à Saint-Léonard-d’Aston ?", a: "Selon la soumission : poussière de construction sur les surfaces, armoires et rangements, cuisine et salles de bain, vitres et cadres intérieurs, aspiration et lavage des planchers, plinthes et luminaires." },
      { q: "Offrez-vous le nettoyage après une rénovation partielle ?", a: "Oui. Indiquez les pièces rénovées et les zones touchées par la poussière afin de définir le nettoyage nécessaire, même si les travaux ne concernent pas toute la maison." },
      { q: "Comment calculer le prix d’un ménage de fin de chantier ?", a: "Le prix dépend du service demandé, de la superficie et de l’état des lieux. Précisez les travaux réalisés et les tâches souhaitées pour recevoir une soumission gratuite adaptée à votre projet." },
      { q: "Comment réserver pour Saint-Léonard-d’Aston et les environs ?", a: "Dans le formulaire rapide, choisissez « Autre secteur » et inscrivez votre municipalité, la date de fin des travaux et les disponibilités d’accès dans le message. Mélanie répond en moins de 24 h et confirme les possibilités d’intervention." },
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
