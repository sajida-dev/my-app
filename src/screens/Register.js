import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
const yellowColor = '#FECC31'
const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [location, setLocation] = useState('');
    const navigateToProfilePage = () => {
        console.log('name', name)
        navigation.navigate('Profile',
            {
                name: name,
                designation: designation,
                location: location
            })
    }
    const navigateToLoginPage = () => navigation.navigate('Login')

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/login.png')} style={{ width: 100, height: 100 }} />
            <View style={styles.content}>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>Welcome to LemonPie!</Text>
                <Text style={{ color: 'gray' }}>Keep your data safe</Text>
            </View>

            <TextInput style={styles.input} placeholder='Name' onChange={setName} />
            <TextInput style={styles.input} placeholder='Designation' onChange={setDesignation} />
            <TextInput style={styles.input} placeholder='Location' onChange={setLocation} />
            <CustomButton title={'Register'} onPress={navigateToProfilePage} />

            <View style={styles.login}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={navigateToLoginPage}>
                    <Text style={{ color: yellowColor }}> Login!</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Register


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        height: '100%'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderRadius: 50,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#F6F6F6'
    }, login: {
        marginTop: 30,
        flexDirection: 'row'
    }

})