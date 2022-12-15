import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  "onBoardView": {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
  },
  "background_image": {
    position: "absolute",
    top: '50%',
  }, 
  "background_gradient": {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }, 
  "h1": {
    fontSize: 24,
    color: "white"
  },
  "h2": {
    fontSize: 18,
    color: "white"
  },
  "default-text": {
    fontSize: 14,
    color: "white"
  },
  "input": {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  "line_style": {
    borderWidth: 0.5,
    borderColor:'lightgrey',
    marginBottom: 5
  },
  "button_submit": {
      marginTop: '8%',
      paddingTop: '3%',
      paddingBottom: '3%',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '75%',
      backgroundColor: "#1DE9B6",
      borderRadius: 5,
  }
})
export default styles