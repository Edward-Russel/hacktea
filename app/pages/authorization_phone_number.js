import styles from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import VectorImage from 'react-native-vector-image';


module.exports = () => {
    return (
        <SafeAreaView style={styles.onBoardView}>    
        <VectorImage source={require('../assets/onboard_back.svg')} style={styles.SvgBackground} />
        </SafeAreaView>
    )
}