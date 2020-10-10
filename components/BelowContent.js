import React, {Component} from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import {Card} from "react-native-elements";
import HomeTheme from "../css/HomeTheme";

class BelowContent extends Component {
  render() {
    return (
      <View>
        <View style={styles.container4} />

        <Text style={HomeTheme.textStyle1}> Japan Travel Guide Comments </Text>

        <View style={styles.innerContainer2}>
          <Text style={HomeTheme.paraStyle3}>
            Beautiful guide. We particularly wanted help to understand the rail system and get 
            our bearings in this busy city. It saved us days of trying to figure it out ourselves. 
            Highly recommended. Tanya R quoted in Great introduction to Tokyo.
          </Text>
        </View>

        <View style={styles.container4} />

        <View style={styles.innerContainer2}>
          <Text style={HomeTheme.paraStyle3}>
            My husband and I were at some point reluctant to go to Japan amid the virus outbreak. 
            But we don't regret it. This has been an outstanding holiday. We have seen some 
            magical sights. NatBay quoted in Outstanding services.
          </Text>
        </View>

        <View style={styles.container4} />

        <View style={styles.innerContainer2}>
          <Text style={HomeTheme.paraStyle3}>
            Very unique tour, highly recommend if you love all things geeky odd and technology! 
            We wished the tour was longer than it was. Catered to our every whim. Knowledgeable 
            and flexible. Helpful in every way. earsmickey quoted in Great Guide.
          </Text>
        </View>

        <View style={styles.container4} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container4: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  innerContainer2: {
    borderRadius: 4,
    width: 300,
    height: 100,
    backgroundColor: "orange",
    alignSelf: "center",
  },
});

export default BelowContent;