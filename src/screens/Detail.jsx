import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Chips from '../components/Chips';
import { useDispatch, useSelector } from 'react-redux';
import { setBindingType, setFaceType, setInkType, setPaperType } from '../fetures/Chips/ChipSlice';




const Detail = ({ route }) => {
    const { imprentas } = route.params;

    const dispatch = useDispatch();
    const selections = useSelector(state => state.selections);


    const handleSelect = (type, value) => {
        switch (type) {
            case 'paper':
                dispatch(setPaperType(value));
                console.log(type, value)
                break;
            case 'ink':
                dispatch(setInkType(value));
                break;
            case 'face':
                dispatch(setFaceType(value));
                break;
            case 'binding':
                dispatch(setBindingType(value));
                break;
            default:
                break;
        }
    };

    const handlePrint = () => {
        console.log("Imprimiendo informacion de la imprenta: ${imprentas.nombreImprenta}");
        //Aca va la logica para imprimir
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: imprentas.images }} style={styles.image} />
            <Text style={styles.title}>{imprentas.nombreImprenta}</Text>
            <View style={styles.iconTextRow}></View>
            <Text style={styles.description}><Ionicons name="location-outline" size={20} color="black" /> {imprentas.location}</Text>
            <Text style={styles.description}><AntDesign name="clockcircleo" size={20} color="black" />  {imprentas.hour}</Text>
            <Text style={styles.description}><FontAwesome5 name="phone-alt" size={20} color="black" />  {imprentas.phone} </Text>
            <Text>Tipo de Papel</Text>
            <View style={styles.row}>
                {['Común', 'Obra', 'Ilustración', 'Fotográfico'].map(type => (
                    <Chips
                        key={type}
                        label={type}
                        selected={selections.paperType === type}
                        onPress={() => handleSelect('paper', type)}
                    />
                ))}
            </View>
            <Text>Tipo de Tinta</Text>
            <View style={styles.row}>
                {['B/N chorro a tinta', 'B/N lazer', 'Color tinta', 'Color lazer'].map(type => (
                    <Chips
                        key={type}
                        label={type}
                        selected={selections.inkType === type}
                        onPress={() => handleSelect('ink', type)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePrint}>
                <Text style={styles.buttonText}> Imprimir</Text>
            </TouchableOpacity>

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
        marginTop: 10,
        alignItems: 'center',
    },
    button: {
        marginTop: 27,
        backgroundColor: "#ffa500",
        padding: 20,
        borderRadius: 23,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }

})