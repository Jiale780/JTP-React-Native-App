import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import StuffToDoTheme from "../css/StuffToDoTheme";
import ReuseHeaderBar from "../components/ReuseHeaderBar";
import StuffToDoCont from "../components/StuffToDoCont";
import BelowFooter from "../components/BelowFooter";

class StuffToDo extends Component {
    render(){
        return(
            <ScrollView>

                <ReuseHeaderBar/>
                <StuffToDoCont/>
                <BelowFooter/>

            </ScrollView>
        );
    }
}

export default StuffToDo;