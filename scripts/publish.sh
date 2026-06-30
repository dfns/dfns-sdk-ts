#!/bin/bash

set -euo pipefail

tag=${1:-}

npm run cb:all

packages=(
    "@dfns/lib-algorand"
    "@dfns/lib-aptos"
    "@dfns/lib-bitcoinjs"
    "@dfns/lib-concordium"
    "@dfns/lib-cosmjs"
    "@dfns/lib-ethersjs5"
    "@dfns/lib-ethersjs6"
    "@dfns/lib-hedera"
    "@dfns/lib-iota"
    "@dfns/lib-kaspa"
    "@dfns/lib-meshsdk"
    "@dfns/lib-movement"
    "@dfns/lib-near"
    "@dfns/lib-polkadot"
    "@dfns/lib-polymesh"
    "@dfns/lib-solana"
    "@dfns/lib-stellar"
    "@dfns/lib-sui"
    "@dfns/lib-taquito"
    "@dfns/lib-ton"
    "@dfns/lib-tron"
    "@dfns/lib-vechain"
    "@dfns/lib-viem"
    "@dfns/lib-xrpl"
    "@dfns/sdk"
    "@dfns/sdk-awskmssigner"
    "@dfns/sdk-browser"
    "@dfns/sdk-keyexport-utils-nodejs"
    "@dfns/sdk-keyexport-utils-bundler"
    "@dfns/sdk-keyimport-utils-nodejs"
    "@dfns/sdk-keyimport-utils-bundler"
    "@dfns/sdk-keysigner"
    "@dfns/sdk-react-native"
)

for packageName in "${packages[@]}"; do
    cd dist/"${packageName}"
    version=$(node -p "require('./package.json').version")
    if npm view "${packageName}@${version}" version >/dev/null 2>&1; then
        echo "Skipping ${packageName}@${version} (already published)"
        cd - >/dev/null
        continue
    fi
    echo "Publishing ${packageName}@${version}..."
    npm publish --workspaces=false --access public ${tag:+--tag "$tag"}
    cd - >/dev/null
done
