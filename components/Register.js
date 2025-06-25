import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import CustomButton from './CustomButton'
import { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [location, setLocation] = useState('');
    return (
        <View style={styles.container}>
            <Image source={require('../assets/login.png')} style={{ width: 100, height: 100 }} />
            <View style={styles.content}>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>Welcome to LemonPie!</Text>
                <Text style={{ color: 'gray' }}>Keep your data safe</Text>
            </View>

            <TextInput style={styles.input} placeholder='Name' />
            <TextInput style={styles.input} placeholder='Designation' />
            <TextInput style={styles.input} placeholder='Location' />
            <CustomButton title={'Register'} />
            <Text style={{ color: '#FECC31' }}>Forgot Password?</Text>
            <View style={{ marginTop: 30 }}>
                <Text>Don't have an account?
                    <Text style={{ color: '#FECC31' }}> Register!</Text>
                </Text>
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
    }

})