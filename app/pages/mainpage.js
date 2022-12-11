module.exports = () => {
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
}