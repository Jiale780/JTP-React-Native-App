import React, {Component} from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import HomeTheme from "../css/HomeTheme";

class BelowFooter extends Component {
  render() {
    return (
        <View style={styles.container5}>
          <Text style={HomeTheme.footerText}>
              &copy; {new Date().getFullYear()} Copyright: JTP for All rights reserved. 
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container5: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#0093e9",
    height: 10,
  },
});

export default BelowFooter;