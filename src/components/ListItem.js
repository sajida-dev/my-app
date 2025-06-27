import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// const profileImage = require("../../assets/a.jpg")
const ListItem = ({ profileImage, name, date, message, icon, count }) => {
    return (
        <TouchableOpacity style={styles.listCard}>
            <Image source={profileImage} style={styles.profile} />
            <View style={styles.listContent}>
                <View style={styles.listTitle}>
                    {/* channel name */}
                    <Text style={styles.title}>{name}</Text>
                    {/* date */}
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.listData}>
                    {/* icon */}
                    {
                        icon === 'image' ? <FontAwesome6 name="image" size={16} color="black" /> : <FontAwesome6 name="image" size={16} color="black" />
                    }

                    {/* message */}
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.message}>{message}</Text>
                    {/* count numbers */}
                    <View style={styles.countContainer}>
                        <Text style={styles.count}>{count}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listCard: {
        flexDirection: 'row',
        gap: 10,
        // backgroundColor: 'rgb(191, 191, 191)',
        paddingVertical: 10,
        paddingHorizontal: 5,
        // borderRadius: 20
    },
    profile: {
        borderRadius: 50,
        width: 50,
        height: 50
    },
    title: {
        fontSize: 15,
        fontWeight: '800'
    },
    listContent: {
        flexDirection: 'column',
        gap: 2
    },
    listTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listData: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        maxWidth: 200
    },
    countContainer: {
        width: 23,
        height: 23,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 50,
    },
    count: {
        fontSize: 9,
        color: 'white'
    },
    date: {
        fontSize: 11
    }

})
export { ListItem }

