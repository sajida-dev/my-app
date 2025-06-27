import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusRingIcon = ({ color }) => {
    return (
        <View style={styles.statusIconOuter}>
            <View style={styles.statusIconInner} />
        </View>
    )
}

export default StatusRingIcon

const styles = StyleSheet.create({
    statusIconOuter: {
        width: 20,
        height: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed'
    },
    statusIconInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green',
    },
})