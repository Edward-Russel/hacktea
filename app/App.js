import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import styles from './style'
import WifiBlob from './wifi'
/**
 * Посылает пользователю push-уведомление
 *
 * @param {string} text
 * @return {None} Ничего не возвращает
 */
function userSendNotification(text) {
  alert("Типо уведомление")
}

/**
 * Запрос разрешения для Wifi сканера 
 * PERMISSIONS.ACCESS_FINE_LOCATION
 * Ну и отладка в консоль
 * */
const requestFineLocation = async () => {
    try {
const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
        title: 'Location permission is required for WiFi connections',
        message:
            'This app needs location permission as this is required  ' +
            'to scan for wifi networks.',
        buttonNegative: 'DENY',
        buttonPositive: 'ALLOW',
    },
);
if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    // You can now use react-native-wifi-reborn
    console.log("You can use the wifi scaner");
} else {
    // Permission denied
    console.log("Wifi scaner permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};

const App = () => {
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
          <Button title="request permissions" onPress={requestFineLocation} />
          <WifiBlob />
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
  </SafeAreaView>
  )
}

export default App;
