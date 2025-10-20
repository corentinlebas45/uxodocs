# Instructions Copilot - Migration Hugo vers Docusaurus

## Contexte du projet

Ce projet consiste à migrer deux documentations Hugo existantes vers Docusaurus :

1. **ARender Documentation** (`arondor-arender-documentation-125c2e7f2801/`)
2. **FlowerDocs** (`arondor-flower-website-4794f304768b/`)

## Architecture actuelle

### Sources Hugo à migrer

#### 1. ARender Documentation (`arondor-arender-documentation-125c2e7f2801/`)
- **Structure multilingue** : Fichiers avec suffixes `.en.md` et `.fr.md`
- **Contenu principal** dans `content/` :
  - `_index.en.md` / `_index.fr.md` (pages d'accueil)
  - `development/` (documentation développeur)
  - `features/` (fonctionnalités)
  - `guides/` (guides utilisateur avec sous-dossiers)
  - `installation/` (installation)
  - `learn/` (apprentissage)
  - `releases/` (notes de version)
  - `v4/` (documentation version 4)
  - `what-is-arender/` (présentation produit)

#### 2. FlowerDocs (`arondor-flower-website-4794f304768b/`)
- **Structure multilingue** : Dossiers séparés `content/english/` et `content/french/`
- **Configuration Hugo** : `config.toml` avec `defaultContentLanguage = "fr"`
- **Contenu principal** :
  - `documentation/` (APIs, concepts, config, connecteurs, install, learn)
  - `releases/` (notes de version par version)
  - `blog/` (articles de blog)

### Architecture cible Docusaurus

#### Configuration multilingue existante
- **Locale par défaut** : `fr` (français)
- **Locales supportées** : `['fr', 'en']`
- **Dossier i18n** : `i18n/en/` et `i18n/fr/`
- **Structure docs** : `docs/` avec sous-dossiers `arender/`, `fast2/`, `flower/`

## Instructions de migration

### 1. Adaptation du front matter Hugo vers Docusaurus

**Hugo front matter typique :**
```yaml
---
title: "Mon titre"
description: "Ma description"
weight: 10
layout: "single"
---
```

**Docusaurus front matter équivalent :**
```yaml
---
title: Mon titre
description: Ma description
sidebar_position: 10
---
```

### 2. Gestion multilingue

#### Pour ARender (fichiers .en.md/.fr.md)
- **Fichier français** : `guides/configuration.fr.md` → `docs/arender/guides/configuration.md` (version française par défaut)
- **Fichier anglais** : `guides/configuration.en.md` → `i18n/en/docusaurus-plugin-content-docs/current/arender/guides/configuration.md`

#### Pour FlowerDocs (dossiers english/french)
- **Contenu français** : `content/french/documentation/apis/` → `docs/flower/apis/`
- **Contenu anglais** : `content/english/documentation/apis/` → `i18n/en/docusaurus-plugin-content-docs/current/flower/apis/`

### 3. Structure cible dans docs/

```
docs/
├── arender/          # Migration de arondor-arender-documentation-125c2e7f2801/content/
│   ├── index.md      # _index.fr.md
│   ├── development/
│   ├── features/
│   ├── guides/
│   ├── installation/
│   ├── learn/
│   ├── releases/
│   ├── v4/
│   └── what-is-arender/
└── flower/           # Migration de arondor-flower-website-4794f304768b/content/french/
    ├── index.md      # documentation/_index.md
    ├── apis/
    ├── concepts/
    ├── config/
    ├── connecteurs/
    ├── install/
    ├── learn/
    └── releases/
```

### 4. Traductions anglaises

```
i18n/en/docusaurus-plugin-content-docs/current/
├── arender/          # Contenu de arondor-arender-documentation-125c2e7f2801/content/*.en.md
└── flower/           # Contenu de arondor-flower-website-4794f304768b/content/english/documentation/
```

### 5. Adaptations spécifiques

#### Liens internes Hugo → Docusaurus
- Hugo : `[texte](broken-link.md)`
- Docusaurus : `[texte](./autre-page.md)` ou `[texte](../autre-dossier/page.md)`

#### Shortcodes Hugo à convertir
- Shortcodes personnalisés → composants MDX si nécessaire

#### Images et assets
- Docusaurus : `![alt](/img/image.png)` (copier dans `static/img/`)

### 6. Ordre des sidebars

Utiliser `sidebar_position` dans le front matter pour maintenir l'ordre :
```yaml
---
title: Installation
sidebar_position: 1
---
```

### 7. Gestion des versions (releases)

Pour les notes de version :
- Créer une structure chronologique dans `docs/arender/releases/` et `docs/flower/releases/`
- Maintenir les liens entre versions
- Adapter les chemins des assets (images, fichiers)

## Recommandations

1. **Préserver la structure logique** des documentations Hugo
2. **Maintenir la cohérence** des liens internes
3. **Vérifier les traductions** entre versions française et anglaise
4. **Tester les liens** après migration
5. **Conserver les métadonnées** importantes (dates, auteurs)
6. **Adapter les images** et assets statiques

## Fichiers de configuration à adapter

- `sidebars.ts` : Ajouter les sections arender et flower
- `docusaurus.config.ts` : Configuration déjà prête pour le multilingue
- `package.json` : Dépendances déjà configurées

Cette migration permettra de centraliser toutes les documentations dans un seul site Docusaurus multilingue, améliorer l'expérience utilisateur et simplifier la maintenance.
