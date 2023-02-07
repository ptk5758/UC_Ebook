import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './page/Home';
import Book from './page/Book';
const Stack = createNativeStackNavigator();
export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{title : "Home"}}/>
        <Stack.Screen name="book" component={Book} options={{title : "동화"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}