import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'

import imprentas from "../data/imprentas.json"


const Home = ({navigation}) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { imprentas: item })}>
      <Image source={{ uri: item.images }} style={styles.image} />
      <Text style={styles.title}>{item.nombreImprenta}</Text>
      <Text style={styles.description}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <FlatList
        data={imprentas}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  card: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  description: {
    fontSize: 14,
    marginTop: 5
  }
})