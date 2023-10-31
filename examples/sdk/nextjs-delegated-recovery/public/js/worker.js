function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer)
  return btoa(String.fromCharCode(...bytes))
}

function arrayBufferToBase64Url(buffer) {
  return arrayBufferToBase64(buffer)
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

function arrayBufferToHex(buffer) {
  const bytes = new Uint8Array(buffer)
  return [...new Uint8Array(buffer)]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('')
}

function base64ToArrayBuffer(base64) {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes.buffer
}

async function usernameToSalt(username) {
  const normalizedUsername = username.toLowerCase().trim()
  const usernameHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(normalizedUsername))
  return new Uint8Array(usernameHash)
}

function minimizeBigInt(value) {
  if (value.length === 0) {
    return value
  }
  const minValue = [0, ...value]
  for (let i = 0; i < minValue.length; ++i) {
    if (minValue[i] === 0) {
      continue
    }
    if (minValue[i] > 0x7f) {
      return minValue.slice(i-1)
    }
    return minValue.slice(i)
  }
  return new Uint8Array([0])
}

function rawSignatureToAns1(rawSignature) {
  if (rawSignature.length !== 64) {
    console.log(rawSignature.length)
    return new Uint8Array([0])
  }
  const r = rawSignature.slice(0, 32)
  const s = rawSignature.slice(32)

  const minR = minimizeBigInt(r)
  const minS = minimizeBigInt(s)

  return new Uint8Array([
    0x30,
    minR.length + minS.length + 4,
    0x02,
    minR.length,
    ...minR,
    0x02,
    minS.length,
    ...minS
  ])
}

async function generateSignature(encryptedPrivateKey, message, password, username, encoding='hex') {
  const salt = await usernameToSalt(username)
  const { key: base64Key, iv: base64Iv } = JSON.parse(atob(encryptedPrivateKey))
  const iv = base64ToArrayBuffer(base64Iv)
  const key = base64ToArrayBuffer(base64Key)

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  )
  const unwrappingKey = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['wrapKey', 'unwrapKey']
  )

  const privateKey = await crypto.subtle.unwrapKey(
    'pkcs8',
    key,
    unwrappingKey,
    {
      name: 'AES-GCM',
      iv: iv,
    },
    { name: 'ECDSA', namedCurve: 'P-256' },
    true,
    ['sign']
  )

  const signature = await crypto.subtle.sign(
    { name: 'ECDSA', hash: { name: 'SHA-256' } },
    privateKey,
    new TextEncoder().encode(message)
  )

  if (encoding === 'hex') {
    return arrayBufferToHex(rawSignatureToAns1(new Uint8Array(signature)))
  } else if (encoding === 'base64url') {
    return arrayBufferToBase64Url(rawSignatureToAns1(new Uint8Array(signature)))
  }
  throw new Error('encoding not supported.')
}

async function exportPublicKeyInPemFormat(key) {
  const exported = await crypto.subtle.exportKey('spki', key)
  const pem = `-----BEGIN PUBLIC KEY-----\n${arrayBufferToBase64(exported)}\n-----END PUBLIC KEY-----`
  return pem
}

async function generateEncryptedPrivateKeyAndPublicKey(password, username) {
  const salt = await usernameToSalt(username)
  const iv = crypto.getRandomValues(new Uint8Array(16))

  const keyPair = await crypto.subtle.generateKey(
    { name: 'ECDSA', namedCurve: 'P-256' },
    true,
    ['sign', 'verify']
  )

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  )

  const wrappingKey = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['wrapKey', 'unwrapKey']
  )

  const encryptedPrivateKey = await crypto.subtle.wrapKey('pkcs8', keyPair.privateKey, wrappingKey, {
    name: 'AES-GCM',
    iv,
  })
  const pemPublicKey = await exportPublicKeyInPemFormat(keyPair.publicKey)

  const privateKey = btoa(JSON.stringify({
    key: arrayBufferToBase64(encryptedPrivateKey),
    iv: arrayBufferToBase64(iv),
  }))

  return {
    encryptedPrivateKey: privateKey,
    pemPublicKey: pemPublicKey,
  }
}

const generateRecoveryKey = () => {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const uuid1 = crypto.randomUUID().replace(/-/g, '')
  const uuid2 = crypto.randomUUID().replace(/-/g, '')

  let password = ''
  for (let i = 0; i < uuid1.length; ++i) {
    const key = parseInt(uuid1[i], 16) + (parseInt(uuid2[i]) < 8 ? 0 : 16)
    password += alphabet[key]
  }
  return 'D1-' +
    password.substring(0, 6) + '-' +
    password.substring(6, 11) + '-' +
    password.substring(11, 16) + '-' +
    password.substring(16, 21) + '-' +
    password.substring(21, 26) + '-' +
    password.substring(26)
}

const generateRecoveryKeyCredential = async (username, clientData) => {
  const recoveryKey = generateRecoveryKey()
  const { encryptedPrivateKey, pemPublicKey } = await generateEncryptedPrivateKeyAndPublicKey(
    recoveryKey,
    username
  )

  const clientDataHash = arrayBufferToHex(
    await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientData))
  )
  const signature = await generateSignature(
    encryptedPrivateKey,
    JSON.stringify({
      clientDataHash: clientDataHash,
      publicKey: pemPublicKey,
    }),
    recoveryKey,
    username,
  )

  const attestationData = JSON.stringify({
    publicKey: pemPublicKey,
    signature: signature,
    algorithm: 'SHA256',
  })

  const privateKeyHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(encryptedPrivateKey))

  self.postMessage({
    type: 'encryptedPrivateKeyAndPublicKey',
    encryptedPrivateKey,
    attestationData,
    recoveryKey,
    credentialId: arrayBufferToBase64Url(privateKeyHash)
  })
}

self.addEventListener('message', async (event) => {
  try {
    switch (event.data.type) {
      case 'generateEncryptedPrivateKeyAndPublicKey': {
        const { username, clientData } = event.data
        await generateRecoveryKeyCredential(username, clientData)
        break
      }
      case 'generateSignature': {
        const { encryptedPrivateKey, message, recoveryKey, username } = event.data
        const signature = await generateSignature(
          encryptedPrivateKey,
          message,
          recoveryKey,
          username,
          'base64url'
        )
        self.postMessage({
          type: 'signature',
          signature,
        })
        break
      }
      case 'validateRecoveryKey': {
        const { encryptedPrivateKey, recoveryKey, username } = event.data
        const message = crypto.getRandomValues(new Uint8Array(64))
        await generateSignature(
          encryptedPrivateKey,
          message,
          recoveryKey,
          username
        )
        self.postMessage({
          type: 'recoveryKeyIsValid',
        })
        break
      }
    }
  } catch (e) {
    self.postMessage({
      type: 'error',
      error: e,
    })
  }
})
