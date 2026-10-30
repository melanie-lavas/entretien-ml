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

export const SERVICES: ServiceData[] = [  {
    slug: "menage-apres-chantier",
    title: "Ménage après chantier",
    h1: "Ménage après chantier et après construction à Bécancour",
    metaTitle: "Ménage après chantier Bécancour & Gentilly | M.L Excellence",
    metaDescription:
      "Nettoyage après construction et après rénovation à Gentilly, Bécancour et Nicolet : poussière de chantier, finition complète, prêt à livrer. Soumission gratuite en 24 h.",
    intro:
      "Vous terminez une construction ou une rénovation ? M.L Excellence remet le chantier impeccable avant la livraison : enlèvement de la poussière fine, nettoyage des surfaces et des armoires, salles de bain prêtes à utiliser et planchers propres du premier coup. Nous travaillons avec les entrepreneurs et les propriétaires de Gentilly, Bécancour et Nicolet, selon votre échéancier.",
    keywords:
      "ménage après chantier, nettoyage après construction Bécancour, ménage après rénovation Gentilly, nettoyage fin de chantier Bécancour, ménage avant livraison maison neuve",
    includes: [
      "Enlèvement de la poussière de construction (murs, plafonds, surfaces)",
      "Nettoyage intérieur et extérieur des armoires et rangements",
      "Cuisine et salles de bain complètes, prêtes à utiliser",
      "Vitres, cadres et rails de fenêtres (intérieur)",
      "Aspiration et lavage de tous les planchers",
      "Dépoussiérage des luminaires, plinthes et bouches de ventilation",
      "Retrait des résidus légers et des protections temporaires",
    ],
    benefits: [
      { t: "Prêt à livrer", d: "Une finition propre qui met votre travail en valeur devant le client." },
      { t: "Selon votre échéancier", d: "Intervention coordonnée avec la fin des travaux, même à court délai." },
      { t: "Équipe assurée", d: "Responsabilité civile complète, preuve d’assurance sur demande." },
      { t: "Un seul contact", d: "Vous parlez directement à Mélanie, du devis à la livraison." },
    ],
    faq: [
      { q: "Où offrez-vous le ménage après chantier ?", a: "À Gentilly, Saint-Grégoire et dans tous les secteurs de Bécancour, ainsi qu’à Nicolet et les environs — maisons neuves, rénovations et projets commerciaux." },
      { q: "Qu’est-ce qui est inclus dans un ménage après chantier ?", a: "L’enlèvement de la poussière de construction, le nettoyage des armoires, de la cuisine et des salles de bain, les vitres intérieures et les planchers — jusqu’à ce que le bâtiment soit prêt à être livré ou habité." },
      { q: "Quel est le délai pour une soumission ?", a: "La soumission est gratuite et vous la recevez en moins de 24 h. Indiquez-nous la superficie et la date de fin des travaux." },
      { q: "Pouvez-vous intervenir rapidement en fin de chantier ?", a: "Oui, selon les disponibilités. Contactez-nous dès que votre date de fin de travaux est connue pour réserver votre place." },
    ],
  },
  {
    slug: "menage-residentiel",
    title: "Ménage résidentiel",
    h1: "Ménage résidentiel à Bécancour et Nicolet — propre, fiable, sans engagement",
    metaTitle: "Ménage résidentiel Bécancour & Nicolet | M.L Excellence",
    metaDescription:
      "Ménage résidentiel à Bécancour, Gentilly, Saint-Grégoire et Nicolet. Équipe assurée, matériel fourni. Soumission gratuite en 24 h.",
    intro:
      "Notre service de ménage résidentiel s'adresse aux propriétaires et locataires de Bécancour et Nicolet qui veulent un intérieur impeccable, sans y consacrer leur fin de semaine. Maison, condo, jumelé ou grande propriété : nous arrivons avec tout le matériel et suivons une liste détaillée pièce par pièce.",
    keywords:
      "ménage résidentiel Bécancour, femme de ménage Gentilly, entretien ménager maison, grand ménage Nicolet, ménage Saint-Grégoire, service de nettoyage résidentiel",
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
    slug: "contrat-entretien-recurrent",
    title: "Contrat d'entretien récurrent",
    h1: "Contrats de ménage hebdomadaires, aux 2 semaines ou mensuels",
    metaTitle: "Contrat de ménage récurrent Bécancour | M.L Excellence",
    metaDescription:
      "Contrats de ménage récurrents à Bécancour et Nicolet : hebdomadaire, aux 2 semaines, mensuel. Tarif réduit, même équipe, sans engagement. Soumission gratuite.",
    intro:
      "Reprenez votre temps. Avec un contrat récurrent, vous rentrez chez vous dans un espace impeccable, sans y penser. Tarif réduit par rapport au ménage ponctuel, même équipe à chaque visite quand possible, et aucun engagement à long terme — on bâtit la confiance visite après visite.",
    keywords:
      "contrat ménage Bécancour, ménage hebdomadaire Gentilly, ménage mensuel Nicolet, entretien récurrent résidentiel, service ménage régulier",
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
      { q: "Quelle fréquence recommandez-vous ?", a: "Pour une famille active : aux 2 semaines. Pour les plus grands besoins : chaque semaine." },
      { q: "Puis-je suspendre durant les vacances ?", a: "Oui, sans frais. Vous nous prévenez au moins 48 h à l'avance." },
      { q: "Quel est le rabais en contrat vs ponctuel ?", a: "Variable selon la fréquence, généralement entre 10 % et 25 % par visite." },
    ],
  }
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
