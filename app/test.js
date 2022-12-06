import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() { this.setState({ date: new Date() }); }
    render() {
        return (
            <Text style={{
                alignSelf: "center",
                    fontSize: 30,
                    height: 45,
                    width: 345,
                    borderColor: 'gray',
                    borderWidth: 2
                }}>
            Hello, world!
            It is {this.state.date.toLocaleTimeString()}
            </Text>
        );
    }
}
export default Clock;