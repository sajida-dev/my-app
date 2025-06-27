import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MenuItemCard } from './MenuItemCard'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import StatusRingIcon from './StatusRingIcon';
import Ionicons from '@expo/vector-icons/Ionicons';

const list = [
    {
        title: "Chats",
        status: 'inactive',
        icon: <MaterialCommunityIcons name="message-text-outline" size={20} color="black" />
    },
    {
        title: "Updates",
        status: 'active',
        icon: <StatusRingIcon color={'green'} />
    },
    {
        title: "Communities",
        status: 'inactive',
        icon: <MaterialCommunityIcons name="account-group-outline" size={24} color="black" />
    },
    {
        title: "Calls",
        status: 'inactive',
        icon: <Ionicons name="call-outline" size={20} color="black" />
    },
]
const BottomNavigationBar = () => {
    return (
        <View style={styles.navigationBar}>
            {list.map((val, ind) => <MenuItemCard key={ind} title={val.title} icon={val.icon} status={val.status} />)}

        </View>
    )
}
const styles = StyleSheet.create({
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        height: 100,
        zIndex: 100
    }
})
export { BottomNavigationBar }