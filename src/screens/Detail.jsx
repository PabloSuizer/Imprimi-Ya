import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const Detail = ({ route }) => {
    const { imprentas } = route.params;

    const handlePrint = () => {
        console.log("Imprimiendo informacion de la imprenta: ${imprentas.nombreImprenta}");
        //Aca va la logica para imprimir
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: imprentas.images }} style={styles.image} />
            <Text style={styles.title}>{imprentas.nombreImprenta}</Text>
            <Text style={styles.description}>{imprentas.location}</Text>
            <Text style={styles.description}>{imprentas.hour}</Text>
            <Text style={styles.description}>{imprentas.phone}</Text>
            <Button title="Imprimir" onPress={handlePrint} />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20
    },
    description: {
        fontSize: 16,
        marginTop: 10
    }
})