#!/bin/bash

set -euo pipefail

version=$1

npm version --no-git-tag-version \
    --workspace @dfns/lib-algorand \
    --workspace @dfns/lib-bitcoinjs \
    --workspace @dfns/lib-meshsdk \
    --workspace @dfns/lib-ethersjs5 \
    --workspace @dfns/lib-ethersjs6 \
    --workspace @dfns/lib-polkadot \
    --workspace @dfns/lib-solana \
    --workspace @dfns/lib-stellar \
    --workspace @dfns/lib-taquito \
    --workspace @dfns/lib-tron \
    --workspace @dfns/lib-vechain \
    --workspace @dfns/lib-viem \
    --workspace @dfns/lib-xrpl \
    --workspace @dfns/sdk \
    --workspace @dfns/sdk-awskmssigner \
    --workspace @dfns/sdk-browser \
    --workspace @dfns/sdk-keyexport-utils-nodejs \
    --workspace @dfns/sdk-keyexport-utils-bundler \
    --workspace @dfns/sdk-keyimport-utils-nodejs \
    --workspace @dfns/sdk-keyimport-utils-bundler \
    --workspace @dfns/sdk-keysigner \
    --workspace @dfns/sdk-react-native \
    --include-workspace-root "$version"

npm run cb:all
