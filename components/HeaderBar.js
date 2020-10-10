import React, { Component } from "react";
import { StyleSheet, Image, Container, View, Text } from "react-native";
import { Header } from "react-native-elements";
import JTPLogo from "../img/JTPLogo.jpg";
import HomeTheme from "../css/HomeTheme";

const notice = "[Warning Notice] - Coronavirus (COVID-19) advisory information. ";

class HeaderBar extends Component {
    render(){
        return(
            <View style={{ marginTop: 0 }}>
                <Header placement="center" centerComponent={{ text: "Japan Travel Guide Page" }} 
                style={HomeTheme.Navigation}>
                    <Image source={JTPLogo} style={HomeTheme.Logo}/>
                </Header>
                <View style={HomeTheme.noticeContainer}>
                    <Text style={HomeTheme.noticeText1}> 
                        {notice} Read More Info
                    </Text> 
                </View>
                <Text style={HomeTheme.normalText1}>Index Pages</Text>
            </View>
        );
    }
}

export default HeaderBar;