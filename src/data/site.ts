// Coordonnées et liens globaux du site.
// -> Modifie ces valeurs ici, elles sont réutilisées partout (header, footer, CTA, WhatsApp flottant).
export const site = {
  name: "AzoMedIA",
  tagline: "Solutions numériques intelligentes",
  city: "Cotonou, Bénin",
  phone: "+229 96 30 06 11",
  whatsapp: "https://wa.me/22996300611",
  email: "contact@azomedia.site",
  address: "Cotonou, Bénin", // TODO: précise le quartier si tu veux l'afficher
  ifu: "0201810513645",
  rccm: "RCCM : à compléter", // TODO: en attente du courrier RCCM
  socials: {
    facebook: "#", // TODO: lien réel
    linkedin: "#", // TODO: lien réel
    instagram: "#", // TODO: lien réel
  },
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Pourquoi nous", href: "/#pourquoi-nous" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Secteurs", href: "/#secteurs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const marqueeItems = [
  "AGENT IA",
  "AUTOMATISATION",
  "CHATBOT INTELLIGENT",
  "CRÉATION DE SITE WEB",
  "FORMATION IA",
  "OUTILS SUR MESURE",
];

export type Service = {
  icon: string; // clé utilisée par ServiceCard pour choisir l'icône SVG
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "audit",
    title: "Diagnostic & Audit IA",
    description:
      "On analyse vos process actuels et on identifie, gratuitement, où l'IA et l'automatisation peuvent vous faire gagner du temps et de l'argent.",
  },
  {
    icon: "web",
    title: "Création de site web",
    description:
      "Sites vitrines et applicatifs rapides, pensés mobile-first, pour convertir vos visiteurs en clients même sur une connexion instable.",
  },
  {
    icon: "agent",
    title: "Création d'agents IA",
    description:
      "Des agents intelligents capables de traiter vos demandes clients, qualifier des leads ou automatiser des tâches métier, 24h/24.",
  },
  {
    icon: "automation",
    title: "Automatisation",
    description:
      "On connecte vos outils entre eux pour éliminer les tâches manuelles répétitives : saisie, relances, rapports, notifications.",
  },
  {
    icon: "chatbot",
    title: "Chatbot intelligent",
    description:
      "Un assistant conversationnel sur votre site ou WhatsApp qui répond à vos clients instantanément, même en dehors des heures ouvrées.",
  },
  {
    icon: "tools",
    title: "Outils IA sur mesure",
    description:
      "Des outils internes développés spécifiquement pour vos besoins métier : pas de solution générique, une réponse à votre problème réel.",
  },
  {
    icon: "training",
    title: "Formations IA",
    description:
      "On forme vos équipes à utiliser concrètement l'IA au quotidien, avec des cas pratiques adaptés à votre secteur d'activité.",
  },
];

export const painPoints = [
  {
    title: "Des appels perdus, des clients qui partent",
    description:
      "Chaque appel manqué ou message sans réponse rapide est un client qui va voir ailleurs.",
  },
  {
    title: "Des heures perdues sur des tâches répétitives",
    description:
      "Saisie, relances, prise de rendez-vous : du temps précieux qui n'est plus consacré à faire grandir votre activité.",
  },
  {
    title: "Un retard digital face à la concurrence",
    description:
      "Pendant que vous hésitez, d'autres entreprises de votre secteur prennent une longueur d'avance grâce au numérique.",
  },
];

export const pillars = [
  {
    title: "Solutions sur mesure",
    description: "Pas de solution générique copiée-collée : chaque projet part de votre réalité métier.",
  },
  {
    title: "Accompagnement humain",
    description: "Du diagnostic au support, une équipe disponible à chaque étape, pas un logiciel livré seul.",
  },
  {
    title: "Adapté au contexte local",
    description: "WhatsApp, Mobile Money, connexions instables : pensé pour le terrain béninois et africain.",
  },
  {
    title: "Résultats mesurables",
    description: "Des objectifs clairs fixés dès le départ, et un suivi des résultats concrets obtenus.",
  },
];

export const sectors = [
  "Cliniques & Santé",
  "Éducation",
  "Commerce & PME",
  "Administration",
  "Hôtellerie & Restauration",
  "Services professionnels",
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

// TODO: remplacer par de vrais témoignages clients dès que disponibles
export const testimonials: Testimonial[] = [
  {
    name: "Témoignage à venir",
    role: "Secteur santé",
    quote:
      "Espace réservé à un premier retour client — sera remplacé dès qu'un témoignage réel sera disponible.",
  },
  {
    name: "Témoignage à venir",
    role: "PME / Commerce",
    quote:
      "Espace réservé à un premier retour client — sera remplacé dès qu'un témoignage réel sera disponible.",
  },
  {
    name: "Témoignage à venir",
    role: "Éducation",
    quote:
      "Espace réservé à un premier retour client — sera remplacé dès qu'un témoignage réel sera disponible.",
  },
];

// TODO: remplacer par les vraies réalisations (captures + résultats) une fois reçues
export const realisations = [
  {
    name: "Clinique Serena",
    location: "Cotonou",
    description:
      "Exemple illustratif : mise en place d'un accueil digital pour réduire les rendez-vous manqués et fluidifier la prise de contact patient.",
    stat: "Cas d'usage illustratif",
    placeholder: true,
  },
  {
    name: "Prochaine réalisation",
    location: "À venir",
    description: "Emplacement réservé pour un futur projet client.",
    stat: "À venir",
    placeholder: true,
  },
  {
    name: "Prochaine réalisation",
    location: "À venir",
    description: "Emplacement réservé pour un futur projet client.",
    stat: "À venir",
    placeholder: true,
  },
];
