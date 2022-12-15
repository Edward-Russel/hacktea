import React, { useState, useEffect } from 'react';
import WifiManager from "react-native-wifi-reborn";
import AsyncStorage from '@react-native-async-storage/async-storage';
let wifilist = null;
let data;






const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        data = JSON.parse(jsonValue);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}


function distance(p0, p1, n, thatdist) {

    const newdist = Math.pow(10, (p0 - p1) / (10 * n));

    if ((newdist < thatdist) || (n === 6)) {
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
            r1 = distance(data["routers"][itm["BSSID"]]["onemeter"], itm["level"], 2, 19);
            x1 = data["routers"][itm["BSSID"]]["x"];
            y1 = data["routers"][itm["BSSID"]]["y"];
            continue;
        }
        if ((data["routers"][itm["BSSID"]] !== undefined)) {
            r2 = distance(data["routers"][itm["BSSID"]]["onemeter"], itm["level"], 2, 15 + r1*r1);
            x2 = data["routers"][itm["BSSID"]]["x"];
            y2 = data["routers"][itm["BSSID"]]["y"];
            let d = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            let a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
            let h = Math.sqrt(Math.abs(r1 * r1 - a * a));
            let xz = x1 + a * (x2 - x1) / d;
            let yz = y1 + a * (y2 - y1) / d;
            if (x === undefined) {
                x = [xz + h * (y2 - y1) / d, xz - h * (y2 - y1) / d];
                y = [yz - h * (x2 - x1) / d, yz + h * (x2 - x1) / d];
                continue;
            }  // две координаты ищем ближайшую
            let tmpx = [xz + h * (y2 - y1) / d, xz - h * (y2 - y1) / d];
            let tmpy = [yz - h * (x2 - x1) / d, yz + h * (x2 - x1) / d];
            let mindistx = 15;
            let mindisty = 15;
            let out = [0, 0, 0, 0];
            for (let i in x) {
                for (let z in tmpx) {
                    if ((Math.abs(tmpx[z] - x[i]) < mindistx) && (Math.abs(tmpy[z] - y[i]) < mindisty)) {
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




const WifiBlob = ((exports) => {

    function getCoordinates() {
        return new Promise((resolve, reject) => {
            getData().then(() => {
                WifiManager.loadWifiList()
                    .then((output) => {
                        wifilist = output;
                        resolve(triangulation(output));
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
        });
    };
    function getList() {
        return new Promise((resolve, reject) => {
            resolve(wifilist);
            });
        };
    function getdate() {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    };

    exports.getdate = getdate;
    exports.getCoordinates = getCoordinates;
exports.getList = getList;
    return exports;
})({});

export default WifiBlob;

/*

const WifiBlob = () => {
    const [usercoord, setUserCoord] = useState([0, 0]);

    useEffect(() => {
        const onload = setTimeout(() => {
            getData().then((output) => { window.dater = output; });
            
            WifiManager.loadWifiList().then((output) => {
                
                setUserCoord(triangulation(output));
                
                console.log(window.lister);
                
            }).catch((error) => {
                console.log(error)
            });


            
           
            console.log(" I do this once");
        }, 1);


        const interval = setInterval(() => {
            WifiManager.reScanAndLoadWifiList().then((output) => {
                let sum = timestamp(output);
                if ((sum !== 0) || (sum !== sumofsignal)) {
                    wifilist = output;
                    
                    window.lister = wifilist;
                    setUserCoord(triangulation(output));
                }
                sumofsignal = sum;

            }).catch((error) => {
                console.log(error)
            });

            timedelay += 1;

        }, 1000);

        return () => clearInterval(interval);

    }, []); 
    
    return usercoord;
};  



export {
    storeData, addData, getData}; */