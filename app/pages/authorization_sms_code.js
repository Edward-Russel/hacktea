import styles from '../style'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import SMSVerifyCode from 'react-native-sms-verifycode'
import LinearGradient from 'react-native-linear-gradient';


module.exports = () => {
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
        <View style={{flex: 1, marginLeft: "auto", marginRight: "auto"}}>
            <Text style={styles.h1}>
            Войти в сеть
            </Text>
        </View>
        <View style={{flex: 9}}>
            <View style={{flex: 1}}>
                <Text style={[styles.h2, {marginLeft: "10%"}]}>
                Введите 4-х значный код из SMS
                </Text>
                <View style={sms_verify_input}>
                    <SMSVerifyCode
                    verifyCodeLength={4}
                    containerPaddingHorizontal={Dimensions.get('window').width/8}
                    containerBackgroundColor={'rgba(0, 0, 0, 0)'}
                    codeViewBackgroundColor={"white"}
                    onInputCompleted={(input) => {console.log(input)}}
                />
                </View>
                <TouchableOpacity style={[styles.button_submit, {width: '57%'}]} onPress={()=>{window.switch_page("mainpage")}}>
                <Text style={{textAlign: 'center'}}>
                    <Text style={[styles.h2, {color: 'black'}]}>
                        Подтвердить
                    </Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 2}} />
        </View>
    </View>
    </SafeAreaView>
    )
}


const sms_verify_input = {
    marginTop: '5%',
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: 'white',
    width: '100%',
}