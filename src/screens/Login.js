import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import { useState } from 'react';
const yellowColor = '#FECC31'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigateToRegisterPage = () => navigation.navigate('Register');

    const navigateToForgotPassword = () => navigation.navigate('ForgotPassword')

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/login.png')} style={{ width: 150, height: 150 }} />
            <View style={styles.content}>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>Welcome to LemonPie!</Text>
                <Text style={{ color: 'gray' }}>Keep your data safe</Text>
            </View>

            <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} secureTextEntry={true} />
            <CustomButton title={'Login'} />
            <TouchableOpacity onPress={navigateToForgotPassword}>
                <Text style={{ color: yellowColor }}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.account}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={navigateToRegisterPage}>
                    <Text style={{ color: yellowColor }}> Register!</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login

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
    },
    account: {
        marginTop: 30,
        flexDirection: 'row'

    }

})