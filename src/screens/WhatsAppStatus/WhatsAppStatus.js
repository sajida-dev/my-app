import { View, Text, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { StatusCard } from '../../components/StatusCard'
import { AddStatusCard } from '../../components/AddStatusCard'
import { FollowedListItem } from '../../components/FollowedListItem'
import { FollowingListItem } from '../../components/FollowingListItem'
import { BottomNavigationBar } from '../../components/BottomNavigationBar'

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
    const followedListData = [
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
        {
            name: "Golden Jewels",
            date: "05/06/2025",
            message: "Women's Fashion Person with some thing to test",
            count: 23,
            icon: "image",
            profileImage: require("../../../assets/a.jpg"),
        },
    ];
    const followingListData = [
        {
            name: "Rudra Cartoons",
            message: "139K",
            profileImage: require("../../../assets/a.jpg"),
        },
        {
            name: "Luxury Watches",
            message: "86M",
            profileImage: require("../../../assets/a.jpg"),
        },
        {
            name: "Golden Jewels",
            message: "139K",
            profileImage: require("../../../assets/a.jpg"),
        },
        {
            name: "Golden Jewels",
            message: "139K",
            profileImage: require("../../../assets/a.jpg"),
        },
        {
            name: "Golden Jewels",
            message: "139K",
            profileImage: require("../../../assets/a.jpg"),
        },
    ];
    return (
        <SafeAreaView>
            <ScrollView style={styles.statusScreen} >
                <View style={styles.statusContainer}>
                    <Text style={styles.title}>Status</Text>
                    <SafeAreaView >
                        <ScrollView horizontal={true}>
                            <AddStatusCard />
                            {statusList.map((val, ind) => <StatusCard key={ind} name={val.name} profile={val.profile} status={val.status} />)}
                        </ScrollView>
                    </SafeAreaView>
                </View>

                <View style={styles.followedChannelContainer}>
                    <View style={styles.channelHeader}>
                        <Text style={styles.title}>Channels</Text>
                        <View style={styles.channelHeaderBtn}>
                            <Text style={{ fontWeight: '700', fontSize: 13 }}>Explore</Text>
                        </View>
                    </View>

                    {followedListData.map((val, ind) => <FollowedListItem
                        key={ind}
                        profileImage={val.profileImage}
                        name={val.name}
                        icon={val.icon}
                        message={val.message}
                        count={val.count}
                        date={val.date}
                    />)}

                </View>


                <View style={styles.followChannelContainer}>
                    <Text style={{ fontWeight: '800' }}>Find channels to follow</Text>
                    {followingListData.map((val, ind) => <FollowingListItem
                        key={ind}
                        profileImage={val.profileImage}
                        name={val.name}
                        icon={val.icon}
                        message={val.message}
                        count={val.count}
                        date={val.date}
                    />)}
                </View>

            </ScrollView >
            <View style={styles.bottomNavigation}>
                <BottomNavigationBar />
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    statusScreen: {
        flexDirection: 'column',
        gap: 10,
        bottom: 0,
        top: 0
    },
    statusContainer: {
        flexDirection: 'column',
        gap: 15,
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    followedChannelContainer: {
        flexDirection: 'column',
        gap: 5,
        marginHorizontal: 10,
        marginVertical: 20
    },
    channelHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    channelHeaderBtn: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        backgroundColor: 'rgb(216, 215, 215)',
        borderRadius: 20,
    },
    followChannelContainer: {
        flexDirection: 'column',
        marginHorizontal: 10,
    },
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
})