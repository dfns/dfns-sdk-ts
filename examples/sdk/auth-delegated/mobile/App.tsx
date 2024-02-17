import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { AppContextProvider } from './hooks/useAppContext'
import { Stack } from './navigation/navigator'
import { Home } from './screens/Home'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { Wallets } from './screens/Wallets'

function App(): React.JSX.Element {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Registration" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Wallets" component={Wallets} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  )
}

export default App
