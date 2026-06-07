# Guide de Déploiement - Flamingo Emma Website

Ce guide explique comment déployer le site Flamingo Emma en permanence sur différentes plateformes d'hébergement.

## 🚀 Options de Déploiement

### 1. Vercel (Recommandé - Gratuit et Facile)

Vercel est la plateforme idéale pour les applications Vite/React.

#### Étapes :

1. **Créer un compte Vercel**
   - Allez sur https://vercel.com
   - Inscrivez-vous avec GitHub, GitLab ou Bitbucket

2. **Connecter votre repository**
   - Cliquez sur "New Project"
   - Sélectionnez votre repository GitHub
   - Vercel détectera automatiquement que c'est un projet Vite

3. **Configuration automatique**
   - Build Command: `npm run build` (auto-détecté)
   - Output Directory: `dist` (auto-détecté)
   - Cliquez sur "Deploy"

4. **Domaine personnalisé (optionnel)**
   - Allez dans "Settings" → "Domains"
   - Ajoutez votre domaine personnalisé
   - Suivez les instructions DNS

**Avantages :**
- Déploiement automatique à chaque push sur GitHub
- SSL gratuit
- Performance optimale
- Domaine gratuit (*.vercel.app)

---

### 2. Netlify (Alternative - Gratuit et Simple)

Netlify est une autre excellente option pour les sites statiques.

#### Étapes :

1. **Créer un compte Netlify**
   - Allez sur https://netlify.com
   - Inscrivez-vous avec GitHub

2. **Connecter votre repository**
   - Cliquez sur "New site from Git"
   - Sélectionnez votre repository
   - Netlify lira automatiquement `netlify.toml`

3. **Configuration**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Cliquez sur "Deploy site"

4. **Domaine personnalisé**
   - Allez dans "Site settings" → "Domain management"
   - Ajoutez votre domaine
   - Configurez les DNS

**Avantages :**
- Déploiement continu depuis Git
- SSL gratuit
- Redirects automatiques
- Formulaires gratuits

---

### 3. GitHub Pages (Gratuit - Plus complexe)

Pour héberger directement depuis GitHub.

#### Étapes :

1. **Créer un repository public**
   ```bash
   git remote add origin https://github.com/votre-username/flamingo-emma-vision.git
   git branch -M main
   git push -u origin main
   ```

2. **Configurer GitHub Pages**
   - Allez dans "Settings" → "Pages"
   - Sélectionnez "Deploy from a branch"
   - Branche: `main`, Dossier: `dist`

3. **Créer un workflow GitHub Actions**
   - Créez `.github/workflows/deploy.yml`
   - Copiez le contenu ci-dessous :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. **Push vers GitHub**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

**Avantages :**
- Gratuit
- Intégré à GitHub
- Déploiement automatique

---

### 4. AWS S3 + CloudFront (Production Professionnelle)

Pour une solution d'entreprise avec CDN global.

#### Étapes :

1. **Créer un bucket S3**
   - Allez sur AWS Console
   - Créez un bucket S3
   - Activez "Static website hosting"

2. **Uploader les fichiers**
   ```bash
   aws s3 sync dist/ s3://votre-bucket-name/
   ```

3. **Configurer CloudFront**
   - Créez une distribution CloudFront
   - Pointez vers votre bucket S3
   - Activez HTTPS

4. **Domaine personnalisé**
   - Ajoutez un CNAME DNS
   - Pointez vers CloudFront

---

## 📋 Checklist de Déploiement

Avant de déployer, vérifiez :

- [ ] `npm run build` fonctionne sans erreurs
- [ ] Le dossier `dist/` contient les fichiers compilés
- [ ] `vercel.json` ou `netlify.toml` est présent
- [ ] Le `.gitignore` exclut `node_modules` et `dist`
- [ ] Le `README.md` est à jour
- [ ] Les liens internes fonctionnent
- [ ] Les images se chargent correctement
- [ ] Le site est responsive sur mobile
- [ ] Les performances sont acceptables

---

## 🔄 Déploiement Continu

Une fois configuré, le site se déploie automatiquement à chaque push :

```bash
# Faire des modifications
git add .
git commit -m "Mise à jour du contenu"
git push origin main
```

Le déploiement se fera automatiquement sur Vercel/Netlify/GitHub Pages.

---

## 🌐 Domaine Personnalisé

### Acheter un domaine

1. **Registraires recommandés :**
   - Namecheap
   - GoDaddy
   - OVH
   - Google Domains

2. **Configurer les DNS**
   - Pointez les nameservers vers votre hébergeur
   - Ou configurez les enregistrements A/CNAME

### Exemples de configuration DNS

**Pour Vercel :**
```
A record: 76.76.19.132
CNAME: cname.vercel-dns.com
```

**Pour Netlify :**
```
CNAME: flamingo-emma-vision.netlify.app
```

---

## 🔐 Variables d'Environnement

Si vous avez besoin de variables d'environnement (API keys, etc.) :

1. **Créer un fichier `.env.local`**
   ```
   VITE_API_URL=https://api.example.com
   VITE_API_KEY=your_key_here
   ```

2. **Utiliser dans le code**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. **Configurer sur Vercel/Netlify**
   - Allez dans Settings → Environment Variables
   - Ajoutez vos variables

---

## 📊 Monitoring & Analytics

### Google Analytics

1. Créez un compte Google Analytics
2. Ajoutez le script de tracking dans `index.html`
3. Suivez les performances du site

### Vercel Analytics (Gratuit)

Vercel propose des analytics intégrées :
- Allez dans "Analytics" sur votre dashboard
- Consultez les performances en temps réel

---

## 🆘 Dépannage

### Le site ne se déploie pas

1. Vérifiez les logs de build
2. Assurez-vous que `npm run build` fonctionne localement
3. Vérifiez que le `package.json` est correct

### Les styles Tailwind ne s'appliquent pas

1. Vérifiez que `tailwind.config.js` existe
2. Vérifiez que `src/index.css` contient les directives Tailwind
3. Reconstruisez : `npm run build`

### Les images ne se chargent pas

1. Vérifiez les chemins relatifs
2. Assurez-vous que les images sont dans le dossier `public/`
3. Utilisez des chemins absolus `/images/...`

---

## 📞 Support

Pour plus d'aide :

- **Vercel** : https://vercel.com/docs
- **Netlify** : https://docs.netlify.com
- **GitHub Pages** : https://pages.github.com
- **Vite** : https://vitejs.dev/guide/

---

**Créé par Manus AI** - Stratégie et développement web
