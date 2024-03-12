import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type StackParamList = {
  Home: undefined
  Registration: undefined
  Login: undefined
  Wallets: undefined
}

export const Stack = createNativeStackNavigator<StackParamList>()
