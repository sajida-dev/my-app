import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { StatusCard } from '../../components/StatusCard'
import { AddStatusCard } from '../../components/AddStatusCard'
import { ListItem } from '../../components/ListItem'
export default function WhatsAppStatus() {
    const statusList = [
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/1.jpeg"),
            profile: require('../../../assets/a.jpg')
        },
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/2.jpg"),
            profile: require('../../../assets/a.jpg')
        },
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/3.png"),
            profile: require('../../../assets/a.jpg')
        },
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/4.png"),
            profile: require('../../../assets/a.jpg')
        },
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/5.jpg"),
            profile: require('../../../assets/a.jpg')
        },
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/6.png"),
            profile: require('../../../assets/a.jpg')
        },
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/7.png"),
            profile: require('../../../assets/a.jpg')
        },
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/8.png"),
            profile: require('../../../assets/a.jpg')
        },
        {
            name: 'Javed Iqbal',
            status: require("../../../assets/9.png"),
            profile: require('../../../assets/a.jpg')
        }
    ]

    const userProfile = require("../../../assets/a.jpg")
    const chatListData = [
        {
            name: "Golden Jewels",
            date: "05/06/2025",
            message: "Women's Fashion Person with some thing to test",
            count: 23,
            icon: "image",
            profileImage: require("../../../assets/a.jpg"),
        },
        {
            name: "Luxury Watches",
            date: "06/06/2025",
            message: "Latest arrivals of luxury watches with discount up to 50%!",
            count: 8,
            icon: "video",
            profileImage: require("../../../assets/a.jpg"),
        },
    ];
    return (
        <View style={styles.statusScreen}>
            <View style={styles.statusContainer}>
                <Text style={styles.title}>Status</Text>
                <ScrollView horizontal={true}>
                    <AddStatusCard />
                    {statusList.map((val, ind) => <StatusCard key={ind} name={val.name} profile={val.profile} status={val.status} />)}
                </ScrollView>
            </View>

            <View style={styles.channelContainer}>
                <View style={styles.channelHeader}>
                    <Text style={styles.title}>Channels</Text>
                    <View style={styles.channelHeaderBtn}>
                        <Text style={{ fontWeight: '700', fontSize: 13 }}>Explore</Text>
                    </View>
                </View>
                {chatListData.map((val, ind) => <ListItem
                    key={ind}
                    profileImage={val.profileImage}
                    name={val.name}
                    icon={val.icon}
                    message={val.message}
                    count={val.count}
                    date={val.date}
                />)}

            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    statusScreen: {
        flexDirection: 'column',
        gap: 10
    },
    statusContainer: {
        flexDirection: 'column',
        gap: 15,
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    channelContainer: {
        flexDirection: 'column',
        gap: 5,
        marginHorizontal: 10
    },
    channelHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    channelHeaderBtn: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        backgroundColor: 'rgb(216, 215, 215)',
        borderRadius: 20,

    }
})