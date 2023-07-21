#!/bin/bash

set -euo pipefail

declare -a packages=(
    "@dfns/sdk"
    "@dfns/sdk-keysigner"
    "@dfns/sdk-webauthn"
    "@dfns/ethersjs-wallet"
)

echo "Will deploy these built versions:"
echo ""

for packageName in "${packages[@]}"; do
    cd dist/"${packageName}"
    version=$(jq -r '.version' package.json)
    echo "${packageName} ${version}"
    cd - >/dev/null
done

echo ""
read -p "Are you sure? (y/n) " -n 1 -r

echo # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]; then
    for packageName in "${packages[@]}"; do
        cd dist/"${packageName}"
        npm publish --workspaces=false
        cd - >/dev/null
    done
fi
