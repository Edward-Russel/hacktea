import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './style'

/**
 * Посылает пользователю push-уведомление
 *
 * @param {string} text
 * @return {None} Ничего не возвращает
 */
function userSendNotification(text) {
  alert("Типо уведомление")
}


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
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
  </SafeAreaView>
  )
}

export default App;
