import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ title }) => {
    const verifyEmail = () => {
        Alert.alert('Verify Email.')
    }
    return (
        <TouchableOpacity style={styles.btn} onPress={verifyEmail}>
            <Text style={styles.content}>{title}</Text>
        </TouchableOpacity >
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#FECC31',
        borderRadius: 30,
    },
    content: {
        textAlign: 'center',
        fontWeight: '900'
    }
})