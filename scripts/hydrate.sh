#!/usr/bin/env bash
set -euo pipefail

# Produits à gérer
PRODUCTS=("fast2" "flower" "arender")

# NOTE: Ne pas nettoyer docs/, on copie seulement les versions
# Les dossiers versioned_docs sont conservés pour référence mais non utilisés par Docusaurus

# Récupère toutes les branches distantes de versions
git fetch --all --prune

# Petite fonction pour hydrater un produit donné
hydrate_product() {
  local id="$1"
  # liste des branches du type id/v*
  mapfile -t branches < <(git ls-remote --heads origin "${id}/v*" | awk '{print $2}' | sed 's#refs/heads/##')
  if [ "${#branches[@]}" -eq 0 ]; then
    echo "No version branches for $id"
    return
  fi

  for br in "${branches[@]}"; do
    ver="${br##*/}"                              # ex: fast2/v2025 -> v2025
    workdir=".cache/worktrees/${br}"
    mkdir -p "$workdir"
    # crée un worktree si pas déjà présent
    if [ ! -d "$workdir/.git" ]; then
      git worktree add --detach "$workdir" "origin/${br}"
    fi

    src="$workdir/docs/$id"
    dst="docs/$id/$ver"
    if [ -d "$src" ]; then
      mkdir -p "$dst"
      rsync -a --delete "$src/" "$dst/"
      echo "Hydrated $id/$ver from $br"
    else
      echo "WARN: $src not found in $br"
    fi
  done
}

for id in "${PRODUCTS[@]}"; do
  hydrate_product "$id"
done
