import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Markdown from 'react-native-markdown-display'

import { useAppContext } from '../hooks/useAppContext'
import { StackParamList } from '../navigation/navigator'
import { styles } from '../styles'

const introText = `
## Introduction
This tutorial app demonstrates how to use Dfns SDK in the following configuration:
- You have a server and a mobile application.
- You are not a custodian, and your customers own their wallets.
- Your customers will use Passkeys credentials to authenticate with Dfns.
- Your client applications communicates with your server, and does not call the Dfns API directly.
- Your server communicates with the Dfns API using a service account.
`

const registerText = `
## Step 1 - Delegated Registration

Your customers, either new or existing, must register with Dfns first and have credential(s) in our system in order to own and be able to interact with their blockchain wallets.

The delegated registration flow allows you to initiate and and complete the registration process on your customers behalf, without them being aware that the wallets infrastructure is powered by Dfns, i.e. they will not receive an registration email from Dfns directly unlike the normal registration process for your employees. Their Passkeys credentials are still completely under their control.
`

const registerCode = `
Find relevant code in the following files
- \`./mobile/screens/Register.tsx\`, client side
- \`./server/src/handlers/register.ts\`, server side
`

const loginText = `
## Step 2 - Delegated Login

The delegated signing flow does not need the end user sign with the passkey credential. The login can be performed on the server side transparent to the end user and obtain a readonly auth token. For example, your server can choose to automatically login the end user upon the completion of delegated registration. In this tutorial, this step is shown as explicit in order to more clearly demonstrate how the interaction works.
`

const loginCode = `
Find relevant code in the following files
- \`./mobile/screens/Login.tsx\`, client side
- \`./server/src/handlers/login.ts\`, server side
`

const walletsText = `
## Step 3 - Wallets

Once logged in, your end user can retrieve the list of wallets he owns, and create new ones.
`

const walletsCode = `
Find relevant code in the following files
- \`./mobile/screens/Wallets.tsx\`, client side
- \`./server/src/handlers/wallets.ts\`, server side
`

export function Home({ navigation }: NativeStackScreenProps<StackParamList, 'Home'>): React.JSX.Element {
  const { authToken } = useAppContext()

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.background}>
        <View style={{ marginTop: 16, alignItems: 'center' }}>
          <Image style={{ width: 50, height: 50 }} source={require('./logo.png')} />
          <Text style={{ fontSize: 32, fontWeight: '700' }}>Dfns Tutorial</Text>
        </View>
        <View style={styles.section}>
          <Markdown>{introText}</Markdown>
        </View>
        <View style={styles.section}>
          <Markdown>{registerText}</Markdown>
          <Button title="Go to Delegated Registration" onPress={() => navigation.navigate('Registration')} />
          <Markdown>{registerCode}</Markdown>
        </View>
        <View style={styles.section}>
          <Markdown>{loginText}</Markdown>
          <Button title="Go to Delegated Login" onPress={() => navigation.navigate('Login')} />
          <Markdown>{loginCode}</Markdown>
        </View>
        <View style={styles.section}>
          <Markdown>{walletsText}</Markdown>
          {authToken ? (
            <Button title="Go to Wallets" onPress={() => navigation.navigate('Wallets')} />
          ) : (
            <Text style={{ textAlign: 'center', fontSize: 15, color: 'red' }}>
              ⚠ You need to complete step 1 and 2 first
            </Text>
          )}
          <Markdown>{walletsCode}</Markdown>
        </View>
        <View style={{ marginTop: 16, marginBottom: 16, alignItems: 'center' }}>
          <Text style={{ fontSize: 32, fontWeight: '700' }}>The end 🎉</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
