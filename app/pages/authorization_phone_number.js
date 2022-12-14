import styles, { SvgBackground } from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import IntlPhoneField from 'react-native-intl-phone-field';

module.exports = () => {
    return (
    <SafeAreaView style={styles.onBoardView}>    

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
                    onEndEditing={(result) => console.log(result)}
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
            <TouchableOpacity style={styles.button_submit}>
            <Text style={{textAlign: 'center'}}>
                <Text style={styles.h2}>
                    Войти
                </Text>
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
    )
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