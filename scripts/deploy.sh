#!/usr/bin/env bash
# Publica la landing de ESISCOM en Hostinger (esiscom.com)
# Uso: npm run deploy
set -euo pipefail

SSH_HOST="${SSH_HOST:-191.96.56.28}"
SSH_PORT="${SSH_PORT:-65002}"
SSH_USER="${SSH_USER:-u371508174}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
REMOTE_DIR="${REMOTE_DIR:-domains/esiscom.com/public_html/}"

if [ ! -f "$SSH_KEY" ]; then
  echo "❌ No existe la llave SSH: $SSH_KEY" >&2
  exit 1
fi

echo "▸ Compilando…"
npm run build

echo "▸ Subiendo dist/ a $SSH_USER@$SSH_HOST:$REMOTE_DIR"
rsync -az --exclude='.well-known/' \
  -e "ssh -i \"$SSH_KEY\" -p $SSH_PORT -o IdentitiesOnly=yes" \
  dist/ "$SSH_USER@$SSH_HOST:$REMOTE_DIR"

echo "✅ Publicado en https://esiscom.com"
