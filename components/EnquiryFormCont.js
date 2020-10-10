import React, {Component} from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, AppRegistry, Alert } from "react-native";
import { Picker } from "@react-native-community/picker";
import CheckBox from "@react-native-community/checkbox";
import EnquiryFormTheme from "../css/EnquiryFormTheme";

class EnquiryFormCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      inquiryType: null,
      description: "",
      placeResidence: null,
      checkBox: null,
      msgDisplay: false,
      msg: "",
    };
  }

  ChangefullName = (text) => {
    this.setState({msgDisplay: true, fullName: text});
  };

  ChangeEmail = (text) => {
    this.setState({msgDisplay: true, email: text});
  };

  ChangeInquiryType = (inquiryType) => {
    this.setState({msgDisplay: true, inquiryType: inquiryType});
  };

  ChangeDesc = (text) => {
    this.setState({msgDisplay: true, description: text});
  };

  ChangeCheckBox = (checkBox) => {
    this.setState({msgDisplay: true, checkBox: checkBox});
  };

  ChangePlaceResidence = (placeResidence) => {
    this.setState({msgDisplay: true, placeResidence: placeResidence});
  };

  submitBtn = (fullName, email, inquiryType, description, checkBox, placeResidence) => {
    var emailRegExp = /^(([^<>()\[\]\\.,;;\s@"]+([^<>()\[\]\\.,;;\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-z\-0-9]+\.)+[a-zA-z]{2,}))$/;

    if (fullName !== "" && email !== "" && inquiryType !==null &&  description !== "" && 
        checkBox !== null && placeResidence !== null) {
      this.setState({msgDisplay: true, msg: "Successfully enter with all fields correctly!"});
    } 
    else if (fullName.length < 8) {
      this.setState({ msgDisplay: true, msg: "Invalid Full Name. Please provide the full name with the minimum 8 characters!"});
    } 
    else if (email.search(emailRegExp) == -1) {
      this.setState({msgDisplay: true, msg: "Invalid Email. Please provide a correct email address!"});
    } 
    else if (inquiryType === null) {
      this.setState({ msgDisplay: true, msg: "Invalid Inquiry. Please select the inquiry!" })
    }
    else if (description.length < 11) {
      this.setState({ msgDisplay: true, msg: "Invalid Description. Please provide the description with minimum 11 characters!"});
    } 
    else if (checkBox === null) {
      this.setState({ msgDisplay: true, msg: "Invalid checkbox. Please provide the checkbox!"});
    } 
    else if (placeResidence === null) {
      this.setState({ msgDisplay: true, msg: "Invalid Place of Residence. Please select the Place of Residence!" })
    }
    else {
      this.setState({msgDisplay: true, msg: "Please provide your feedback!"});
    }
  };

  render() {
    if (this.state.msg === "Successfully enter with all fields correctly!") {
      alert(
        "Thanks for your precious feedback." + "\n" + "\n" + "Your Full Name: " + this.state.fullName + 
        "\n" + "Your Email: " + this.state.email + "\n" + "Inquiry Type: " + this.state.inquiryType + 
        "\n" + "Your Description: " + this.state.description + "\n" + "Place of Residence: " + this.state.placeResidence
      );
    }
    return (
      <View style={EnquiryFormTheme.Container1}>

        <Text style={EnquiryFormTheme.headingText}> Enquiry Form </Text>
        <View style={EnquiryFormTheme.container12}>

          <View style={styles.container13} />
          <Text style={EnquiryFormTheme.text1}> Full Name </Text>

          <TextInput style={EnquiryFormTheme.input} placeholder="Full Name" onChangeText={this.ChangefullName}/>

          <View style={styles.container13} />
          <Text style={EnquiryFormTheme.text1}> Email Address </Text>

          <TextInput style={EnquiryFormTheme.input} placeholder="Email" onChangeText={this.ChangeEmail}/>

          <View style={styles.container13} />
          <Text style={EnquiryFormTheme.text1}> Select your inquiry type </Text>

          <Picker style={EnquiryFormTheme.pickerStyle1} selectedValue={this.state.inquiryType} 
          onValueChange={this.ChangeInquiryType}>
            <Picker.Item label = "Select Inquiry Type" value = "InquiryType" selected />
            <Picker.Item label = "Maps and Brochures Request" value = "Maps and Brochures Request" />
            <Picker.Item label = "Transportation / Access" value = "Transportation / Access" />
            <Picker.Item label = "Destinations" value = "Destinations" />
            <Picker.Item label = "Festivals and Events" value = "Festivals and Events" />
            <Picker.Item label = "Accommodation" value = "Accommodation" />
            <Picker.Item label = "Food and Drink" value = "Food and Drink" />
            <Picker.Item label = "Shopping" value = "Shopping" />
            <Picker.Item label = "Plan your trip" value = "Plan your trip" />
            <Picker.Item label = "Companies and Organizations" value = "Companies and Organizations" />
            <Picker.Item label = "Complaint" value = "Complaint" />
            <Picker.Item label = "Others" value = "Others" />
          </Picker>

          <View style={styles.container13} />
          <Text style={EnquiryFormTheme.text1}> Description </Text>

          <TextInput style={EnquiryFormTheme.textArea} multiline={true} 
          numberOfLines={10} placeholder="Please provide for your description" onChangeText={this.ChangeDesc} />

          <View style={styles.container13} />
          <Text style={EnquiryFormTheme.text1}> Please read and acknowledge of this &nbsp;inquiry below </Text>
          
          <View style={EnquiryFormTheme.checkboxContainer}> 
            <CheckBox value={this.state.checkBox} onValueChange={this.ChangeCheckBox} style={EnquiryFormTheme.checkbox1} />
            <Text style={EnquiryFormTheme.label}>I agree and acknowledge to this information gathered &nbsp; &nbsp;
            in the inquiry</Text>
          </View>

          <View style={styles.container13} />
          <Text style={EnquiryFormTheme.text1}> Select your country </Text>

          <Picker style={EnquiryFormTheme.pickerStyle1} selectedValue={this.state.placeResidence} 
          onValueChange={this.ChangePlaceResidence}> 
            <Picker.Item label = "Select Which Country" value = "Country" selected />
            <Picker.Item label = "Africa" value = "Africa" />
            <Picker.Item label = "Asia" value = "Asia" />
            <Picker.Item label = "South East Asia" value = "South East Asia" />
            <Picker.Item label = "Europe" value = "Europe" />
            <Picker.Item label = "Middle East" value = "Middle East" />
            <Picker.Item label = "North America" value = "North America" />
            <Picker.Item label = "South America" value = "South America" />
            <Picker.Item label = "Oceania" value = "Oceania" />
            <Picker.Item label = "Others" value = "Others" />
          </Picker>

          <View style={EnquiryFormTheme.BtnContainer1}> 
            <View style={EnquiryFormTheme.displayButton1}> 
              <TouchableOpacity onPress={() => 
              this.submitBtn(this.state.fullName, this.state.email, this.state.inquiryType,
              this.state.description, this.state.checkBox, this.state.placeResidence)}>
                <Text style={EnquiryFormTheme.submitButtonText1}> Submit </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={EnquiryFormTheme.errorMsg}>{this.state.msg}</Text>

          <View style={styles.container11} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container11: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  container12: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
  container13: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
});

export default EnquiryFormCont;