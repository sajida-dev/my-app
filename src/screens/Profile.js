import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation, name = 'Name', designation = 'designation', location = 'location' }) => {
    const details = [
        {
            no: 122,
            title: "followers"
        },
        {
            no: 67,
            title: "following"
        },
        {
            no: '37K',
            title: "likes"
        },
    ]
    const buttons = [
        { title: 'Edit Profile' }, { title: 'Add Friends' }
    ]
    return (
        <View style={{ flex: 1, gap: 20, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={{ width: '100%' }}>
                    <Image style={styles.header}
                        source={{ uri: "https://t3.ftcdn.net/jpg/07/65/74/40/360_F_765744038_b0LuOPAIjqef97B7aUP15LI4eKmNxHHV.jpg" }} />
                    <View />
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.profileView}>
                        <Image source={require('../../assets/a.jpg')} style={styles.profile} />
                    </View>
                </View>
            </View >
            <View style={styles.content}>
                <Text style={{ color: '#FECC31', fontWeight: '800', fontSize: 16 }}>{name}</Text>
                <Text>{designation}</Text>
                <View
                    style={styles.location}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/000/552/683/small/location_pin_002.jpg" }} />
                    <Text >{location}</Text>
                </View>
            </View>
            <View style={styles.details}>
                {
                    details.map((val, ind) => {
                        return (
                            <View style={styles.detailsContent} key={ind}>
                                <Text style={{ color: '#FECC31', fontSize: 20, fontWeight: '900' }}>{val.no}</Text>
                                <Text>{val.title}</Text>
                            </View>
                        );
                    })
                }
            </View>
            <View style={styles.btnContainer}>
                {buttons.map((val, ind) => {
                    return (
                        <TouchableOpacity style={{ backgroundColor: '#FECC31', padding: 10, borderRadius: 10, height: 45 }} key={ind}>
                            <Text >{val.title}</Text>
                        </TouchableOpacity >
                    );
                })}
            </View>
        </View>

    );
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 150,
        position: 'relative',

    },
    profileContainer: {
        borderColor: 'white',
        borderWidth: 2,
        borderStartStartRadius: 250,
        borderEndStartRadius: 250,
        position: 'absolute',
        padding: 10,
        top: 80,
        backgroundColor: 'white',
    },
    profileView: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 80,
        padding: 2,
        backgroundColor: 'white',
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },

    content: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 30,
        flexDirection: 'column',
        gap: 5
    },
    location: {
        flexDirection: 'row'
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        width: '100%',

    },
    detailsContent: {
        alignItems: 'center',
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        width: '100%',
        justifyContent: 'center'
    }

})