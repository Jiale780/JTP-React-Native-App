import React, {Component} from "react";
import {StyleSheet, View, Text, Image, SectionList, TouchableOpacity, LogBox, Button, TouchableHighlight } from "react-native";
import PlanTripTheme from "../css/PlanTripTheme";
import Yamagata from "../img/Yamagata.jpg";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

class PlanTripCont extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ButtonText: "Learn More",
        
      data:[
        {
          title:"Planning of your useful and meaningful trip", 
          data:[
            {key:1, 
            description:"If you do find yourself in a situation that requires serious help, dial 110 for an urgent call to the police and 119 for fire or ambulance.", 
            image:"https://bit.ly/3g6t3Oe"},
            {key:2, 
            description:"Japan's official language is Japanese, but English is generally understood in major cities and designated tourist sites.", 
            image:"https://bit.ly/2P76tsU"},
            {key:3, 
            description:"Wireless hotspots are popping up all over major cities in Japan, so you should never be too far from a Wi-Fi connection.", 
            image:"https://bit.ly/2BDxSj0"},
            {key:4, 
            description:"All of Japan sits within the same time zone, and no daylight saving is practiced. The country is nine hours ahead of GMT.", 
            image:"https://bit.ly/3gd0n67"},
            {key:5, 
            description:"Following a general travelers code of respect for the people you meet and places you visit will stand you in good stead.", 
            image:"https://bit.ly/39Dpj4f"},
            {key:6, 
            description:"The Japanese yen is used throughout the country and you can exchange foreign currency at the airports and most major banks.", 
            image:"https://bit.ly/30832bG"},
            {key:7, 
            description:"Make your journeys as smooth as the public transportation you will ride on by purchasing a chargeable IC travel card.", 
            image:"https://bit.ly/2EzvaMR"},
            {key:8, 
            description:"Travelers from 68 countries across the globe can visit Japan for up to 90 days without requiring a visa.", 
            image:"https://bit.ly/30ahUGP"},
          ]
        },
      ]
    }
  }

  PressedBtn = () => {
    this.setState({ ButtonText: "Learn More" });
  }

  render() {
    return (
      <View>
        <Image source={Yamagata} style={PlanTripTheme.HotSpringImage} />

        <View style={styles.container7} />

        <Text style={PlanTripTheme.headingText4}> Plan your virtual trip forward with a great resolution! </Text>

        <View style={styles.container8} />

        <Text style={PlanTripTheme.paraStyle4}>
            It is easy to feel a little overwhelmed and disoriented when you visit Japan for
            the first time, so find out the basics before you fly and get acquainted with the
            country through our helping you plan guide.
        </Text>

        <Text style={PlanTripTheme.paraStyle5}>
            Learn a little more about Japan's customs, culture and Wi-Fi connectivity, as well as its
            seasonal weather, geography and luggage delivery options. Many of the questions first-time
            travelers might have are answered here, along with insider tips and practical advice to
            help you navigate the country with confidence.
        </Text>

        <View style={styles.container7} />

        <SectionList
          sections={this.state.data}
          renderSectionHeader={({section}) => {
            return (
              <View style={PlanTripTheme.titleContainer1}>
                <Text style={PlanTripTheme.title}>
                  {section.title}
                </Text>
              </View>
            )
          }}
          renderItem={({item}) => {
            return (
            <View style={PlanTripTheme.Container1}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={PlanTripTheme.image} source={{uri: item.image}}/>
              </TouchableOpacity>
              <View style={PlanTripTheme.content1}>
                <View style={PlanTripTheme.contentHeader1}>
                  <Text style={PlanTripTheme.description}>{item.description} </Text>
                </View>
                <TouchableHighlight onPress={this.PressedBtn} style={PlanTripTheme.ButtonText}>
                    <Text>{this.state.ButtonText}</Text>
                </TouchableHighlight>
              </View>
            </View>
            )
        }}/>
        
        <View style={styles.container7} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container7: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  container8: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
});

export default PlanTripCont;