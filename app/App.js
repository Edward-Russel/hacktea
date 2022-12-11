import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Button, AppRegistry, AppState} from 'react-native';
import pages from "./pages/pages"
import app_config from "./data/config.json"
import user_data from "./data/user_data.json"


const App = () => {
    let starting_page = (app_config.debug ? "wifi_debug": (user_data.authorized ? "authorized_on_board": "authorization_phone_number"));
    [window.current_page, window.Switch_page] = useState(starting_page);
    return pages[window.current_page]();
}

export default App;
