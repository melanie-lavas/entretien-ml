// Données SEO locales — une entrée = un secteur desservi (Bécancour et Nicolet).
// Utilisé par la route dynamique src/routes/menage.$city.tsx et par sitemap.xml.

export type CityData = {
  slug: string;
  name: string;
  region: string;
  lat?: number;
  lng?: number;
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
      "Sainte-Angèle-de-Laval",
      "Saint-Grégoire",
      "Précieux-Sang",
      "Sainte-Gertrude",
      "Bécancour (secteur)",
      "Parc industriel et portuaire",
      "Wôlinak",
    ],
    longform: [
      "Notre point de service est à Nicolet, à moins de 15 minutes de Saint-Grégoire. Nous desservons les secteurs de Bécancour sans frais de déplacement.",
      "Côté après chantier, nous nettoyons les constructions neuves et les rénovations — résidentielles comme commerciales, y compris dans le parc industriel et portuaire de Bécancour — jusqu'à la finition, prêtes à livrer. Nous développons présentement ce service à Bécancour pour l'horaire automne-hiver 2026-2027 : entrepreneurs, réservez votre place.",
      "Côté résidentiel, nous faisons le grand ménage initial, l'entretien récurrent (hebdomadaire, aux 2 semaines ou mensuel), les fins de bail et les ménages avant la vente d'une propriété.",
    ],
    faq: [
      {
        q: "Desservez-vous tous les secteurs de Bécancour ?",
        a: "Oui : Sainte-Angèle-de-Laval, Saint-Grégoire, Précieux-Sang, Sainte-Gertrude, le secteur Bécancour ainsi que le parc industriel et portuaire. Aucun frais de déplacement à l'intérieur de la ville.",
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
  },
  {
    slug: "saint-celestin",
    name: "Saint-Célestin",
    region: "Centre-du-Québec",
    metaTitle: "Ménage à Saint-Célestin | M.L Excellence",
    metaDescription: "Entretien ménager à Saint-Célestin : ménage régulier, grand ménage et nettoyage après rénovation. Décrivez votre besoin pour une soumission gratuite.",
    h1: "Ménage résidentiel et après rénovation à Saint-Célestin",
    intro: "À Saint-Célestin, M.L Excellence vous accompagne pour entretenir votre maison, préparer un déménagement ou nettoyer après des travaux. Choisissez une visite ponctuelle ou un entretien régulier adapté à vos pièces et à votre rythme. Notre point de service est à Nicolet : indiquez votre secteur et les disponibilités d’accès pour organiser votre ménage.",
    neighborhoods: ["Saint-Célestin", "Village et municipalité — précisez votre secteur"],
    travelNote: "La disponibilité et les modalités de déplacement à Saint-Célestin sont confirmées dans votre soumission.",
    longform: [
      "Pour un entretien régulier à Saint-Célestin, précisez les pièces à entretenir, la fréquence souhaitée — chaque semaine, aux deux semaines ou chaque mois — et vos priorités. Cuisine, salles de bain, dépoussiérage et planchers : les tâches sont définies selon votre résidence.",
      "Vous préparez une vente ou un changement de locataire ? Un grand ménage peut être demandé en une seule visite. Ajoutez la date de remise des clés et les options souhaitées, comme l’intérieur des armoires, du réfrigérateur ou du four.",
      "Après une rénovation, indiquez les pièces touchées et l’état des travaux. Nous définissons le nettoyage de la poussière, des surfaces et des planchers avant de confirmer l’intervention.",
    ],
    faq: [
      { q: "Comment demander un ménage à Saint-Célestin ?", a: "Choisissez Saint-Célestin dans le formulaire rapide et indiquez votre téléphone, le besoin et la fréquence. La soumission est gratuite et Mélanie répond en moins de 24 h." },
      { q: "Puis-je demander un grand ménage sans contrat ?", a: "Oui. Sélectionnez Grand ménage et Une seule fois, puis précisez les pièces et les tâches souhaitées." },
      { q: "Le déplacement est-il inclus ?", a: "Les modalités de déplacement et les disponibilités sont précisées dans votre soumission, selon votre secteur exact." },
    ],
  },
  {
    slug: "saint-pierre-les-becquets",
    name: "Saint-Pierre-les-Becquets",
    region: "Centre-du-Québec",
    metaTitle: "Ménage Saint-Pierre-les-Becquets | M.L Excellence",
    metaDescription: "Ménage résidentiel et après construction à Saint-Pierre-les-Becquets. Entretien régulier, grand ménage ou avant emménagement. Soumission gratuite.",
    h1: "Ménage et nettoyage après construction à Saint-Pierre-les-Becquets",
    intro: "Une maison à entretenir ou un chantier à terminer à Saint-Pierre-les-Becquets ? M.L Excellence propose le ménage résidentiel et le nettoyage après construction ou rénovation. Présentez votre projet, les pièces à nettoyer et votre échéance pour recevoir une soumission adaptée, sans prix imposé à l’avance.",
    neighborhoods: ["Saint-Pierre-les-Becquets", "Environs — disponibilité à confirmer"],
    travelNote: "Précisez votre emplacement à Saint-Pierre-les-Becquets; l’horaire et le déplacement sont confirmés avant l’intervention.",
    longform: [
      "Pour préparer l’emménagement dans une construction neuve, décrivez l’état du chantier et la date prévue de fin des travaux. Le nettoyage peut comprendre les surfaces, les armoires et rangements, la cuisine, les salles de bain, les vitres intérieures et les planchers, selon la soumission.",
      "Pour votre résidence à Saint-Pierre-les-Becquets, choisissez un grand ménage ponctuel ou un entretien récurrent. Mentionnez la superficie, le nombre de pièces et les surfaces nécessitant une attention particulière afin de définir le mandat.",
      "Les entreprises de Saint-Pierre-les-Becquets peuvent aussi demander une soumission commerciale. Notre offre commerciale couvre le Québec; chaque mandat est organisé selon l’accès aux locaux, la fréquence et les disponibilités.",
    ],
    faq: [
      { q: "Faites-vous le ménage après construction à Saint-Pierre-les-Becquets ?", a: "Oui. Indiquez la superficie, les travaux réalisés, les pièces concernées et la date prévue de livraison pour définir les tâches et l’horaire." },
      { q: "Quelles informations fournir pour un entretien résidentiel ?", a: "Précisez le type de logement, les pièces, la fréquence souhaitée et les disponibilités d’accès. Les options comme le four ou les armoires intérieures doivent être indiquées." },
      { q: "Comment le prix est-il établi ?", a: "Le prix dépend du service, de la superficie, de l’état des lieux et de la fréquence. Les modalités de déplacement sont confirmées avec votre soumission gratuite." },
    ],
  },
  {
    slug: "saint-sylvere",
    name: "Saint-Sylvère",
    region: "Centre-du-Québec",
    metaTitle: "Entretien ménager Saint-Sylvère | M.L Excellence",
    metaDescription: "Ménage à Saint-Sylvère : entretien résidentiel, grand ménage et nettoyage après travaux. Fréquence et tâches sur mesure. Demandez une soumission gratuite.",
    h1: "Entretien ménager résidentiel à Saint-Sylvère",
    intro: "À Saint-Sylvère, confiez votre entretien résidentiel à M.L Excellence pour un ménage ponctuel ou régulier. Cuisine, salles de bain, poussière et planchers : nous définissons les tâches avec vous. Un grand ménage avant une vente, un déménagement ou après une rénovation peut aussi être demandé.",
    neighborhoods: ["Saint-Sylvère", "Environs — disponibilité à confirmer"],
    travelNote: "Pour Saint-Sylvère, indiquez votre secteur exact. La disponibilité et les modalités de déplacement sont confirmées dans la soumission.",
    longform: [
      "Un entretien aux deux semaines peut être demandé pour conserver une maison propre entre les visites. Une fréquence hebdomadaire ou mensuelle est aussi possible : expliquez vos priorités pour que le mandat corresponde à votre quotidien.",
      "Si votre maison nécessite une remise à niveau, choisissez un grand ménage initial. Décrivez les zones à traiter et les options souhaitées; un entretien régulier peut ensuite être organisé selon les disponibilités.",
      "Après des travaux à Saint-Sylvère, le nettoyage est défini selon les pièces touchées par la poussière et la finition. Ajoutez la date de fin des travaux et les accès pour préparer une soumission après chantier.",
    ],
    faq: [
      { q: "Offrez-vous le ménage régulier à Saint-Sylvère ?", a: "Oui. Choisissez l’entretien régulier résidentiel et votre fréquence dans le formulaire. Mélanie confirme les disponibilités avec vous." },
      { q: "Pouvez-vous nettoyer avant un déménagement ?", a: "Oui. Choisissez Ménage avant vente / fin de bail et précisez la date de départ ou d’emménagement ainsi que les pièces à nettoyer." },
      { q: "Est-ce possible de demander un nettoyage après rénovation ?", a: "Oui. Précisez les travaux réalisés, la superficie et les zones touchées par la poussière pour recevoir une soumission adaptée." },
    ],
  }
];

export const getCityBySlug = (slug: string) => CITIES.find((c) => c.slug === slug);
