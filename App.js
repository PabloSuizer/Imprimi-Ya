import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text } from "react-native";
import Navigator from "./src/navigation/Navigator";




export default function App() {


  return (
    <>
      <SafeAreaView style={styles.container}>
          <Navigator/>
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
