import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import EnquiryFormTheme from "../css/EnquiryFormTheme";
import ReuseHeaderBar from "../components/ReuseHeaderBar";
import EnquiryTop from "../components/EnquiryTop";
import EnquiryFormCont from "../components/EnquiryFormCont";
import BelowFooter from "../components/BelowFooter";

class EnquiryForm extends Component {
    render(){
        return(
            <ScrollView>

                <ReuseHeaderBar/>
                <EnquiryTop/>
                <EnquiryFormCont/>
                <BelowFooter/>

            </ScrollView>
        );
    }
}

export default EnquiryForm;