import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import CustomButton from './CustomButton'
const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/login.png')} style={{ width: 150, height: 150 }} />
            <View style={styles.content}>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>Welcome to LemonPie!</Text>
                <Text style={{ color: 'gray' }}>Keep your data safe</Text>
            </View>

            <TextInput style={styles.input} placeholder='Email' />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
            <CustomButton title={'Login'} />
            <Text style={{ color: '#FECC31' }}>Forgot Password?</Text>
            <View style={{ marginTop: 30 }}>
                <Text>Don't have an account?
                    <Text style={{ color: '#FECC31' }}> Register!</Text>
                </Text>
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
        // borderWidth: 1,
        borderRadius: 50,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#F6F6F6'
    }

})