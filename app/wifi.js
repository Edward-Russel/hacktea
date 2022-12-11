import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import WifiManager from "react-native-wifi-reborn";

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


//server.getData(data => ...)

const data = {
    id: 24351,
    routers: [
        ['4a:5a:b6:dc:65:9f', 6, 7],
        ['a1:23:aa:12:2a', 1, 5],
        ['a4:23:22:12:1a', 2, 3],
        ['c4:6e:1f:0d:21:a6', 10, 10]
    ]
}



/**
 * Считаем время, чтобы определить измменение списка сканирования
 * Избавляет от лишних расчетов
 * */
function timestamp(output) {
    let sum = 0;
    for (let i of output) {
        sum += i["timestamp"];
    }

    return(timestamp)
}


/**
 * Считаем координаты
 * 
 * */
function triangulation(output) {
    let x, y;
    const angle = Math.tan()







    return [x, y];
}


const WifiBlob = () => {
    const [wifilist, setWifilist] = useState([]);
    const [sumofsignal, setSumOfSignals] = useState(0);
    const [timedelay, setTimeDelay] = useState(0);
    const [usercoord, setUserCoord] = useState([0,0]);
   
    useEffect(() => {
        const interval = setInterval(() => {
            WifiManager.reScanAndLoadWifiList().then((output) => {
                setWifilist(output);

                console.log(output.length);
                console.log(output);


                const sum = timestamp(output);
                if (sum != sumofsignal) {
                    setUserCoord(triangulation(output));
                }


                setSumOfSignals(sum);
                console.log(sum);

            }).catch((error) => {
                console.log(error)
            });

            setTimeDelay(timedelay => timedelay + 1);
            console.log(timedelay + " sec.");
        }, 1000);
        return () => clearInterval(interval);
    }, []); 
  


    return (
        <View>
            <Text>Time: {timedelay } seconds</Text>
            <Text>All signals: {sumofsignal} </Text>
            <Button title="request permissions" onPress={requestFineLocation} />
        </View>
    );
}     


export default WifiBlob