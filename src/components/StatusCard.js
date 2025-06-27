import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
const profile = require("../../assets/a.jpg")
const status = require("../../assets/aa.png")
const StatusCard = ({ name, status, profile }) => {
    return (
        <TouchableOpacity>
            <ImageBackground source={status} style={styles.cardBody} imageStyle={{ borderRadius: 20 }}>
                <View style={styles.container} >
                    <Image source={profile} style={styles.profile} />
                </View>
                <Text style={styles.title}>{name}</Text>
            </ImageBackground>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    cardBody: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '5',
        width: 75,
        height: 140,
        backgroundColor: 'gray',
        borderRadius: 20,
        marginHorizontal: 3,
    },
    container: {
        width: 43,
        height: 43,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'green',
    },
    profile: {
        width: 35,
        height: 35,
        borderRadius: 25
    },
    title: {
        fontSize: 12,
        fontWeight: '600',
        marginHorizontal: 10,
        color: 'white'
    }
})
export { StatusCard }