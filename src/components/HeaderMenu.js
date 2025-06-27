import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HeaderMenu = () => {
    return (
        <View style={styles.headerMenu}>
            <TouchableOpacity style={styles.iconContainer}>
                <MaterialIcons name="search" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name="ellipsis-vertical" size={20} color="black" />
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    headerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        borderRadius: 20,
        backgroundColor: 'rgba(218, 218, 218, 0.85)',
        padding: 5,
        marginHorizontal: 3
    }
})

export default HeaderMenu
