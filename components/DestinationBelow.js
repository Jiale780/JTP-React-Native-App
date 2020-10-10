import React, {Component} from "react";
import {StyleSheet, View, Text, Image, ImageBackground} from "react-native";
import {Card} from "react-native-elements";
import DestinationTheme from "../css/DestinationTheme";
//import ChureitoPagoda from "../img/Chureito_Pagoda.jpg";
//import OuchiJuku from "../img/Ouchi_juku.jpg";
//import OsakaCastle from "../img/Osaka_Castle.jpg";

class DestinationBelow extends Component {
  render() {
    return (
      <View>
        <View style={styles.container3} />

        <Text style={DestinationTheme.headingText2}> More Destination Galleries </Text>

        <Card style={DestinationTheme.OuterCard7}>
            <ImageBackground source={require("../img/Chureito_Pagoda.jpg")} style={DestinationTheme.backImage1}>
                <Text style={DestinationTheme.innerText1}>Mt. Fuji</Text>
            </ImageBackground>
            <Text style={DestinationTheme.DescriptionText1}>
                The Chureito Pagoda (忠霊塔, Chūreitō) is a five storied pagoda on the mountainside 
                overlooking Fujiyoshida City and Mount Fuji off in the distance. The pagoda is part of 
                the Arakura Sengen Shrine and was built as a peace memorial in 1963 nearly 400 steps up 
                the mountain from the shrine's main buildings. 
            </Text>
        </Card>

        <View style={styles.container3} />

        <Card style={DestinationTheme.OuterCard8}>
            <ImageBackground source={require("../img/Ouchi_juku.jpg")} style={DestinationTheme.backImage2}>
                <Text style={DestinationTheme.innerText2}>Ouchi Juku</Text>
            </ImageBackground>
            <Text style={DestinationTheme.DescriptionText2}>
                Ouchijuku (大内宿, Ōuchijuku) is a former post town along the Aizu-Nishi Kaido trade route, 
                which connected Aizu with Nikko during the Edo Period. Restrictions set by the shogunate 
                required travelers to make their long journeys on foot and as a result, post towns 
                developed along the routes to provide travelers with food, accommodations and rest. 
            </Text>
        </Card>

        <View style={styles.container3} />

        <Card style={DestinationTheme.OuterCard9}>
            <ImageBackground source={require("../img/Osaka_Castle.jpg")} style={DestinationTheme.backImage3}>
                <Text style={DestinationTheme.innerText3}>Osaka Castle</Text>
            </ImageBackground>
            <Text style={DestinationTheme.DescriptionText3}>
                The construction of Osaka Castle (大阪城, Ōsakajō) started in 1583 on the former site of 
                the Ishiyama Honganji Temple, which had been destroyed by Oda Nobunaga thirteen years 
                earlier. Toyotomi Hideyoshi intended the castle to become the center of a new, unified 
                Japan under Toyotomi rule. It was the largest castle at the time.
            </Text>
        </Card>
        
        <View style={styles.container3} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
});

export default DestinationBelow;