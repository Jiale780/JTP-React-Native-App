import React, { Component } from "react";
import { StyleSheet, Image, Container, View, Text } from "react-native";
import { Header } from "react-native-elements";
import JTPLogo from "../img/JTPLogo.jpg";
import DestinationTheme from "../css/DestinationTheme";

const notice = "[Warning Notice] - Coronavirus (COVID-19) advisory information. ";

class DestinationHeaderBar extends Component {
    render(){
        return(
            <View style={{ marginTop: 0 }}>
                <Header placement="center" centerComponent={{ text: "Japan Travel Guide Page" }} 
                style={DestinationTheme.Navigation}>
                    <Image source={JTPLogo} style={DestinationTheme.Logo}/>
                </Header>
                <View style={DestinationTheme.noticeContainer}>
                    <Text style={DestinationTheme.noticeText1}> 
                        {notice} Read More Info
                    </Text> 
                </View>
            </View>
        );
    }
}

export default DestinationHeaderBar;