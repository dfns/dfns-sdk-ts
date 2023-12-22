#!/bin/bash

set -euo pipefail

version=$1

npm version --no-git-tag-version \
    --workspace @dfns/lib-bitcoinjs \
    --workspace @dfns/lib-ethersjs5 \
    --workspace @dfns/lib-ethersjs6 \
    --workspace @dfns/lib-solana \
    --workspace @dfns/lib-taquito \
    --workspace @dfns/lib-tron \
    --workspace @dfns/lib-vechain \
    --workspace @dfns/lib-viem \
    --workspace @dfns/lib-xrpl \
    --workspace @dfns/sdk \
    --workspace @dfns/sdk-keyexport-utils \
    --workspace @dfns/sdk-keyimport-utils \
    --workspace @dfns/sdk-keysigner \
    --workspace @dfns/sdk-webauthn \
    --include-workspace-root "$version"

npm run cb:all
