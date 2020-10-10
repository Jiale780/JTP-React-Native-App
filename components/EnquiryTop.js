import React, {Component} from "react";
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import EnquiryFormTheme from "../css/EnquiryFormTheme";
import JapanRobot from "../img/JapanRobot.jpg";

class EnquiryTop extends Component {

  render() {
    return (
      <View>
        <Image source={JapanRobot} style={EnquiryFormTheme.JapanRobotImage} />

        <View style={styles.container9} />

        <Button title="FAQs" style={styles.Button1}
        onPress={() => Alert.alert("Frequently Asked Questions clicked...")} />

        <View style={styles.container10} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container9: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  container10: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  Button1:{
      color: "#0093e9",
  },
});

export default EnquiryTop;