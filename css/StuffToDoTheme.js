import React, {Component} from "react";
import {StyleSheet} from "react-native";

const StuffToDoTheme = StyleSheet.create({
  imageStation: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    resizeMode: "stretch",
  },
  headingText3: {
    fontSize: 20,
    textAlign: "center",
    color: "teal",
    fontWeight: "bold",
  },
  innerContainer3: {
    borderRadius: 4,
    width: 300,
    height: 230,
    backgroundColor: "skyblue",
    alignSelf: "center",
  },
  paraStyle4: {
    textAlign: "center",
    marginBottom: 10,
  },
  root1:{
    marginTop: 20,
    padding: 10,
  },
  titleContainer1:{
    shadowColor: "#00000021",
    shadowOffset: {
    width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "#DCDCDC",
    padding: 10,
  },
  title:{
    fontSize: 25,
    color: "#008B8B",
    textAlign: "center",
    fontWeight: "bold",
  },
  Container1: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  content1: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  separator1: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  image:{
    width: 110,
    height: 110,
    marginLeft: 10,
  },
  time1:{
    fontSize: 12,
    color: "#808080",
  },
  description:{
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default StuffToDoTheme;