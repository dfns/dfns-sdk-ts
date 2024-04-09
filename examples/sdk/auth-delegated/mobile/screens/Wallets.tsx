import { PasskeysSigner } from '@dfns/sdk-react-native'
import React, { useEffect } from 'react'
import { Button, GestureResponderEvent, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import Config from 'react-native-config'
import Markdown from 'react-native-markdown-display'

import { useAppContext } from '../hooks/useAppContext'
import { styles } from '../styles'

export function Wallets(): React.JSX.Element {
  const [message, setMessage] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [wallets, setWallets] = React.useState<any>(undefined)
  const [sighash, setSighash] = React.useState<any>(undefined)
  const [error, setError] = React.useState(undefined)

  const { authToken } = useAppContext()

  const listWallets = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${Config.EXPRESS_API_URL!}/wallets/list`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: Config.DFNS_APP_ID!,
          authToken,
        }),
      })

      setWallets(await res.json())
      setError(undefined)
    } catch (error: any) {
      console.log(error)
      setWallets(undefined)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    listWallets()
  }, [])

  const signMessage = async (event: GestureResponderEvent) => {
    try {
      setLoading(true)
      event.preventDefault()

      const walletId = wallets.items[0].id

      const initRes = await fetch(`${Config.EXPRESS_API_URL!}/wallets/signatures/init`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: Config.DFNS_APP_ID!,
          authToken,
          walletId,
          message,
        }),
      })

      const { requestBody, challenge } = await initRes.json()
      console.log(JSON.stringify(challenge, null, 2))

      // Sign the challenge to authorize the create wallet action
      const passkeys = new PasskeysSigner()
      const assertion = await passkeys.sign(challenge)
      console.log(JSON.stringify(assertion, null, 2))

      const completeRes = await fetch(`${Config.EXPRESS_API_URL!}/wallets/signatures/complete`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: Config.DFNS_APP_ID!,
          authToken,
          walletId,
          requestBody,
          signedChallenge: {
            challengeIdentifier: challenge.challengeIdentifier,
            firstFactor: assertion,
          },
        }),
      })

      setSighash(await completeRes.json())
      setError(undefined)
    } catch (error: any) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.background}>
        <View style={styles.section}>
          <Text>
            The Ethereum testnet wallet created for the end user during registration is listed below. Listing wallets
            only needs the readonly auth token. End users won't be prompted to use their Passkeys credentials.
          </Text>
        </View>
        {!!wallets && (
          <View style={styles.section}>
            <Markdown>{`\`\`\`
${JSON.stringify(wallets, null, 2)}
\`\`\``}</Markdown>
          </View>
        )}
        <View style={styles.section}>
          <Text>
            Use wallets to broadcast transactions will require the end users to sign a challenge each time to authorize
            the action. For this tutorial, because new wallets do not have any native tokens to pay for gas fees, we
            won't be able to broadcast any transactions to chain. Instead, we will sign an arbitrary message that can be
            used as proof the end user is the owner of the private key secured by Dfns.
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            Enter a message in the input box and press the "Sign Message" button. You will see a WebAuthn prompt asking
            for authorization to perform the action. Once granted, the tutorial makes a request to Dfns MPC signers and
            gets a signature hash. Optionally you can use etherscan to verify this signature hash matches the wallet
            address.
          </Text>
        </View>
        <View style={styles.section}>
          <TextInput style={styles.input} onChangeText={setMessage} value={message} placeholder="Enter your message" />
          <Button title="Sign Message" onPress={signMessage} />
        </View>
        {!!sighash && (
          <View style={styles.section}>
            <Markdown>{`\`\`\`
${JSON.stringify(sighash, null, 2)}
\`\`\``}</Markdown>
          </View>
        )}
        {!!loading && (
          <View style={styles.section}>
            <Text>loading ...</Text>
          </View>
        )}
        {!!error && (
          <View style={styles.section}>
            <Markdown>{`\`\`\`
${JSON.stringify(error, null, 2)}
\`\`\``}</Markdown>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
