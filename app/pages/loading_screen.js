import styles from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import user_data from "../data/user_data.json"

module.exports = () => {
    //setTimeout(()=>{window.switch_page((user_data.authorized) ? "mainpage": "authorization_phone_number")}, 1000)
    return (
    <SafeAreaView style={styles.onBoardView}>    
    <View style={{flex:1.5}} />
    <View style={{flex:3, flexDirection: "row"}}>
    <Text style={styles.h1}>
    Подключаемся к сети
    </Text>
    </View>
    </SafeAreaView>
    )
}

const logo_style = {
    flex: 1,
    width: "80%",
    height: "80%"
}