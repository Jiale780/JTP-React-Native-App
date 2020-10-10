import React, {Component} from "react";
import {StyleSheet, View, Text, Image, SectionList, TouchableOpacity, LogBox } from "react-native";
import {Card} from "react-native-elements";
import StuffToDoTheme from "../css/StuffToDoTheme";
import TokyoStation from "../img/TokyoStation.jpg";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

class StuffToDoCont extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {
          title:"Shrine", 
          data:[
            {key:1, 
            description:"Fushimi Inari Shrine (伏見稲荷大社, Fushimi Inari Taisha) is an important Shinto shrine in southern Kyoto.", 
            image:"https://bit.ly/2WUpXWc"},
          ]
        },
        {
          title:"Historic Site", 
          data:[
            {key:2, 
            description:"The Higashiyama District (東山) along the lower slopes of Kyoto's eastern mountains is one of the city's best preserved historic districts.", 
            image:"https://bit.ly/3g2l70n"},
          ]
        },
        {
          title:"Anime and Manga", 
          data:[
            {key:3, 
            description:"The Tokyo Anime Center is a permanent facility that has been created, to market anime to residents of Japan, as well as foreign visitors.", 
            image:"https://bit.ly/39vg5Ho"},
          ]
        },
        {
          title:"Food and Drink", 
          data:[
            {key:4, description:"Unadon is a classic Japanese dish that consists of steamed rice topped with grilled eel fillets that are glazed with a sweetened soy-based sauce (called tare) and caramelized, preferably over charcoal fire. Unadon is a short word for Unagi (eel) Donburi (rice bowl dish).", 
            image:"https://bit.ly/2OXBG1C"},
          ]
        },
      ]
    }
  }

  render() {
    return (
      <View>
        <Image source={TokyoStation} style={StuffToDoTheme.imageStation} />

        <View style={styles.container5} />

        <Text style={StuffToDoTheme.headingText3}> What type of things would you interests? </Text>

        <View style={styles.container6} />

        <View style={StuffToDoTheme.innerContainer3}>
          <Text style={StuffToDoTheme.paraStyle4}>
            Find inspiration for your Japan vacation, from sightseeing in the city and cultural 
            immersion in the countryside to top picks and suggested itineraries. {"\n"} {"\n"}

            Arrive in Japan with a game plan. Discover the many events and festivals, temples and
            castles, theme parks and hot springs, beaches and outdoor activities that Japan has to
            offer. Whether you're passionate about sports, an art lover, a nature enthusiast, a
            history buff, a foodie, or just looking to relax on a beach, the possibilities for your
            Japan journey are endless.
          </Text>
        </View>

        <View style={styles.container5} />

        <SectionList
          sections={this.state.data}
          renderSectionHeader={({section}) => {
            return (
              <View style={StuffToDoTheme.titleContainer1}>
                <Text style={StuffToDoTheme.title}>
                  {section.title}
                </Text>
              </View>
            )
          }}
          renderItem={({item}) => {
            return (
            <View style={StuffToDoTheme.Container1}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={StuffToDoTheme.image} source={{uri: item.image}}/>
              </TouchableOpacity>
              <View style={StuffToDoTheme.content1}>
                <View style={StuffToDoTheme.contentHeader1}>
                  <Text style={StuffToDoTheme.description}>{item.description}</Text>
                </View>
              </View>
            </View>
            )
        }}/>
        
        <View style={styles.container5} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container5: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  container6: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
});

export default StuffToDoCont;