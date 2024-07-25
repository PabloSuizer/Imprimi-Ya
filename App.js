import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./src/screens/Home"
import Detail from "./src/screens/Detail";



const Stack = createNativeStackNavigator()
export default function App() {


  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Detail" component={Detail}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //marginTop: 60,
    flex: 1,
    //alignItems: "center",
  },
});
