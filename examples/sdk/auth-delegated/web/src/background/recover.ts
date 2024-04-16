/* eslint-disable no-restricted-globals */

import { handleRecoveryKeySignerMessage } from '@dfns/sdk-browser'

self.onmessage = handleRecoveryKeySignerMessage

export {}
