import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MenuItemCard = ({ icon, title, status }) => {
    return (
        <View style={styles.menuCard}>
            <View style={status == 'active' ? styles.itemContainer : ''} > {icon} </View>
            <Text style={{ fontSize: 10 }}>{title}</Text>
        </View >
    )
}
const styles = StyleSheet.create({
    menuCard: {
        flexDirection: 'column',
        gap: 3,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemContainer: {
        backgroundColor: 'rgba(76, 214, 108, 0.28)',
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 20
    }
})
export { MenuItemCard }