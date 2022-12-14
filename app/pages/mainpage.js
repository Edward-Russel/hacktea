import styles from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import user_data from "../data/user_data.json"


module.exports = () => {
    console.log(user_data.is_admin);
    let control_panel = ((user_data.is_admin) ? buttons_admin: buttons_user);
    return (
    <SafeAreaView style={styles.onBoardView}>
    <ScrollView style={map_container_style} minimumZoomScale={1} maximumZoomScale={5}>
        <Image
        style={map_style}
        source={require('../assets/plan_floor1.png')}
        /> 
    </ScrollView>
    {control_panel()}
    </SafeAreaView>
    )
}

let images = {
    "gear": require('../assets/gear.png'),
    "home": require('../assets/home.png'),
    "controller": require('../assets/controller.png')
}

const buttons_admin = () => {
    return (
    <View style={buttons_container_style}>
    <Image
    style={[navigation_button_style, {marginLeft: '20%'}]}
    source={images["gear"]}
    />
    <Image
    style={navigation_button_style}
    source={images["controller"]}
    />
    <Image
    style={[navigation_button_style, {marginRight: '20%'}]}
    source={images["home"]}
    />
    </View>
    )
}

const buttons_user = () => {
    return (
    <View style={buttons_container_style}>
    <Image
    style={[navigation_button_style, {marginLeft: '20%'}]}
    source={images["gear"]}
    />
    <Image
    style={[navigation_button_style, {marginRight: '20%'}]}
    source={images["home"]}
    />
    </View>
    )
}

const navigation_button_style = {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
    flex: 1,
}

const map_container_style = {
    flex: 1,
    backgroundColor: "#D9D9D9"
}

const map_style = {
    width: 2000,
    height: 800,
    resizeMode: 'contain',
}

const buttons_container_style = {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '2%'
}