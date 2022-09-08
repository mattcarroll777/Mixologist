import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './components/HomeScreen';
import { SingleDrinkView } from './components/SingleDrinkView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Drink" component={SingleDrinkView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
