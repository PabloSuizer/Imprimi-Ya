import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store";
;



export default function App() {


  return (
    <>
      <SafeAreaView style={styles.container}>
        <Provider store = {store}>
          <Navigator/>
        </Provider>
          
        
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
