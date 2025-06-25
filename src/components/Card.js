import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const yellowColor = '#FECC31'

const Card = ({ url, title, subTitle }) => {
    return (
        <View style={styles.card}>
            <Image source={url} style={styles.profile} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <TouchableOpacity style={styles.followBtn}>
                <Text>Follow</Text>
            </TouchableOpacity>
        </View>
    )
}

export { Card }

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'black',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
        padding: 10,
        width: 200,
        height: 250,
        margin: 5
    },
    title: {
        fontSize: 16,
        fontWeight: '800',
        color: 'white'
    },
    subTitle: {
        color: 'white'
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'white'
    },
    followBtn: {
        backgroundColor: yellowColor,
        padding: 8,
        width: 100,
        alignItems: 'center',
        borderRadius: 10
    }
})