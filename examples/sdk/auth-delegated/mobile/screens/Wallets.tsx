import { PasskeysSigner } from '@dfns/sdk-react-native'
import React, { useEffect } from 'react'
import { Button, GestureResponderEvent, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Config from 'react-native-config'
import Markdown from 'react-native-markdown-display'

import { useAppContext } from '../hooks/useAppContext'
import { styles } from '../styles'

export function Wallets(): React.JSX.Element {
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
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

      setResponse(await res.json())
      setError(undefined)
    } catch (err: any) {
      console.log(error)
      setResponse(undefined)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    listWallets()
  }, [])

  const create = async (event: GestureResponderEvent) => {
    try {
      setLoading(true)
      event.preventDefault()

      const initRes = await fetch(`${Config.EXPRESS_API_URL!}/wallets/new/init`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: Config.DFNS_APP_ID!,
          authToken,
        }),
      })

      const { requestBody, challenge } = await initRes.json()
      console.log(JSON.stringify(challenge, null, 2))

      // Sign the challenge to authorize the create wallet action
      const passkey = new PasskeysSigner({
        rpId: Config.DFNS_APP_RPID!,
      })
      const assertion = await passkey.sign(challenge.challenge, challenge.allowCredentials)
      console.log(JSON.stringify(assertion, null, 2))

      await fetch(`${Config.EXPRESS_API_URL!}/wallets/new/complete`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: Config.DFNS_APP_ID!,
          authToken,
          requestBody,
          signedChallenge: {
            challengeIdentifier: challenge.challengeIdentifier,
            firstFactor: assertion,
          },
        }),
      })

      await listWallets()
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
            Listing the wallets only needs the readonly auth token and do not use Passkeys signing. You won't be prompted
            to use the passkey on screen load.
          </Text>
        </View>
        {!!response && (
          <View style={styles.section}>
            <Markdown>{`\`\`\`
${JSON.stringify(response, null, 2)}
\`\`\``}</Markdown>
          </View>
        )}
        <View style={styles.section}>
          <Text>
            Creating a new wallet will require the end user to sign a challenge in order to complete the request. You
            will see the Passkeys prompt show up after pressing the "Create New Wallet" button. After the action is
            authorized, a new wallet is created for the logged in end user.
          </Text>
        </View>
        <View style={styles.section}>
          <Button title="Create New Wallet" onPress={create} />
        </View>
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
