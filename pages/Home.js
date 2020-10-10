import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import HeaderBar from "../components/HeaderBar";
import AboveContent from "../components/AboveContent";
import BelowContent from "../components/BelowContent";
import BelowFooter from "../components/BelowFooter";

class Home extends Component {
    render(){
        return(
            <ScrollView>
                <HeaderBar/>

                <Button title="Destinations page"  onPress={() => {
                    this.props.navigation.navigate("Destinations");
                }} />

                <Button title="Stuff To Do page" onPress={() => {
                    this.props.navigation.navigate("StuffToDo");
                }} />

                <Button title="Plan Your Trip page" onPress={() => {
                    this.props.navigation.navigate("PlanYourTrip");
                }} />

                <Button title="Enquiry Form page" onPress={() => {
                    this.props.navigation.navigate("EnquiryForm");
                }} />

                <AboveContent/>
                <BelowContent/>
                <BelowFooter/>

            </ScrollView>
        );
    }
}

export default Home;