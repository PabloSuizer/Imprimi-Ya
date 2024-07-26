import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigation from './HomeStackNavigation'
import PedidoStackNavigation from './PedidoStackNavigation'
import PerfilStackNavigation from './PerfilStackNavigation'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator() 

const BottonTapNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name= "Inicio" 
            component={HomeStackNavigation}
            options={{
                tabBarIcon: ({focused}) =>{
                    return(
                        <View>
                            <Feather name="home" size={24} color={focused ? "black": color="grey"} />
                        </View>
                    )
                }
            }}
        />
        <Tab.Screen
            name= "Pedidos" 
            component={PedidoStackNavigation}
            options={{
                tabBarIcon: ({focused}) =>{
                    return(
                        <View>
                           <Octicons name="list-unordered" size={24} color={focused ? "black": color="grey"} />
                        </View>
                    )
                }
            }}
        />
        <Tab.Screen
            name= "Perfil" 
            component={PerfilStackNavigation}
            options={{
                tabBarIcon: ({focused}) =>{
                    return(
                        <View>
                            <FontAwesome5 name="user" size={24} color={focused ? "black": color="grey"} />
                        </View>
                    )
                }
            }}
        />
    </Tab.Navigator>
  )
}

export default BottonTapNavigation

const styles = StyleSheet.create({})