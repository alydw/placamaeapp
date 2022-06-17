import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { NativeBaseProvider, Box, Button, Text, ScrollView, Stack, Input, FormControl, Heading } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Botao from '../components/Botao';

export default function Principal({navigation}) {


  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <Image 
    style={styles.image}
    source={require('../assets/logo.png')}
    />
    <Heading style={styles.head}>Bem-vindo a Placamãe</Heading>
    <Botao alignItems='center' style={styles.botao2} text='Cadastre-se' onPress={() => navigation.navigate('Cadastro')}/>
    <Botao alignItems='center' style={styles.botao2} text='Login' />
    <Botao alignItems='center' style={styles.botao} text='Entrar sem login' onPress={() => navigation.navigate('Tabs2')}/>
    </View>
    
    </NativeBaseProvider>
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
    marginBottom: 10,
  },
  head: {
      color: 'white',
      margin: 10
  },
  botao:{
    backgroundColor: "#FF00FF",
    width: 120,
    height: 35,
    margin: 10,
    borderRadius: 50,
  },
  botao2: {
    backgroundColor: "#FF00FF",
    width: 95,
    height: 35,
    margin: 10,
    borderRadius: 50,
  },
  
});