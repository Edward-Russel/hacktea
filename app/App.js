import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Button, AppRegistry, AppState} from 'react-native';
import pages from "./pages/pages"
import app_config from "./data/config.json"


const App = () => {
    let starting_page = (app_config.debug ? "wifi_debug": "authorized_on_board");
    window.pages = pages;
    [window.current_page, window.switch_page] = useState(starting_page);
    return pages[window.current_page]();
}

export default App;
