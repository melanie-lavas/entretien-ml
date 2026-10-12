// Données SEO par service — une entrée = une page service dédiée.
// Utilisé par src/routes/services.$slug.tsx et sitemap.xml.

export type ServiceData = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  keywords: string;
  includes: string[];
  benefits: { t: string; d: string }[];
  faq: { q: string; a: string }[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: "entretien-immeubles-locatifs",
    title: "Entretien d’immeubles locatifs",
    h1: "Entretien d’immeubles locatifs en Mauricie",
    metaTitle: "Entretien immeubles locatifs Mauricie | M.L Excellence",
    metaDescription:
      "Entretien régulier d’immeubles locatifs en Mauricie : halls, corridors, escaliers, buanderies et remise en état. Soumission gratuite.",
    intro:
      "Vous gérez vos immeubles. Nous gardons les espaces communs propres, accueillants et suivis avec constance. Chaque contrat est adapté au nombre de logements, à l’achalandage et aux priorités de votre propriété, avec une communication directe et une équipe qui connaît les lieux.",
    keywords:
      "entretien immeuble locatif Mauricie, ménage bloc appartement Trois-Rivières, nettoyage espaces communs Bécancour, entretien immeuble Nicolet, conciergerie immeuble locatif",
    includes: [
      "Entrées, halls, vestibules et portes vitrées",
      "Corridors, cages d’escalier, rampes et ascenseurs",
      "Buanderies, salles communes et espaces partagés",
      "Aspiration, lavage des planchers et désinfection des points de contact",
      "Vidage des poubelles et entretien des zones prévues au contrat",
      "Remise en état entre deux locataires, sur demande",
    ],
    benefits: [
      { t: "Suivi constant", d: "Une liste de tâches claire et une qualité régulière à chaque passage." },
      { t: "Horaire flexible", d: "Interventions planifiées selon les besoins de vos locataires." },
      { t: "Équipe assurée", d: "Responsabilité civile et preuve d’assurance sur demande." },
      { t: "Un seul contact", d: "Communication directe pour les demandes et ajustements." },
    ],
    faq: [
      { q: "Quels types d’immeubles entretenez-vous ?", a: "Blocs appartements, duplex et plex, immeubles à logements, bâtiments locatifs et leurs espaces communs." },
      { q: "Pouvez-vous intervenir entre deux locataires ?", a: "Oui. Nous offrons une remise en état adaptée avant l’arrivée du prochain occupant." },
      { q: "À quelle fréquence pouvez-vous passer ?", a: "De 1 à 5 passages par semaine, selon le nombre de logements, l’achalandage et les espaces à entretenir." },
    ],
  },
  {
    slug: "menage-residentiel",
    title: "Ménage résidentiel",
    h1: "Ménage résidentiel en Mauricie — propre, fiable, sans engagement",
    metaTitle: "Ménage résidentiel Mauricie | M.L Excellence",
    metaDescription:
      "Ménage résidentiel à Trois-Rivières, Shawinigan, Bécancour et Nicolet. Équipe assurée, matériel fourni. Soumission gratuite en 24 h.",
    intro:
      "Notre service de ménage résidentiel s'adresse aux propriétaires et locataires de la Mauricie qui veulent un intérieur impeccable, sans y consacrer leur fin de semaine. Maison, condo, jumelé ou grande propriété : nous arrivons avec tout le matériel et suivons une liste détaillée pièce par pièce.",
    keywords:
      "ménage résidentiel Mauricie, femme de ménage Trois-Rivières, entretien ménager maison, grand ménage Shawinigan, ménage Bécancour, ménage Nicolet, service de nettoyage résidentiel",
    includes: [
      "Dépoussiérage complet (meubles, plinthes, cadrages, luminaires, ventilateurs)",
      "Salles de bain désinfectées : douche, bain, toilette, lavabo, miroirs",
      "Cuisine : comptoirs, électros extérieurs, évier, dosseret, hotte",
      "Aspirateur et lavage de planchers adapté au revêtement",
      "Vidage des poubelles, changement des sacs, parfum frais et discret",
      "Vitres intérieures, frigo et four en option",
    ],
    benefits: [
      { t: "Équipe assurée", d: "Responsabilité civile complète, employés vérifiés." },
      { t: "Tarif transparent", d: "Prix ferme à l'avance — pas de surprise à la fin." },
      { t: "Garantie satisfaction", d: "Pas content ? On revient gratuitement." },
      { t: "Matériel fourni", d: "Produits, vadrouilles, aspirateur — tout est inclus." },
    ],
    faq: [
      { q: "Quel est le prix d'un ménage résidentiel ?", a: "Le prix dépend de la superficie, du nombre de pièces et de la fréquence. Comptez à partir de quelques heures par visite. Soumission gratuite en 24 h." },
      { q: "Est-ce que je dois être présent durant le ménage ?", a: "Non. Plusieurs clients nous laissent une clé ou un code d'entrée — c'est sécuritaire et nous sommes assurés." },
      { q: "Quels produits utilisez-vous ?", a: "Nous apportons des produits efficaces et, sur demande, une gamme écoresponsable sans frais additionnels." },
      { q: "Puis-je prendre un contrat ou juste une visite ?", a: "Les deux : ménage ponctuel, grand ménage initial ou contrat récurrent hebdomadaire, aux 2 semaines ou mensuel, avec tarif réduit en contrat." },
    ],
  },
  {
    slug: "nettoyage-commercial",
    title: "Nettoyage commercial",
    h1: "Nettoyage commercial en Mauricie — bureaux, commerces, locaux",
    metaTitle: "Nettoyage commercial Mauricie | M.L Excellence",
    metaDescription:
      "Entretien de bureaux, cliniques et commerces à Trois-Rivières, Shawinigan et Bécancour. Contrats récurrents à tarif réduit. Soumission gratuite.",
    intro:
      "Vos clients et vos employés méritent un environnement propre et sain. Nos contrats de nettoyage commercial sont taillés sur mesure pour les bureaux, commerces de détail, cliniques, salons et petits locaux industriels de la Mauricie. Horaire flexible : avant l'ouverture, après la fermeture ou la nuit.",
    keywords:
      "nettoyage commercial Mauricie, entretien ménager bureau Trois-Rivières, ménage commercial Shawinigan, conciergerie Bécancour, contrat entretien bureau, nettoyage local commercial",
    includes: [
      "Plan d'entretien personnalisé selon votre type d'établissement",
      "Désinfection des points de contact (poignées, interrupteurs, comptoirs)",
      "Aspirateur, lavage de planchers, vidage des poubelles avec sacs fournis",
      "Salles de bain et cuisines/aires communes complètement désinfectées",
      "Vitres et miroirs propres sans traces",
      "Rapport de visite et communication directe avec votre gestionnaire",
    ],
    benefits: [
      { t: "Tarif réduit en contrat", d: "Plus la fréquence est élevée, plus le tarif visite baisse." },
      { t: "Même équipe à chaque visite", d: "Constance du résultat — aucune zone oubliée." },
      { t: "Facturation mensuelle", d: "Une seule facture claire par mois, payable par virement." },
      { t: "Flexibilité horaire", d: "Soir, nuit, week-end — on s'adapte à vos opérations." },
    ],
    faq: [
      { q: "Faites-vous des cliniques médicales ou dentaires ?", a: "Oui, avec un protocole de désinfection adapté aux établissements de santé." },
      { q: "Combien coûte un contrat de nettoyage commercial ?", a: "Le tarif dépend de la superficie, du type d'usage et de la fréquence. Soumission gratuite après une courte visite sur place." },
      { q: "Êtes-vous assurés pour les locaux commerciaux ?", a: "Oui. Responsabilité civile complète, fournie sur demande à votre gestionnaire d'immeuble." },
    ],
  },
  {
    slug: "contrat-entretien-recurrent",
    title: "Contrat d'entretien récurrent",
    h1: "Contrats de ménage hebdomadaires, aux 2 semaines ou mensuels",
    metaTitle: "Contrat de ménage récurrent Mauricie | M.L Excellence",
    metaDescription:
      "Contrats de ménage récurrents en Mauricie : hebdomadaire, aux 2 semaines, mensuel. Tarif réduit, même équipe, sans engagement. Soumission gratuite.",
    intro:
      "Reprenez votre temps. Avec un contrat récurrent, vous rentrez chez vous (ou au bureau) dans un espace impeccable, sans y penser. Tarif réduit par rapport au ménage ponctuel, même équipe à chaque visite quand possible, et aucun engagement à long terme — on bâtit la confiance visite après visite.",
    keywords:
      "contrat ménage Mauricie, ménage hebdomadaire Trois-Rivières, ménage mensuel Shawinigan, entretien récurrent bureau, service ménage régulier",
    includes: [
      "Plan personnalisé selon vos pièces et priorités",
      "Même équipe à chaque visite (quand possible)",
      "Produits écoresponsables sur demande, sans frais",
      "Rappels automatiques, flexibilité d'horaire",
      "Ajustements saisonniers en option (vitres, frigo, four)",
      "Tarif visite réduit vs ménage ponctuel",
    ],
    benefits: [
      { t: "Sans engagement", d: "Vous arrêtez quand vous voulez, aucune pénalité." },
      { t: "Tarif dégressif", d: "Plus la fréquence est haute, plus le prix de la visite baisse." },
      { t: "Facturation simple", d: "Mensuelle ou par visite, à votre choix." },
      { t: "Constance garantie", d: "Liste détaillée respectée à chaque passage." },
    ],
    faq: [
      { q: "Quelle fréquence recommandez-vous ?", a: "Pour une famille active : aux 2 semaines. Pour un bureau : 1 à 3 fois par semaine selon l'achalandage." },
      { q: "Puis-je suspendre durant les vacances ?", a: "Oui, sans frais. Vous nous prévenez au moins 48 h à l'avance." },
      { q: "Quel est le rabais en contrat vs ponctuel ?", a: "Variable selon la fréquence, généralement entre 10 % et 25 % par visite." },
    ],
  },
  {
    slug: "entretien-plates-bandes",
    title: "Entretien extérieur & plates-bandes",
    h1: "Entretien de plates-bandes en Mauricie — désherbage et taille",
    metaTitle: "Entretien de plates-bandes Mauricie | M.L Excellence",
    metaDescription:
      "Désherbage manuel, taille et entretien de plates-bandes à Trois-Rivières, Shawinigan et Bécancour. Forfait saison ou visite ponctuelle.",
    intro:
      "Vos plates-bandes méritent autant d'attention que votre salon. On désherbe à la main (racines retirées, pas seulement coupées), on taille proprement, on remet le paillis en place et on repart en laissant vos bordures nettes. Idéal pour la mise en beauté printanière, la préparation à la vente ou un coup de fraîcheur avant un événement.",
    keywords:
      "entretien plates-bandes Mauricie, désherbage Trois-Rivières, paysagement Shawinigan, ménage extérieur, entretien jardin résidentiel",
    includes: [
      "Désherbage manuel complet (racines retirées)",
      "Taille légère des vivaces et arbustes",
      "Nettoyage des bordures, paillis redistribué uniformément",
      "Ramassage et disposition responsable des résidus végétaux",
      "Conseils gratuits pour garder un résultat durable",
    ],
    benefits: [
      { t: "Travail manuel", d: "Aucun désherbant chimique sauf demande expresse." },
      { t: "Forfait saison", d: "3 à 5 visites de mai à octobre, prix avantageux." },
      { t: "Résultat durable", d: "Bordures propres et paillis en place pour des mois." },
      { t: "Combinable", d: "Ajoutez un ménage intérieur ou un lavage auto la même journée." },
    ],
    faq: [
      { q: "Faites-vous la tonte de pelouse ?", a: "Non, nous nous concentrons sur les plates-bandes. Pour la pelouse, nous pouvons vous référer à un partenaire de confiance." },
      { q: "Quand est le meilleur moment ?", a: "Une visite au printemps (mai), une au milieu de l'été et une à l'automne donnent un résultat optimal." },
    ],
  },
  {
    slug: "lavage-auto",
    title: "Lavage auto intérieur & extérieur",
    h1: "Lavage auto en Mauricie — intérieur, extérieur, esthétique",
    metaTitle: "Lavage auto Mauricie | M.L Excellence",
    metaDescription:
      "Lavage auto complet en Mauricie : carrosserie, jantes, habitacle aspiré, vitres sans traces. Berlines, VUS, camionnettes, flottes. Soumission gratuite.",
    intro:
      "Redonnez à votre véhicule l'allure du jour de l'achat. Carrosserie lustrée, jantes propres, habitacle aspiré dans les moindres recoins, vitres sans traces et léger parfum frais. Parfait avant une revente, pour un véhicule de flotte à présenter à un client, ou simplement pour le plaisir de conduire un char impeccable.",
    keywords:
      "lavage auto Mauricie, esthétique auto Trois-Rivières, nettoyage intérieur voiture Shawinigan, détail auto Bécancour, lavage flotte commerciale",
    includes: [
      "Lavage extérieur complet, jantes et pneus lustrés",
      "Aspirateur en profondeur (sièges, tapis, coffre, entre-sièges)",
      "Nettoyage du tableau de bord, console et plastiques",
      "Vitres intérieures et extérieures sans traces",
      "Désodorisation légère et discrète",
      "Tarif dégressif pour les flottes commerciales",
    ],
    benefits: [
      { t: "À domicile possible", d: "Nous pouvons nous déplacer chez vous selon la disponibilité." },
      { t: "Flottes commerciales", d: "Tarif spécial à partir de 3 véhicules." },
      { t: "Préparation revente", d: "Idéal pour maximiser la valeur de votre véhicule." },
      { t: "Sans abrasif", d: "Produits sécuritaires pour la peinture et les plastiques." },
    ],
    faq: [
      { q: "Faites-vous la cire et le polissage ?", a: "Oui, en option. À ajouter à votre demande de soumission." },
      { q: "Combien de temps pour un lavage complet ?", a: "Entre 1 h 30 et 3 h selon le format du véhicule et son état initial." },
    ],
  },
  {
    slug: "homme-a-tout-faire",
    title: "Homme à tout faire & rénovations mineures",
    h1: "Homme à tout faire en Mauricie — petits travaux et rénovations mineures",
    metaTitle: "Homme à tout faire Mauricie | M.L Entretien",
    metaDescription:
      "Homme à tout faire en Mauricie : petits travaux, réparations et rénovations mineures à Trois-Rivières, Shawinigan, Bécancour et Nicolet. Soumission gratuite.",
    intro:
      "Cette tablette à installer, ce robinet qui coule, cette pièce à repeindre : nos clients nous demandaient un homme à tout faire fiable, nous l'offrons maintenant sur demande. Petits travaux, réparations et rénovations mineures pour les résidences, les bureaux et les immeubles locatifs de la Mauricie.",
    keywords:
      "homme à tout faire Mauricie, petits travaux Trois-Rivières, rénovation mineure Shawinigan, réparation maison Bécancour, handyman Nicolet, entretien immeuble locatif",
    includes: [
      "Installation : tablettes, stores, cadres, poignées, luminaires simples",
      "Réparations mineures de plomberie et de quincaillerie",
      "Peinture et retouches (murs, portes, cadrages, plinthes)",
      "Petits travaux de menuiserie et calfeutrage",
      "Montage de meubles et remise en état entre deux locataires",
      "Corvées d'entretien préventif pour bureaux et immeubles",
    ],
    benefits: [
      { t: "Sur demande", d: "Disponible en complément de votre contrat d'entretien." },
      { t: "Une seule ressource", d: "Ménage et petits travaux par la même entreprise assurée." },
      { t: "Prix selon les travaux", d: "Soumission claire avant de commencer, sans surprise." },
      { t: "Immeubles locatifs", d: "Idéal pour la remise en état entre deux locataires." },
    ],
    faq: [
      { q: "Faites-vous de la rénovation majeure ?", a: "Non. Nous nous concentrons sur les travaux mineurs et l'entretien. Pour un projet majeur, nous pouvons vous référer." },
      { q: "Peut-on combiner les petits travaux avec le ménage ?", a: "Oui, c'est même l'idéal : une seule visite, une seule facture." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
