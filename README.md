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

## État actuel — à finaliser

- **Formulaire de contact** : pas de backend (site statique, pas de PHP/DB). L'`action` du formulaire dans
  `src/pages/index.astro` est un placeholder — brancher un service comme
  [Formspree](https://formspree.io) ou [Web3Forms](https://web3forms.com) (gratuit, aucune infra à gérer).
- **Réalisations** (`src/data/site.ts`, tableau `realisations`) : cas "Clinique Serena" illustratif en attendant de
  vraies captures/résultats clients.
- **Témoignages** : trois emplacements réservés (`testimonials` dans `src/data/site.ts`).
- **RCCM** : en attente du document, actuellement en placeholder dans le footer.
- **Logo header** : la version fournie est un rendu "glow" (flou), utilisée en grand format sur le hero. Le header
  utilise pour l'instant un logo texte stylisé — remplacer par une version nette si disponible.
- **Réseaux sociaux** : liens `#` en attendant les vrais profils.

## Déploiement sur VPS Hostinger (Ubuntu 22.04 + Nginx)

Deux options : la GitHub Action déjà configurée (recommandée), ou un déploiement manuel.

### Option recommandée — GitHub Actions (déploiement automatique à chaque push sur `main`)

Le workflow `.github/workflows/deploy.yml` build le site et le pousse sur le VPS via `rsync` en SSH. C'est le plus
simple à maintenir pour itérer souvent : un `git push` suffit, pas de commande à retaper.

**Mise en place (une seule fois) :**

1. Sur le VPS, créer un utilisateur dédié au déploiement (ou utiliser un existant) et le dossier cible :
   ```bash
   sudo mkdir -p /var/www/azomedia/dist
   sudo chown -R $USER:$USER /var/www/azomedia
   ```
2. Générer une paire de clés SSH dédiée (en local, pas sur le VPS) :
   ```bash
   ssh-keygen -t ed25519 -f azomedia_deploy_key -N ""
   ```
3. Ajouter la clé publique au VPS : `cat azomedia_deploy_key.pub` puis l'ajouter dans
   `~/.ssh/authorized_keys` de l'utilisateur de déploiement sur le VPS.
4. Dans GitHub → Settings → Secrets and variables → Actions du repo, ajouter :
   - `VPS_HOST` : IP ou domaine du VPS
   - `VPS_USER` : l'utilisateur de déploiement
   - `VPS_SSH_KEY` : contenu de la clé **privée** (`azomedia_deploy_key`)
   - Variable `VPS_PATH` : `/var/www/azomedia/dist`
5. Configurer Nginx sur le VPS avec `nginx.conf.example` (voir plus bas) pour servir ce dossier.

Ensuite, chaque `git push` sur `main` build et déploie automatiquement.

### Option manuelle — rsync direct

Si tu préfères déployer à la main depuis ta machine :

```bash
npm run build
rsync -avzr --delete dist/ utilisateur@vps:/var/www/azomedia/dist/
```

### Configuration Nginx

Voir `nginx.conf.example` à la racine du projet — à copier vers `/etc/nginx/sites-available/azomedia`, activer avec
`ln -s`, puis `sudo nginx -t && sudo systemctl reload nginx`. Le fichier inclut une note pour activer HTTPS via
Certbot.

## Migration de domaine

Le site est actuellement pensé pour `digital.azomedia.site`. Pour migrer vers le domaine mère `azomedia.site` :

1. Mettre à jour `site` dans `astro.config.mjs` (déjà pointé sur `https://azomedia.site`)
2. Pointer le DNS de `azomedia.site` vers le même VPS (ou un nouveau enregistrement A/CNAME)
3. Dupliquer/adapter le bloc `server_name` dans la config Nginx et relancer Certbot pour le nouveau domaine
