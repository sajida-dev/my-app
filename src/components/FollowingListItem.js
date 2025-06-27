import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
const FollowingListItem = ({ profileImage, name, date, message, icon, count }) => {
    return (
        <TouchableOpacity style={styles.listCard}>
            <View style={styles.listCardData}>
                <Image source={profileImage} style={styles.profile} />
                <View style={styles.listContent}>
                    <View style={styles.listTitle}>
                        {/* channel name */}
                        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
                    </View>
                    <View style={styles.listData}>

                        {/* message */}
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.message}>{message} Followers</Text>

                    </View>
                </View>
            </View>
            <View style={styles.followContainer}>
                <Text style={styles.follow}>Follow</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listCard: {
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    listCardData: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 15,
        alignItems: 'center'
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
        alignItems: 'center',
        maxWidth: 120
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
    followContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 211, 137, 0.44)',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    follow: {
        fontSize: 14,
        color: 'rgb(2, 72, 10)',
        fontWeight: '600'

    },
    date: {
        fontSize: 11
    }

})
export { FollowingListItem }

