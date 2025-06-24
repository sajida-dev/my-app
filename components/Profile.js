import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.header}
                    source={require('../assets/aa.png')} />
                <View />
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.profileView}>
                    <Image source={require('../assets/a.jpg')} style={styles.profile} />
                </View>
            </View>
        </View>
    );
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        width: '100%',
        backgroundColor: 'red',
        height: 150,
        position: 'relative',

    },
    profileView: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 80,
        padding: 2,
        position: 'absolute',
        top: 100,
        backgroundColor: 'white',
        marginLeft: 20
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 75,
    }
})