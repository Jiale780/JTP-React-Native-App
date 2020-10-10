import React, {Component} from "react";
import {StyleSheet} from "react-native";

const EnquiryFormTheme = StyleSheet.create({
  JapanRobotImage: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    resizeMode: "stretch",
  },
  Container1: {
    flex: 1,
    padding: 20,
  },
  headingText: {
    textAlign: "center",
    fontSize: 26,
    color: "#6A5ACD",
  },
  errorMsg: {
    color: "red",
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  textArea:{
    margin: 10,
    height: 80,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox1: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  pickerStyle1:{  
    height: 40,  
    width: "100%", 
    color: "#344953",  
    justifyContent: "center",  
    borderWidth: 1, 
  },  
  BtnContainer1: {
    flex: 1, 
    flexDirection: "row", 
  },
  displayButton1: {
    width: 80,
    height: 40,
    paddingTop: 10,
    margin: 10,
    backgroundColor: "blue",
  },
  submitButtonText1: {
    textAlign: "center",
    color: "white", 
  },
  displayButton2: {
    width: 80,
    height: 40,
    paddingTop: 10,
    backgroundColor: "blue",
    margin: 10,
  },
  submitButtonText2: {
    textAlign: "center",
    color: "white",
  },
  text1: {
    flex: 1,
    fontSize: 18,
    padding: 5,
    color: "#4169E1",
    fontWeight: "bold",
  },
});

export default EnquiryFormTheme;