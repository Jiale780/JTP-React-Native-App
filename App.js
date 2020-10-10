import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/Home";
import DestinationsScreen from "./pages/Destinations";
import StuffToDoScreen from "./pages/StuffToDo";
import PlanYourTripScreen from "./pages/PlanYourTrip";
import EnquiryFormScreen from "./pages/EnquiryForm";

const Stack = createStackNavigator(); 

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{
          headerStyle: { backgroundColor: "#0093e9" }, headerTintColor: "#fff" }}/>
          <Stack.Screen name="Destinations" component={DestinationsScreen} options={{
          headerStyle: { backgroundColor: "#0093e9" }, headerTintColor: "#fff" }}/>
          <Stack.Screen name="StuffToDo" component={StuffToDoScreen} options={{
          headerStyle: { backgroundColor: "#0093e9" }, headerTintColor: "#fff" }}/>
          <Stack.Screen name="PlanYourTrip" component={PlanYourTripScreen} options={{
          headerStyle: { backgroundColor: "#0093e9" }, headerTintColor: "#fff" }}/>
          <Stack.Screen name="EnquiryForm" component={EnquiryFormScreen} options={{
          headerStyle: { backgroundColor: "#0093e9" }, headerTintColor: "#fff" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;