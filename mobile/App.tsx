import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home_page';
import Fabrics_Page from './components/fabrics_page';
import Closet_Page from './components/closet_page';
import Designs_Page from './components/designs_page';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="designs" component={Designs_Page} options={{ title: 'Designs' }} />
        <Stack.Screen name="fabrics" component={Fabrics_Page} options={{ title: 'Fabrics' }} />
        <Stack.Screen name="closet" component={Closet_Page} options={{ title: 'Closet' }} />
      </Stack.Navigator>
      <StatusBar style="auto" hidden={false}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
