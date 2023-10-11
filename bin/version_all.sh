#!/bin/bash

set -euo pipefail

version=$1

npm version --no-git-tag-version \
    --workspace @dfns/sdk \
    --workspace @dfns/sdk-keysigner \
    --workspace @dfns/sdk-webauthn \
    --workspace @dfns/lib-ethersjs5 \
    --workspace @dfns/lib-ethersjs6 \
    --workspace @dfns/lib-solana \
    --workspace @dfns/lib-vechain \
    --workspace @dfns/sdk-keyimport-utils \
    --include-workspace-root "$version"

npm run cb:all
