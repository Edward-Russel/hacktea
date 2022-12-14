import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import WifiManager from "react-native-wifi-reborn";


//server.getData(data => ...)

const data = {
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
}



/**
 * —читаем врем€, чтобы определить измменение списка сканировани€
 * »збавл€ет от лишних расчетов
 * */
function timestamp(output) {
    let sum = 0;
    

    for (let i of output) {
        sum += i["timestamp"];
    }

    return (sum);
}

function distance(p0, p1, n) {

    const newdist = Math.pow(10, (p0 - p1) / (10 * n));

    if ((newdist < 15) || (n === 6)) {
        return newdist;
    }

    return distance(p0, p1, n + 1);

}
/**
 * —читаем координаты
 * 
 * */
function triangulation(output) {
    let r1, r2, x1, x2, y1, y2;
    let x, y;

    for (let itm of output) {
        if ((data["routers"][itm["BSSID"]] !== undefined) && (r1 === undefined)) {
            r1 = distance(data["routers"][itm["BSSID"]]["onemeter"], itm["level"], 2);
            x1 = data["routers"][itm["BSSID"]]["x"];
            y1 = data["routers"][itm["BSSID"]]["y"];
            continue;
        }
        if ((data["routers"][itm["BSSID"]] !== undefined)) {
            r2 = distance(data["routers"][itm["BSSID"]]["onemeter"], itm["level"], 2);
            x2 = data["routers"][itm["BSSID"]]["x"];
            y2 = data["routers"][itm["BSSID"]]["y"];
            let d = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            let a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
            let h = Math.sqrt(Math.abs(r1 * r1 - a * a));
            let xz = x1 + a * (x2 - x1) / d;
            let yz = y1 + a * (y2 - y1) / d;
            if (x === undefined) {
                console.log("firstdetect")
                x = [xz + h * (y2 - y1) / d, xz - h * (y2 - y1) / d];
                y = [yz - h * (x2 - x1) / d, yz + h * (x2 - x1) / d];
                console.log(x);
                continue;
            }  // две координаты ищем ближайшую
            console.log("other");
            let tmpx = [xz + h * (y2 - y1) / d, xz - h * (y2 - y1) / d];
            let tmpy = [yz - h * (x2 - x1) / d, yz + h * (x2 - x1) / d];
            let mindistx = 15;
            let mindisty = 15;
            let out = [0, 0, 0, 0];
            console.log(x, r1);
            console.log(tmpx, r2);
            for (let i in x) {
                for (let z in tmpx) {
                    
                    console.log(i, x[i], x);
                    if ((Math.abs(tmpx[z] - x[i]) < mindistx) && (Math.abs(tmpy[z] - y[i]) < mindisty)) {
                        console.log("work");
                        mindistx = Math.abs(tmpx[z] - x[i]);
                        mindisty = Math.abs(tmpy[z] - y[i]);
                        out = [tmpx[z], tmpy[z], x[i], y[i]];
                    }
                }

                
            }
            x = (out[0] + out[2]) / 2;
            y = (out[1] + out[3]) / 2;
        }
        
    }
    return [x, y];
}


const WifiBlob = () => {
    const [wifilist, setWifilist] = useState([0,0]);
    const [sumofsignal, setSumOfSignals] = useState(0);
    const [timedelay, setTimeDelay] = useState(0);
    const [usercoord, setUserCoord] = useState([0,0]);
   
    useEffect(() => {
        const interval = setInterval(() => {
            WifiManager.reScanAndLoadWifiList().then((output) => {
                console.log(output);
                setWifilist([output[0]["level"], output[1]["level"]]);

                const sum = timestamp(output);
                if (sum !== sumofsignal) {
                    setUserCoord(triangulation(output));
                    console.log(usercoord);
                }


                setSumOfSignals(sum);


            }).catch((error) => {
                console.log(error)
            });

            setTimeDelay(timedelay => timedelay + 1);

        }, 1000);
        return () => clearInterval(interval);
    }, []); 
  


    return (
        <View>
            <Text>Time: {timedelay } seconds</Text>
            <Text>Timestamp: {sumofsignal} </Text>
            <Text>Coords1: {usercoord[0]} {usercoord[1]}  </Text>
            <Text>Radius: {wifilist[0]} {wifilist[1]}</Text>
        </View>
    );
}     


export default WifiBlob;