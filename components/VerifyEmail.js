import { Button, Image, StyleSheet, Text, View } from 'react-native'
const VerifyEmail = () => {
    return (
        <View style={css.container}>
            <View style={css.img}>
                <Image source={require('../assets/verfiy-email.png')} />
            </View>

            <View style={css.content}>
                <Text style={css.subTitle}>Please use the link below to verify your email and start your journey.</Text>
                <Button title='VERIFY EMAIL' />
            </View>

            <View style={css.action}>
                <Text style={{ textAlign: 'center' }}>Do you have any Question?</Text>
                <Text style={{ color: '#FECC31', textAlign: 'center' }}>contact@gmail.com</Text>
            </View>

        </View>
    )
}
export default VerifyEmail
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50
    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 20,
    },
    action: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: '700'
    },


});

