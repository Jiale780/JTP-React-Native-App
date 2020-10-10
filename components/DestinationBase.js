import React, {Component} from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import {Card} from "react-native-elements";
import DestinationTheme from "../css/DestinationTheme";
import OkayamaCastle from "../img/Okayama_Castle.jpg";
import SuwaTaishaShrine from "../img/Suwa-Taisha_Shrine.jpg";
import Shirakawago from "../img/Shirakawago.jpg";
import MatsumotoCastle from "../img/Matsumoto_Castle.jpg";
import MtFuji from "../img/MtFuji.jpg";

class DestinationBase extends Component {
  render() {
    return (
      <View>
        <Image source={OkayamaCastle} style={DestinationTheme.imageCastle2} />

        <View style={styles.container2} />

        <Text style={DestinationTheme.headingText1}> Destination of places </Text>

        <View style={styles.container2} />

        <View style={DestinationTheme.columnDivider1}>
          <View style={DestinationTheme.rowDivider1}>
            <Card style={DestinationTheme.OuterCard3}>
              <Image source={SuwaTaishaShrine} style={DestinationTheme.image4}/>
              <Text>
                The Suwa region at {"\n"}the foot of the {"\n"}Yatsugatake {"\n"}Mountains is a 
                land {"\n"}of myth and legends. {"\n"}4 complexes around {"\n"}Lake Suwa make up
                {"\n"}Suwa Taisha Shrine, a {"\n"}living repository of {"\n"}Shinto ritual lore
                {"\n"}and the spiritual heart {"\n"}of the area.
              </Text>
            </Card>
            <Card style={DestinationTheme.OuterCard4}>
              <Image source={Shirakawago} style={DestinationTheme.image5} />
              <Text>
                In the shadow of {"\n"}Mt. Hakusan, {"\n"}Shirakawa-go is one of {"\n"}Gifu's
                must-visit {"\n"}destinations. {"\n"}Recognized by {"\n"}UNESCO as a World
                {"\n"}Heritage Site, this {"\n"}beautiful traditional {"\n"}village is the
                {"\n"}definition of {"\n"}picture-postcard {"\n"}perfect.
              </Text>
            </Card>
          </View>
        </View>

        <View style={styles.container2} />

        <View style={DestinationTheme.columnDivider2}>
          <View style={DestinationTheme.rowDivider2}>
            <Card style={DestinationTheme.OuterCard5}>
              <Image source={MatsumotoCastle} style={DestinationTheme.image6}/>
              <Text>
                Matsumoto Castle {"\n"}(松本城, {"\n"}Matsumotojō) is one {"\n"}of the most {"\n"}complete 
                and {"\n"}beautiful among {"\n"}Japan's original {"\n"}castles. It is a {"\n"}"hirajiro" - 
                a castle {"\n"}built on plains {"\n"}rather than on a hill {"\n"}or mountain.  The {"\n"}
                castle structures, in {"\n"}combination with {"\n"}their characteristic {"\n"}black wainscoting, 
                {"\n"}give off an air {"\n"}of grandeur, poise.
              </Text>
            </Card>
            <Card style={DestinationTheme.OuterCard6}>
              <Image source={MtFuji} style={DestinationTheme.image7} />
              <Text>
                Mount Fuji (富士山, {"\n"}Fujisan) is with 3776 {"\n"}meters Japan's highest {"\n"}mountain. 
                It is not {"\n"}surprising that the {"\n"}nearly perfectly {"\n"}shaped volcano has {"\n"}
                been worshiped as a {"\n"}sacred mountain and {"\n"}experienced big {"\n"}popularity among 
                {"\n"}artists and common {"\n"}people throughout the {"\n"}centuries. Mount Fuji {"\n"}is 
                an active volcano, {"\n"}which most recently {"\n"}erupted in 1707.
              </Text>
            </Card>
          </View>
        </View>

        <View style={styles.container2} />
        
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
});

export default DestinationBase;