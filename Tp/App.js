import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const HomeScreen = require("./screens/HomeScreen");
const QuoteScreen = require("./screens/QuotesScreen");

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>

        <Drawer.Screen name="Quotes" component={QuoteScreen}/>
      </Drawer.Navigator>
      </NavigationContainer>
  );
}
