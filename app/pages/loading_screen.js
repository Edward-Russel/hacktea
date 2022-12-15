import styles from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid, StyleSheet} from 'react-native';
import user_data from "../data/user_data.json"
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

module.exports = () => {
    setTimeout(()=>{window.switch_page((user_data.authorized) ? "mainpage": "authorization_phone_number")}, 1000)
    return (
    <SafeAreaView style={styles.onBoardView}>  
    <LinearGradient colors={['#333333', '#000000']} style={styles.background_gradient}
    /> 
    <Image
    style={[styles.background_image]}
    source={require('../assets/net.png')}
    /> 
    <View style={{flex:3}} />
    <Image
    style={logo_style}
    source={require('../assets/logo.png')} 
    />
    <View style={{flex:6, flexDirection: "row"}}>
    <Text style={styles.h1}>
    Подключаемся к сети
    </Text>
    <Image
    source={require('../assets/preloader.png')} style={{width: "8%", height: "8%", resizeMode: 'contain', marginLeft: '0.5%', marginTop: '1%'}}
    />
    </View>
    </SafeAreaView>
    )
}

const logo_style = {
    flex: 1,
    resizeMode: 'contain',
    width: "55%",
    height: "55%"
}