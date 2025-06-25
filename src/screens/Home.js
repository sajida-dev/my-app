import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card } from '../components/Card'
const yellowColor = '#FECC31'

const peopleData = [
    {
        name: 'Christine A.',
        followers: '1.6M Followers',
        image: require('../../assets/a.jpg'),
    },
    {
        name: 'James B.',
        followers: '900K Followers',
        image: require('../../assets/a.jpg'),
    },
    {
        name: 'Sophia C.',
        followers: '1.2M Followers',
        image: require('../../assets/a.jpg'),
    },
    {
        name: 'Liam D.',
        followers: '850K Followers',
        image: require('../../assets/a.jpg'),
    },
    {
        name: 'Emma E.',
        followers: '2.1M Followers',
        image: require('../../assets/a.jpg'),
    },
    {
        name: 'Oliver F.',
        followers: '770K Followers',
        image: require('../../assets/a.jpg'),
    },
    {
        name: 'Ava G.',
        followers: '1.9M Followers',
        image: require('../../assets/a.jpg'),
    },
    {
        name: 'William H.',
        followers: '680K Followers',
        image: require('../../assets/a.jpg'),
    },
    {
        name: 'Isabella I.',
        followers: '1.4M Followers',
        image: require('../../assets/a.jpg'),
    },
    {

        name: 'Elijah J.',
        followers: '1.0M Followers',
        image: require('../../assets/a.jpg'),
    },
];
const Home = ({ navigation }) => {
    const navigateLogin = () => navigation.navigate('Login')
    const navigateRegister = () => navigation.navigate('Register')
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
            <View>
                <Text style={styles.title}>Welcome to Lemon Pie!</Text>
                <Text style={{ color: 'gray', textAlign: 'center' }}>Keep your data safe</Text>

            </View>

            <View style={{ marginLeft: 20, flexDirection: 'column', gap: 10 }}>
                <Text style={styles.subTitle}>Popular Users</Text>

                <ScrollView style={styles.popularContainer} horizontal={true}>
                    {peopleData.map((people, ind) => <Card url={people.image} title={people.name} subTitle={people.followers} key={ind} />)}
                </ScrollView>
            </View >
            <View style={styles.btnCon}>

                <TouchableOpacity style={styles.btnSell} onPress={navigateLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBuy} onPress={navigateRegister}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>


    )

}

export default Home

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        textAlign: 'center',
        margin: 15,
        fontWeight: '900'
    },
    subTitle: {
        color: 'gray',
        fontSize: 17,
        fontWeight: '800',
        marginLeft: 15,
        marginBottom: 5
    },
    btnCon: {
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    btnBuy: {
        width: '90%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: yellowColor,
    },
    btnSell: {
        width: '90%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        color: yellowColor
    }
})