import { Text, View, Button } from 'react-native';
import WifiManager from "react-native-wifi-reborn";

const WifiBlob = () => {
    
    let wifiList = WifiManager.loadWifiList(); //wifiList will be Array<WifiEntry>


    rescan = () => {
        WifiManager.loadWifiList().then(
            ssid => {
                console.log(ssid);
                console.log(ssid.length);
            },
            () => {
                console.log("Lul it can't work!");
            }
        );
    }

    return (
         <View>
            <Text>Type: </Text>
            <Text>Is Connected? {wifiList[0]["level"] } </Text>
            <Button title="rescan" onPress={rescan} />
         </View>
    );
    

    

    
};
export default WifiBlob