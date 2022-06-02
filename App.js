import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { NativeBaseProvider, Box, Button, Text, ScrollView, Stack, Input, FormControl, Heading } from 'native-base';

export default function App() {

  const Botao = () => {
    return <Box alignItems="center">
        <Button
         style={styles.botao}
         onPress={() => console.log("hello world")}>Denuncie</Button>
      </Box>;
  };

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <Image 
    style={styles.image}
    source={require('./assets/logo.png')}
    />
    <Box style={styles.inicio}>
    <Heading color="white">Cyberbullyling</Heading>
    <Text style={styles.text}>Cyberbullying é o bullying realizado por meio das tecnologias digitais. 
      Pode ocorrer nas mídias sociais, plataformas de mensagens, plataformas de jogos 
      e celulares. É o comportamento repetido, com intuito de assustar, enfurecer ou 
      envergonhar aqueles que são vítimas.</Text>
      <Image 
      style={styles.imagebox}
      source={require('./assets/foto.jpg')}
      />
      </Box>
      <Botao></Botao>
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48378e'
  },
  image: {
    width: 190,
    height: 70,
  },
  botao:{
    backgroundColor: "#FF0000",
    width: 70,
    height: 32,
  },
  text: {
    color: 'white',
    width: 300,
    height: 20,
    margin: 10,
  },
  inicio: {
    alignItems: 'center',
    margin: 10,
  },
  imagebox: {
    width: 300,
    height: 200,
    margin: 50,
  }
});
