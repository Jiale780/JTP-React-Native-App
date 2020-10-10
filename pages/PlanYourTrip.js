import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import PlanTripTheme from "../css/PlanTripTheme";
import ReuseHeaderBar from "../components/ReuseHeaderBar";
import PlanTripCont from "../components/PlanTripCont";
import BelowFooter from "../components/BelowFooter";

class PlanYourTrip extends Component {
    render(){
        return(
            <ScrollView>

                <ReuseHeaderBar/>
                <PlanTripCont/>
                <BelowFooter/>

            </ScrollView>
        );
    }
}

export default PlanYourTrip;