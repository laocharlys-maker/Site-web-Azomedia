# Site AzoMedIA

Site vitrine d'AzoMedIA — agence de solutions numériques intelligentes basée à Cotonou, Bénin. Construit avec
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), 100% statique.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:4321`.

```bash
npm run build    # génère le site statique dans dist/
npm run preview  # sert dist/ localement pour vérifier le build
```

## Où éditer quoi

| Besoin | Fichier |
| --- | --- |
| Téléphone, email, WhatsApp, réseaux sociaux, IFU/RCCM | `src/data/site.ts` |
| Liste des services, secteurs, témoignages, réalisations, piliers | `src/data/site.ts` |
| Textes du hero, header, footer | `src/components/Hero.astro`, `Header.astro`, `Footer.astro` |
| Sections de la page d'accueil | `src/pages/index.astro` |
| Logo | `src/assets/branding/` (référencé dans `Header.astro` / `Footer.astro`) |
| Articles de blog | `src/content/blog/*.md` (un fichier = un article) |
| Couleurs, polices | `src/styles/global.css` (bloc `@theme`) |

## Formulaires (Audit + Contact) — activer l'envoi par email

Les deux formulaires (popup "Audit gratuit" et section Contact de la page d'accueil) envoient leurs soumissions via
[Web3Forms](https://web3forms.com) — gratuit, sans backend à héberger, aucune inscription complexe :

1. Va sur [web3forms.com](https://web3forms.com), entre l'email où tu veux recevoir les demandes
2. Tu reçois une clé d'accès (`access_key`) par email
3. Remplace `web3formsAccessKey` dans `src/data/site.ts` par cette clé

Tant que ce placeholder n'est pas remplacé, les formulaires afficheront un message d'échec d'envoi.

## État actuel — à finaliser

- **Réalisations** (`src/data/site.ts`, tableau `realisations`) : AzPoint et la solution Juristes n'ont pas encore de
  capture d'écran (cartes texte en attendant).
- **Témoignages** : trois emplacements réservés (`testimonials` dans `src/data/site.ts`).
- **Réseaux sociaux** : Instagram en attente du vrai lien (`#` placeholder).
- **Photo "À propos"** : avatar temporaire en attendant la vraie photo (à déposer dans `src/assets/profile/`).

## Déploiement — Netlify

Le site est hébergé sur **Netlify**, connecté directement à ce repo GitHub. Chaque `git push` sur la branche liée au
site déclenche automatiquement un nouveau build et déploiement — rien à faire à la main.

- **Build command** : `npm run build`
- **Publish directory** : `dist`
- **Domaine de production** : [azomedia.site](https://azomedia.site) (et `www.azomedia.site`, qui redirige vers le
  domaine principal)
- Le sous-domaine `azomedia.netlify.app` reste toujours accessible en secours

### DNS

Le nom de domaine `azomedia.site` est enregistré chez **LWS**. La zone DNS y contient :

| Type | Hôte | Valeur |
| --- | --- | --- |
| A | `@` | `75.2.60.5` (load balancer Netlify) |
| CNAME | `www` | `azomedia.netlify.app` |

Le certificat HTTPS (Let's Encrypt) est généré et renouvelé automatiquement par Netlify.

### Variables sensibles

La clé Web3Forms (`web3formsAccessKey` dans `src/data/site.ts`) est actuellement en clair dans le code — acceptable
pour une clé publique de ce type (elle est conçue pour être exposée côté client), mais si un jour le projet a besoin
d'autres secrets (clé API IA pour un chatbot, etc.), les stocker en variables d'environnement Netlify plutôt que dans
le code.

## Historique

Le projet a été pensé au départ pour un déploiement sur un VPS Hostinger avec Nginx (voir l'historique Git pour ces
anciennes instructions) ; le passage à Netlify les a rendues obsolètes et elles ont été retirées de ce README.
