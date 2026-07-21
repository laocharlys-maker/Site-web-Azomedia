import type { ImageMetadata } from "astro";
import asm2026 from "../assets/realisations/asm-2026.png";
import ticfocaTournoi from "../assets/realisations/ticfoca-tournoi.png";
import ticfocaInscription from "../assets/realisations/ticfoca-inscription.png";
import stage2026 from "../assets/realisations/stage-2026.png";
import evalTyrannus from "../assets/realisations/eval-tyrannus.png";
import azpoint from "../assets/profile/u_h0yvbj97-fingerprint-4703841_1920.jpg";
import founderPhoto from "../assets/profile/WhatsApp Image 2025-09-20 at 15.08.48.jpeg";
import teamPhoto from "../assets/profile/pexels-gabby-k-9488846.jpg";
import whyUsImage from "../assets/profile/pexels-mikhail-nilov-9301246.jpg";
import painPointImage from "../assets/profile/istockphoto-1359976219-612x612.jpg";
import ctaImage from "../assets/profile/pexels-gabby-k-9488840.jpg";
import contactBgImage from "../assets/profile/pexels-pnw-prod-8276633.jpg";

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
  rccm: "RCCM RB/ABC/21 A 26551",
  legalRepresentative: "Sam LAO",
  legalForm: "Entreprise Individuelle",
  socials: {
    facebook: "https://www.facebook.com/azomedia/",
    // Lien public reconstruit depuis l'URL admin fournie (.../admin/page-posts/published/ n'est pas accessible publiquement)
    linkedin: "https://www.linkedin.com/company/103376744/",
    instagram: "#", // TODO: lien réel
  },
  // TODO: remplacer par ta vraie clé Web3Forms (gratuite, sur https://web3forms.com) pour recevoir
  // les soumissions des formulaires (Audit + Contact) directement par email. Tant que ce placeholder
  // reste en place, les formulaires afficheront une erreur d'envoi.
  web3formsAccessKey: "dda20fd7-36a5-49fd-98b0-5b50a103e840",
};

export const founder = {
  name: "Sam Charlys",
  role: "Spécialiste de l'IA et du no-code",
  photo: founderPhoto,
  bio: [
    "Fondateur d'AzoMedIA, je conçois des solutions numériques et des automatisations sur mesure pour les entreprises et organisations béninoises — sans jargon technique, avec un accompagnement humain de bout en bout.",
    "Spécialisé dans l'intelligence artificielle appliquée et les outils no-code, je construis des plateformes fonctionnelles rapidement : inscriptions en ligne, paiement Mobile Money, agents IA, automatisations métier.",
  ],
};

export const team = {
  photo: teamPhoto,
  caption: "Une équipe de jeunes passionnés au service des entreprises.",
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Pourquoi nous", href: "/#pourquoi-nous" },
  { label: "À propos", href: "/#a-propos" },
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

export { whyUsImage, painPointImage, ctaImage, contactBgImage };

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

type Realisation = {
  name: string;
  category: string;
  description: string;
  image?: ImageMetadata;
  icon?: string;
  placeholder?: boolean;
};

export const realisations: Realisation[] = [
  {
    name: "Au Sommet des Montagnes 2026",
    category: "Événementiel",
    description:
      "Plateforme d'inscription pour la conférence panafricaine des Servantes de Dieu & Femmes Leaders — plus de 3000 participantes attendues à Cotonou.",
    image: asm2026,
  },
  {
    name: "TICFOCA — Jubilé de Perle",
    category: "Événementiel sportif",
    description:
      "Site vitrine du tournoi inter-clubs de football d'Abomey-Calavi pour les 30 ans du club — plus de 4 000 000 FCFA de dotation.",
    image: ticfocaTournoi,
  },
  {
    name: "TICFOCA — Paiement en ligne",
    category: "Paiement Mobile Money",
    description:
      "Formulaire d'inscription au tournoi avec paiement en plusieurs tranches, connecté à MTN MoMo, Moov Money et Celtiis Cash.",
    image: ticfocaInscription,
  },
  {
    name: "EPS St Jean Bosco",
    category: "Éducation",
    description:
      "Formulaire d'inscription au stage académique de l'établissement, avec collecte des informations d'identité et de scolarité des élèves.",
    image: stage2026,
  },
  {
    name: "Eval Tyrannus",
    category: "Éducation",
    description:
      "Plateforme d'évaluation scolaire : suivi des modules, des résultats et du bulletin de chaque élève depuis un tableau de bord dédié.",
    image: evalTyrannus,
  },
  {
    name: "AzPoint",
    category: "Gestion RH / Pointage",
    description: "Solution numérique de pointage pour les entreprises : suivi des présences et des horaires du personnel.",
    image: azpoint,
  },
  // TODO: pas encore de capture d'écran pour cette solution — carte texte en attendant.
  {
    name: "Solution pour cabinets juridiques",
    category: "Secteur juridique",
    description: "Outil numérique sur mesure pour les juristes et cabinets d'avocats, pensé pour leurs process métier.",
    icon: "scale",
    placeholder: true,
  },
];
