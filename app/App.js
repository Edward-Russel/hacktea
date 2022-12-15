import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Button, AppRegistry, AppState} from 'react-native';
import pages from "./pages/pages"
import user_data from "./data/user_data.json"


const App = () => {
    [window.debug, window.switch_debug] = useState(false);
    [current_page, window.switch_page] = useState("loading_screen");
    [window.user_pos_x, window.change_x] = useState(user_data.starting_pos_x);
    [window.user_pos_y, window.change_y] = useState(user_data.starting_pos_y);
    return pages[window.current_page]();
}

export default App;
