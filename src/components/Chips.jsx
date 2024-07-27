import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Chips = ({ label, selected, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.chip, selected ? styles.selectedChip : null]}
            onPress={onPress}
        >
            <Text style={selected ? styles.selectedText : null}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Chips

const styles = StyleSheet.create({
    chip: {
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
    },
    selectedChip: {
        backgroundColor: '#ff0',
        borderColor: '#ffa500',
    },
    selectedText: {
        color: '#000',
    },
})