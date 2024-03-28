import { PasskeysSigner } from '@dfns/sdk-react-native'
import React from 'react'
import { Button, GestureResponderEvent, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import Config from 'react-native-config'
import Markdown from 'react-native-markdown-display'

import { styles } from '../styles'

export function Register(): React.JSX.Element {
  const [username, setUsername] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)

  const register = async (event: GestureResponderEvent) => {
    try {
      setLoading(true)
      event.preventDefault()

      // Start delegated registration flow. Server needs to obtain the challenge with the appId
      // and appOrigin of the mobile application. For simplicity, they are included as part of
      // the request body. Alternatively, they can be sent as headers or with other approaches.
      const initRes = await fetch(`${Config.EXPRESS_API_URL!}/register/init`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: Config.DFNS_APP_ID!,
          username,
        }),
      })
      const challenge = await initRes.json()
      console.log(JSON.stringify(challenge, null, 2))

      // Create the new passkey using the challenge
      const passkeys = new PasskeysSigner()
      const attestation = await passkeys.create(challenge)
      console.log(JSON.stringify(attestation, null, 2))

      // Finish delegated registration
      const completeRes = await fetch(`${Config.EXPRESS_API_URL!}/register/complete`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appId: Config.DFNS_APP_ID!,
          signedChallenge: { firstFactorCredential: attestation },
          temporaryAuthenticationToken: challenge.temporaryAuthenticationToken,
        }),
      })

      setResponse(await completeRes.json())
      setError(undefined)
    } catch (error: any) {
      console.log(error)
      setResponse(undefined)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.background}></ScrollView>
      <View style={styles.section}>
        <Text>
          For this tutorial, you need to register a Dfns EndUser, and this is where the registration flow starts.
          However, in your final app, the flow may be different and the username might come from your internal system.
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Enter the email as the username you are registering, and hit the "Register User" button.</Text>
      </View>
      <View style={styles.section}>
        <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Choose a username" />
        <Button title="Register User" onPress={register} />
      </View>
      {!!loading && (
        <View style={styles.section}>
          <Text>registering ...</Text>
        </View>
      )}
      {!!response && (
        <View style={styles.section}>
          <Markdown>{`\`\`\`
${JSON.stringify(response, null, 2)}
\`\`\``}</Markdown>
        </View>
      )}
      {!!error && (
        <View style={styles.section}>
          <Markdown>{`\`\`\`
${JSON.stringify(error, null, 2)}
\`\`\``}</Markdown>
        </View>
      )}
    </SafeAreaView>
  )
}
