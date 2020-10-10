import React, {Component} from "react";
import {StyleSheet} from "react-native";

const HomeTheme = StyleSheet.create({
  Navigation: {
    backgroundColor: "#0093e9",
    flex: 1,
    paddingTop: 100,
  },
  Logo: {
    width: 50,
    height: 50,
  },
  normalText1: {
    textAlign: "center",
    fontSize: 20,
    flexDirection: "row",
    top: 0,
    height: 30,
    color: "purple",
  },
  noticeContainer: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    backgroundColor: "grey",
  },
  noticeText1: {
    textAlign: "center",
    fontWeight: "bold",
  },
  container1: {
    flex: 1,
    paddingTop: 100,
  },
  imageCastle1: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    resizeMode: "stretch",
  },
  textStyle1: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    color: "blue",
    fontWeight: "bold",
  },
  paraStyle1: {
    textAlign: "center",
  },
  paraStyle2: {
    textAlign: "center",
    marginBottom: 10,
  },
  JpnGuideMap: {
    height: 250,
    width: 350,
    alignSelf: "center",
  },
  OuterCard1: {
    flex: 1,
    padding: 10,
  },
  image2: {
    height: 200,
    width: "100%",
    flex: 1,
  },
  OuterCard2: {
    flex: 1,
    padding: 10,
  },
  image3: {
    height: 200,
    width: "100%",
    flex: 1,
  },
  paraStyle3: {
    textAlign: "center",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
  },
});

export default HomeTheme;