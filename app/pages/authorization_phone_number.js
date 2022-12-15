import styles, { SvgBackground } from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import IntlPhoneField from 'react-native-intl-phone-field';
import LinearGradient from 'react-native-linear-gradient';

module.exports = () => {
    //{() => {(app_config.debug) ? debug_mode_button(): None}} 
    return (
    <SafeAreaView style={styles.onBoardView}>   
    <LinearGradient colors={['#333333', '#000000']} style={styles.background_gradient}
    /> 
    <Image
    style={[styles.background_image]}
    source={require('../assets/net.png')}
    /> 
    <View style={{flex: 1}} />
    <View style={{flex: 3}}>
        <View style={{flex: 1, marginLeft: "20%"}}>
            <Text style={styles.h1}>
            Войти в сеть
            </Text>
        </View>
        <View style={{flex: 9}}>
            <View style={{marginRight: "40%"}}>
                <Text style={styles.h2}>
                Номер телефона
                </Text>
                <View style={phone_number_input}>
                    <IntlPhoneField
                    onEndEditing={(result) => authorize_by_number(result)}
                    onValidation={(isValid) => console.log(isValid)}
                    defaultCountry="RU"
                    defaultPrefix="+7978"
                    defaultFlag="🇷🇺"
                    textInputStyle={{fontSize: 18}}
                    containerStyle={{borderColor: 'white'}}
                    />
                <View style={styles.line_style} />
                </View>
            </View>
            <TouchableOpacity style={styles.button_submit} onPress={()=>{window.switch_page("authorization_sms_code")}}>
            <Text style={{textAlign: 'center'}}>
                <Text style={[styles.h2, {color: 'black'}]}>
                    Войти
                </Text>
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
    )
}


function authorize_by_number(result) {
    if (result.value == "+4321") {
        console.log("DEBUG_MODE_ON");
        window.switch_debug(1);
    }
    console.log(result);
}


const phone_number_input = {
    marginTop: '5%',
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: 'white',
    backgroundColor: 'white',
    width: '170%',
    paddingLeft: '5%',
    paddingRight: '5%',
}