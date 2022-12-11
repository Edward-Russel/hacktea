import styles from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid } from 'react-native';


module.exports = () => {
    return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
            <TouchableOpacity
            style={styles.button}
            onPress={userSendNotification}
          >
            <Text style={styles.text}>Привет Гена</Text>
                </TouchableOpacity>
            </View>
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </SafeAreaView>
    )
}