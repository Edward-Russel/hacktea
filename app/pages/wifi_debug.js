import WifiBlob from '../wifi';
import { View, Text, TouchableOpacity, SafeAreaView, Button, PermissionsAndroid, Image, TextInput } from 'react-native';
import styles from '../style'
import WifiManager from "react-native-wifi-reborn";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
        // saving error
    }
}

const addData = (BSSID, Xo, Yo, onemeter, data) => {
    data.routers[BSSID] = {
        x: Xo,
        y: Yo,
        onemeter: onemeter
    };
    return data;
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
    WifiManager.setEnabled(true);
} else {
    // Permission denied
    console.log("Wifi scaner permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};

module.exports = () => {
    const [coord, setCoord] = useState([0,0]);
    const [Xo, setXo] = useState(0);
    const [Yo, setYo] = useState(0);
    const [BSSID, setBSSID] = useState("");
    const [onemeter, setOnemeter] = useState(0);
    const [data, setdate] = useState({
        id: 24351,
        routers: {
            '4a:5a:b6:dc:65:9f': {
                x: 7,
                y: 7,
                onemeter: -41

            },
            'a1:23:aa:12:2a': {
                x: 3,
                y: 5,
                onemeter: -45

            },
            'a4:23:22:12:1a': {
                x: 6,
                y: 3,
                onemeter: -40

            },
            'c4:6e:1f:0d:21:a6': {
                x: 10,
                y: 10,
                onemeter: -39

            },
            '78:02:f8:2c:d8:1e': {
                x: 1,
                y: 10,
                onemeter: -38

            },
            'ce:07:e4:f2:96:3f': {
                x: 10,
                y: 1,
                onemeter: -32

            },
        }
    });
    const [list, setList] = useState(0);







    useEffect(() => {

        const interval = setInterval(() => {
            
            WifiBlob.getCoordinates().then((crd) => {
                setCoord(crd);
            });
            WifiBlob.getList().then((crd) => {
                setList(crd);
            });
        }, 1000);

        return () => clearInterval(interval);

    }, []); 
    
    
    const load = () => {
       
        WifiBlob.getdate().then((crd) => {
            setdate(crd);
        });

    };
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
                <TouchableOpacity
                style={styles.button}
                onPress={requestFineLocation}
              >
                <Text style={styles.text}>Где я?</Text>
                    </TouchableOpacity>
                </View>
            <Button title="request permissions" onPress={requestFineLocation} />


            <View>
                <Button onPress={() => {load()}} title="reload" />
                <Text>Coords1:{coord[0]} {coord[1]} </Text>
                <Button onPress={() => { storeData(data) }} title="data push" />
                <Button onPress={() => { setdate(addData(BSSID, Xo, Yo, onemeter, data)) }} title="data set +" />
                <TextInput
                    style={{ height: 35 }}
                    placeholder="BSSID"
                    onChangeText={newText => setBSSID(newText)}
                    defaultValue={BSSID}
                />
                <TextInput
                    keyboardType="numeric"
                    style={{ height: 35 }}
                    placeholder="X"
                    onChangeText={newText => setXo(Number(newText))}
                    defaultValue={Xo}
                />
                <TextInput
                    keyboardType="numeric"
                    style={{ height: 35 }}
                    placeholder="Y"
                    onChangeText={newText => setYo(Number(newText))}
                    defaultValue={Yo}
                />
                <TextInput
                    keyboardType="numeric"
                    style={{ height: 35 }}
                    placeholder="In one meter P0"
                    onChangeText={newText => setOnemeter(Number(newText))}
                    defaultValue={onemeter}
                />

                <Text style={{ height: 100 }} selectable={true} > {JSON.stringify(list)}  </Text>
                <Text style={{ height: 100 }} selectable={true} > {JSON.stringify(data)}  </Text>
            </View>
            



            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </SafeAreaView>
        )
}