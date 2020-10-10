import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import ReuseHeaderBar from "../components/ReuseHeaderBar";
import DestinationBase from "../components/DestinationBase";
import DestinationBelow from "../components/DestinationBelow";
import BelowFooter from "../components/BelowFooter";

class Destinations extends Component {
    render(){
        return(
            <ScrollView>

                <ReuseHeaderBar/>
                <DestinationBase/>
                <DestinationBelow/>
                <BelowFooter/>

            </ScrollView>
        );
    }
}

export default Destinations;