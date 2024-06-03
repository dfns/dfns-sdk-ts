import { WebAuthnSigner } from '@dfns/sdk-browser'
import React from 'react'
import { Link } from 'react-router-dom'

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

import '../globals.css'
import { dfnsApi } from '../api'
import { useAppContext } from '../hooks/useAppContext';
import { DfnsError, UserRegistrationChallenge } from '@dfns/sdk';

export default function Register() {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)
  const { setAuthToken } = useAppContext()

  const initRegistration = async (idToken: string) => {
    const challenge = await dfnsApi(undefined).auth.createSocialRegistrationChallenge({
      body: {
        socialLoginProviderKind: "Oidc",
        idToken
      },
    })

    return challenge
  }

  const finishRegistration = async (challenge: UserRegistrationChallenge) => {
    // Webauthn flow
    // Create the new webauthn credential using the challenge
    const webauthn = new WebAuthnSigner()
    const attestation = await webauthn.create(challenge)

    // We set the temporary authentication token to complete the registration
    const result = await dfnsApi(challenge.temporaryAuthenticationToken).auth.registerEndUser({
      body: {
        firstFactorCredential: attestation,
        wallets: [{ network: 'EthereumSepolia' }],
      },
    })

    return [result, result.authentication.token]
  }

  const socialLogin = async (idToken: string) => {
    try {
      const result = await dfnsApi(undefined).auth.socialLogin({
        body: {
          socialLoginProviderKind: "Oidc",
          idToken
        },
      })
      return [result, result.token]
    } catch (error: any) {
      if (error instanceof DfnsError && error.httpStatus === 401) {
        console.log("User does not exist, using the registering route...")
        return undefined
      }
      throw error
    }
  }

  const registerUser = async (idToken: string) => {
    setLoading(true)

    const loginResult = await socialLogin(idToken)

    let result: any
    let authToken: string

    // If login was sucessful, we directly get the authToken, otherwise we
    // register the user
    if (loginResult) {
      const [_result, _authToken] = loginResult
      result = _result
      authToken = _authToken as string
    } else {
      const challenge = await initRegistration(idToken)
      const [_result, _authToken] = await finishRegistration(challenge)
      result = _result
      authToken = _authToken as string
    }

    setAuthToken(authToken)

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
      <h2>Social Registration/Login</h2>
      <p>
        After clicking on the "Continue with Google" button, the browser will receive a JWT from Google. We will first try to login the user with it.
        If it is unsuccesful, we will trigger the registration of the user.
      </p>
      <p>
        After registration, the new end user will have an Ethereum testnet wallet and assigned the system permission,
        `DfnsDefaultEndUserAccess`, that grants the end user full access to their wallets. Below will appear the return payload
        from the server containing the wallet information.
      </p>
      <p>
        If the user was already registered we will just return the authentication token.
      </p>
      <GoogleLogin shape="circle" size="medium" text="continue_with" onSuccess={googleLoginSuccessful} />


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
