import styles from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

module.exports = () => {
    setTimeout(()=>{window.switch_page("mainpage")}, 1000);
    return (
    <SafeAreaView style={styles.onBoardView}>
    <LinearGradient colors={['#333333', '#000000']} style={styles.background_gradient}
    /> 
    <Image
    style={[styles.background_image]}
    source={require('../assets/net.png')}
    />   
    </SafeAreaView>
    )
}