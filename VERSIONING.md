# 🚀 Gestion des Versions par Branches/Tags Git

Cette solution permet de gérer les versions de documentation sans stocker toutes les versions en local dans le repository principal.

## 📁 Structure du Système

```
uxodocs/
├── docs/                          # Documentation courante (en développement)
├── versioned_docs/               # 🚫 GÉNÉRÉ - Ne pas commiter
├── scripts/
│   ├── build-versions.js         # Script principal de gestion des versions
│   └── generate-docusaurus-config.js  # Génération config dynamique
├── versions.json                 # Configuration des versions disponibles
└── .docusaurus-generated-config.json  # 🚫 GÉNÉRÉ - Config Docusaurus
```

## 🎯 Principe de Fonctionnement

1. **Une seule version en local** : Le dossier `docs/` contient uniquement la version en cours de développement
2. **Versions en branches/tags** : Chaque version historique vit dans une branche ou un tag Git
3. **Build automatique** : Au moment du build, le script checkout automatiquement toutes les versions et les copie dans `versioned_docs/`
4. **Configuration dynamique** : Docusaurus s'adapte automatiquement aux versions disponibles

## 🔧 Configuration des Versions

Le fichier `versions.json` définit toutes les versions disponibles :

```json
{
  "products": {
    "flower": {
      "name": "FlowerDocs",
      "versions": {
        "v2025": {
          "ref": "flower/v2025",           // Branche ou tag Git
          "sourcePath": "docs/flower/v2025", // Chemin source dans la branche
          "targetPath": "flower/v2025",     // Destination dans versioned_docs/
          "label": "v2025",
          "isLatest": true
        }
      }
    }
  }
}
```

## 📝 Workflow de Développement

### 1. Développement d'une Nouvelle Version

```bash
# Travailler sur la version courante dans docs/
git checkout main
# Modifier docs/flower/, docs/fast2/, docs/arender/, etc.
```

### 2. Release d'une Version

Quand une version est prête à être figée :

```bash
# Option A: Créer une branche
git checkout -b flower/v2025
git add docs/flower/v2025/
git commit -m "Release FlowerDocs v2025"
git push origin flower/v2025

# Option B: Créer un tag
git tag -a flower/v2025 -m "FlowerDocs v2025"
git push origin flower/v2025
```

### 3. Mettre à Jour versions.json

Ajouter la nouvelle version dans `versions.json` :

```json
{
  "products": {
    "flower": {
      "versions": {
        "v2025": {
          "ref": "flower/v2025",
          "sourcePath": "docs/flower/v2025",
          "targetPath": "flower/v2025",
          "label": "v2025",
          "isLatest": true
        },
        "v2.8-lts": {
          "ref": "flower/v2.8-lts",
          "sourcePath": "docs/flower/v2.8-lts", 
          "targetPath": "flower/v2.8-lts",
          "label": "v2.8 LTS",
          "isLatest": false
        }
      }
    }
  }
}
```

## 🛠️ Scripts Disponibles

### Build Complet

```bash
# Build toutes les versions + site Docusaurus
npm run build

# Build seulement Docusaurus (sans versions)
npm run build:docs-only
```

### Build par Produit

```bash
# Build seulement les versions FlowerDocs
npm run build:versions:flower

# Build seulement les versions Fast2
npm run build:versions:fast2

# Build seulement les versions ARender
npm run build:versions:arender
```

### Build Sélectif

```bash
# Build seulement une version spécifique pour tous les produits
npm run build:versions -- --version=v2025

# Build un produit spécifique
npm run build:versions -- --product=flower

# Combinaison
npm run build:versions -- --product=flower --version=v2025
```

### Développement

```bash
# Start en mode développement (version courante uniquement)
npm start

# Start avec nettoyage du cache
npm start:clean
```

## 📋 Avantages de cette Approche

✅ **Repository léger** : Une seule version en local  
✅ **Historique préservé** : Versions figées dans Git  
✅ **Build flexible** : Choix des versions à builder  
✅ **CI/CD compatible** : Scripts automatisables  
✅ **Navigation cohérente** : Toutes versions accessibles sur le site  

## 🔄 Migration depuis l'Ancienne Structure

### Étape 1: Sauvegarder les Versions Existantes

```bash
# Pour chaque version existante, créer une branche
git checkout -b flower/v2025
git add docs/flower/v2025/
git commit -m "Archive FlowerDocs v2025"
git push origin flower/v2025

git checkout main
git checkout -b flower/v2.8-lts
git add docs/flower/v2.8-lts/
git commit -m "Archive FlowerDocs v2.8 LTS"
git push origin flower/v2.8-lts
```

### Étape 2: Nettoyer la Branche Principale

```bash
git checkout main
# Supprimer les versions archivées
rm -rf docs/flower/v2025/
rm -rf docs/flower/v2.8-lts/
rm -rf docs/fast2/v2x/
# etc.

# Garder seulement les versions en développement actif
git add .
git commit -m "Clean: Move historical versions to branches"
```

### Étape 3: Configurer versions.json

Créer la configuration correspondant aux branches créées.

### Étape 4: Premier Build

```bash
npm run build:versions
npm start
```

## 🐛 Troubleshooting

### Erreur "ref not found"

```bash
# Vérifier que la branche/tag existe
git branch -a | grep flower/v2025
git tag | grep flower/v2025

# Fetch si nécessaire
git fetch --all --tags
```

### Erreur "sourcePath not found"

Vérifier que le chemin `sourcePath` dans `versions.json` correspond bien à la structure dans la branche/tag.

### Problème de Build

```bash
# Nettoyer et rebuilder
npm run clear
rm -rf versioned_docs/
rm -f .docusaurus-generated-config.json
npm run build
```

## 🚀 Intégration CI/CD

Exemple pour GitHub Actions :

```yaml
name: Build Documentation

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0  # Important pour accéder à toutes les branches/tags
          
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build with all versions
        run: npm run build
        
      - name: Deploy
        run: npm run deploy
```

## 📞 Support

Pour toute question ou problème :
1. Vérifier ce README
2. Consulter les logs de build
3. Vérifier la configuration dans `versions.json`
4. Tester avec `npm run build:versions -- --product=nom --version=version`