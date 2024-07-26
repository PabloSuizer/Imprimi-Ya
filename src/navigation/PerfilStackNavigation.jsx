import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Perfil from "../screens/Perfil"

const Stack = createNativeStackNavigator()

const PerfilStackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="user" component={Perfil}/>
    </Stack.Navigator>
  )
}

export default PerfilStackNavigation