import styles from '../style'
import { View, Text, Image, TouchableWithoutFeedback, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import user_data from "../data/user_data.json"
import ImageZoom from 'react-native-image-pan-zoom';


function show_click_position(eventParams) {
    console.log(eventParams);
}


module.exports = () => {
    let {map_width, map_height} = Image.resolveAssetSource(images["room_plan"]);
    let control_panel = ((user_data.is_admin) ? buttons_admin: buttons_user);
    control_panel = ((window.debug) ? buttons_dev: control_panel);
    const range_size = Dimensions.get('window').width/10;
    return (
    <SafeAreaView style={styles.onBoardView}>
    <ImageZoom cropWidth={Dimensions.get('window').width} onLongPress={show_click_position}
    cropHeight={'100%'}
    minScale={1}
    style={page_style.map_container}
    imageWidth={Dimensions.get('window').width}
    imageHeight={'100%'}>
        <Image
        source={images["room_plan"]}
        style={[page_style.map]}
        /> 
        <View style={[page_style.range, {left: window.user_pos_x, bottom: window.user_pos_y, width: range_size, height: range_size}]}>
        <View style={page_style.point}/>
        </View>
    </ImageZoom>
    {control_panel()}
    </SafeAreaView>
    )
}

let images = {
    "gear": require('../assets/gear.png'),
    "home": require('../assets/home.png'),
    "controller": require('../assets/controller.png'),
    "room_plan": require('../assets/plan_floor1.png'),
}

const buttons_admin = () => {
    return (
    <View style={page_style.buttons_container}>
    <Image
    style={[page_style.navigation_button, {marginLeft: '20%'}]}
    source={images["controller"]}
    />
    <Image
    style={page_style.navigation_button}
    source={images["home"]}
    />
    <Image
    style={[page_style.navigation_button, {marginRight: '20%'}]}
    source={images["gear"]}
    />
    </View>
    )
}

const buttons_user = () => {
    return (
    <View style={page_style.buttons_container}>
    <Image
    style={[page_style.navigation_button, {marginLeft: '20%'}]}
    source={images["home"]}
    />
    <Image
    style={[page_style.navigation_button, {marginRight: '20%'}]}
    source={images["gear"]}
    />
    </View>
    )
}

const buttons_dev = () => {
    return (
    <View style={page_style.buttons_container}>
    <Image
    style={[page_style.navigation_button, {marginLeft: '20%'}]}
    source={images["controller"]}
    />
    <Image
    style={page_style.navigation_button}
    source={images["home"]}
    />
    <TouchableOpacity style={page_style.navigation_button} onPress={() => {window.switch_page("wifi_debug")}}>
    <Image
    source={require('../assets/debug.png')}
    style={{width: '100%', height: '100%', resizeMode: 'contain'}}
    />   
    </TouchableOpacity>
    <Image
    style={[page_style.navigation_button, {marginRight: '20%'}]}
    source={images["gear"]}
    />
    </View>
    )
}
debug_mode_button = () => {
    return (
    <TouchableOpacity>
    <Image
    style={{width: 200, height: 200}}
    source={require('../assets/debug.png')}
    />   
    </TouchableOpacity>
    )
}
const page_style = StyleSheet.create({

navigation_button: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
    flex: 1,
},

map_container: {
    flex: 1,
    backgroundColor: "#D9D9D9"
},

map: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
},

buttons_container: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '2%'
},
range: {
    width: null,
    height: null,
    position: 'absolute',
    borderRadius: 90,
    backgroundColor: 'rgba(29, 233, 182, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
},
point: {
    width: '15%',
    height: '15%',
    borderRadius: 90,
    backgroundColor: '#1DE9B6',
    borderColor: 'white',
    borderWidth: 0.5,
},
debug_point: {
    width: null,
    height: null,
    position: 'absolute',
    borderRadius: 90,
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center'
}
})