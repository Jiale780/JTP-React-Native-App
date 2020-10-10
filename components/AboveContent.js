import React, {Component} from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Card } from "react-native-elements";
import HomeTheme from "../css/HomeTheme";
import castle1 from "../img/castle1.jpg";
import JapanMap from "../img/JTPG_Map.jpg";
import TokyoTower from "../img/behindTokyoTower.jpg";
import NightStreet from "../img/NightStreet.jpg";

class AboveContent extends Component {
  render() {
    return (
      <View>
        <Image source={castle1} style={HomeTheme.imageCastle1} />

        <View style={styles.container2} />
        
        <View style={styles.innerContainer1}>
          <Text style={HomeTheme.textStyle1}> About Us </Text>
          <Text style={HomeTheme.paraStyle1}>
            Japan Travel Plans was established in 1960. Committed to the
            development of international tourism exchanges JTP is involved in a
            broad range of activities both domestically and worldwide, to
            encourage international tourists from all over the world to visit
            Japan.
          </Text>
        </View>

        <View style={styles.container3} />
        <Text style={HomeTheme.textStyle1}>Japan Map</Text>
        <Image source={JapanMap} style={HomeTheme.JpnGuideMap} />

        <View style={styles.container3} />

        <Card title="Behind of Tokyo Tower" style={HomeTheme.OuterCard1}>
          <Image source={TokyoTower} style={HomeTheme.image2} />
          <Text style={HomeTheme.paraStyle2}>
            Standing 333 meters high in the center of Tokyo, Tokyo Tower (東京タワー) is the world's tallest, 
            self-supported steel tower and 13 meters taller than its model, the Eiffel Tower.
          </Text>
        </Card>

        <View style={styles.container3} />

        <Card title="Tokyo Night Street" style={HomeTheme.OuterCard2}>
          <Image source={NightStreet} style={HomeTheme.image3} />
          <Text style={HomeTheme.paraStyle2}>
            After sunset, there is no lack of activities to enjoy in Tokyo. Sight-seeing, partying, 
            dining or just chilling out, there is always something for everyone to do.
          </Text>
        </Card>

        <View style={styles.container3} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  innerContainer1: {
    borderRadius: 4,
    width: 300,
    height: 160,
    backgroundColor: "grey",
    alignSelf: "center",
  },
  container3: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
});

export default AboveContent;