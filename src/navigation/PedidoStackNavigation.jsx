import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pedidos from '../screens/Pedidos'

const Stack = createNativeStackNavigator()


const PedidoStackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="Orden" component={Pedidos}/>
    </Stack.Navigator>
  )
}

export default PedidoStackNavigation