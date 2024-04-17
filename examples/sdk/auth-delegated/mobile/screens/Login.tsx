import React from 'react'
import { Button, GestureResponderEvent, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import Config from 'react-native-config'
import Markdown from 'react-native-markdown-display'

import { useAppContext } from '../hooks/useAppContext'
import { styles } from '../styles'

export function Login(): React.JSX.Element {
  const [username, setUsername] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [response, setResponse] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)

  const { setAuthToken } = useAppContext()

  const login = async (event: GestureResponderEvent) => {
    try {
      setLoading(true)
      event.preventDefault()

      // start delegated registration flow and obtain a challenge
      const loginRes = await fetch(`${Config.EXPRESS_API_URL!}/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username,
        }),
      })

      const body = await loginRes.json()

      setResponse(body)
      setError(undefined)
      setAuthToken(body.token)
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
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.background}>
        <View style={styles.section}>
          <Text>
            For this tutorial, the delegated login flow is started on the client side by pressing the "Login EndUser"
            button. A request is sent to the server and a readonly auth token is returned in the response. This flow
            does not need users to sign with the Passkeys crendetial.
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            This auth token is readonly and needs to be cached and passed along with all requests interacting with the
            Dfns API. To clearly demonstrate all the necessary components for each step, this example will cache the
            auth token in the application context and send it back with every sequently request to the server. You
            should however choose a more secure caching method.
          </Text>
        </View>
        <View style={styles.section}>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter the username"
          />
          <Button title="Login EndUser" onPress={login} />
        </View>
        {!!loading && (
          <View style={styles.section}>
            <Text>login ...</Text>
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
      </ScrollView>
    </SafeAreaView>
  )
}
