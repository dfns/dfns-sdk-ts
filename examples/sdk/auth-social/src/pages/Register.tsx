import { WebAuthnSigner } from '@dfns/sdk-browser'
import React from 'react'
import { Link } from 'react-router-dom'

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

import '../globals.css'
import { dfnsApi, setAuthToken } from '../api'
import { useAppContext } from '../hooks/useAppContext';
import { DfnsError, UserRegistrationChallenge } from '@dfns/sdk';

export default function Register() {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)
  const { setAuthToken: setAuthTokenHook } = useAppContext()

  const initRegistration = async (idToken: string) => {
    try {
      const challenge = await dfnsApi().auth.createSocialRegistrationChallenge({
        body: {
          socialLoginProviderKind: "Oidc",
          idToken
        },
      })

      return challenge
    } catch (error: any) {
      if (error instanceof DfnsError && error.httpStatus === 401) {
        console.log("Already registered, using the logging route...")
        return false
      }
      throw error
    }
  }

  const finishRegistration = async (challenge: UserRegistrationChallenge) => {
    // Webauthn flow
    // Create the new webauthn credential using the challenge
    const webauthn = new WebAuthnSigner()
    const attestation = await webauthn.create(challenge)

    // We set the temporary authentication token to complete the registration
    setAuthToken(challenge.temporaryAuthenticationToken)

    const result = await dfnsApi().auth.registerEndUser({
      body: {
        firstFactorCredential: attestation,
        wallets: [{ network: 'EthereumSepolia' }],
      },
    })

    return [result, result.authentication.token]
  }

  const socialLogin = async (idToken: string) => {
    const result = await dfnsApi().auth.socialLogin({
      body: {
        socialLoginProviderKind: "Oidc",
        idToken
      },
    })
    return [result, result.token]
  }

  const registerUser = async (idToken: string) => {
    setLoading(true)

    const challenge = await initRegistration(idToken)

    let result: any
    let authToken: string

    if (challenge === false) {
      const [_result, _authToken] = await socialLogin(idToken)
      result = _result
      authToken = _authToken as string
    } else {
      const [_result, _authToken] = await finishRegistration(challenge)
      result = _result
      authToken = _authToken as string
    }

    setAuthToken(authToken)
    setAuthTokenHook(authToken)

    setResponse(result)
    setError(undefined)
    setLoading(false)
  }


  const googleLoginSuccessful = (response: CredentialResponse) => {
    if (response.credential !== undefined) {
      registerUser(response.credential)
    }
  };

  return (
    <div className="w-full">
      <h2>Social Registration</h2>
      <p>
        For this tutorial, you will register a Dfns EndUser.
      </p>
      <p>
        After registration, the new end user will have an Ethereum testnet wallet and assigned the system permission,
        `DfnsDefaultEndUserAccess`, that grants the end user full access to their wallets.
      </p>
      <GoogleLogin onSuccess={googleLoginSuccessful} />


      {!!loading && <span>registering ...</span>}

      {!!response && (
        <pre className="p-4 drop-shadow-lg mt-2 overflow-x-scroll">{JSON.stringify(response, null, 2)}</pre>
      )}

      {!!error && <div className="text-red-700">{JSON.stringify(error, null, 2)}</div>}

      <p>
        <Link to="/" className="btn no-underline">
          ← Back to main page
        </Link>
      </p>
    </div>
  )
}
