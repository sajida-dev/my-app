import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';

const url = require("../../assets/a.jpg")
const AddStatusCard = () => {
    return (
        <TouchableOpacity style={styles.cardBody}>
            <Image source={url} style={styles.profile} />
            <Feather name="plus" size={13} color="black" style={styles.icon} />
            <Text style={styles.title}>Add Status</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cardBody: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3',
        width: 75,
        height: 140,
        backgroundColor: 'gray',
        borderRadius: 20,
        marginHorizontal: 3,
        position: 'relative'
    },
    icon: {
        backgroundColor: 'rgb(16, 196, 3)',
        borderWidth: 2,
        borderRadius: 10,
        position: 'absolute',
        borderColor: 'rgb(9, 108, 2)',
        top: 30,
        left: 30,
    },
    profile: {
        width: 35,
        height: 35,
        borderRadius: 25,
        margin: 5
    },
    title: {
        fontSize: 11,
        fontWeight: '700',
        marginHorizontal: 10,
        color: 'white',
        marginBottom: 5
    }
})
export { AddStatusCard }