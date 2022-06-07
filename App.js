import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { NativeBaseProvider, Box, Button, Text, ScrollView, Stack, Input, FormControl, Heading } from 'native-base';
import Tabs from "./navigation/Tabs"
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './navigation/Stacks';
import { useState } from 'react';

export default function App() {

  const [signIn, setSignIn] = useState(false)

  return (
    <NavigationContainer>
    <NativeBaseProvider>
    {
      signIn ? 
      <Tabs></Tabs>
       : 
       <Stacks/>
    }
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48378e',
  },
  image: {
    width: 190,
    height: 70,
    position: 'absolute',
    top: 3,
    marginBottom: 10,
  },
  botao:{
    backgroundColor: "#FF0000",
    width: 80,
    height: 40,
  },
  text: {
    color: 'white',
    width: 305,
    height: 85,
    margin: 8,
  },
  inicio: {
    alignItems: 'center',
    margin: 30,
  },
  imagebox: {
    width: 300,
    height: 200,
    margin: 40,
  }
});
