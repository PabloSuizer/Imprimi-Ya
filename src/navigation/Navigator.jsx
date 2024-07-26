import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigation from './HomeStackNavigation'
import BottonTapNavigation from './BottonTapNavigation'

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigation/> */}
      <BottonTapNavigation/>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})