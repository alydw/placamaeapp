import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Linking} from 'react-native';
import { NativeBaseProvider, Box, Button, Text,Heading, Center, Skeleton, Image, VStack} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Botao from '../components/Botao';
import React, { useState } from "react";
import { SiInstagram } from "react-icons/si";

export default function Principal({navigation}) {

  const Info = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [text, setText] = useState("");
    setTimeout(() => {
      setIsLoaded(true);
      setText("No post de ontem conversamos com vocês sobre o que é Ciberbullying e hoje trouxemos o último resultado da nossa pesquisa.");
    }, 0);
    return <Center w="100%">
        <Box w="90%" maxWidth="400">
          <VStack maxWidth="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
          borderColor: "coolGray.500"
        }} _light={{
          borderColor: "coolGray.200"
        }}>
            <Skeleton h="40" isLoaded={isLoaded}>
              <Image h="40" source={require('../assets/material.png')} />
            </Skeleton>
            <Skeleton.Text lines={4} px="4" isLoaded={isLoaded}>
              <Text px="4" fontSize={"md"} lineHeight={"20px"} color="white">
                {text}
              </Text>
            </Skeleton.Text>
            <Skeleton px="4" mb="4" rounded="md" startColor="primary.100" isLoaded={isLoaded}>
              <Button m="4" onPress={() => Linking.openURL('https://www.instagram.com/p/CbcwnRRu0ds/?igshid=YmMyMTA2M2Y%3D')}>Ver mais</Button>
            </Skeleton>
          </VStack>
        </Box>
      </Center>;
  };

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <Image 
    style={styles.image}
    source={require('../assets/logo.png')}
    />
    <Heading style={styles.head}>Material</Heading>
    <Info></Info>
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
    position: 'absolute',
    top: 3,
    marginBottom: 10,
  },
  head: {
      color: 'white',
      padding: 2
  },
  image2: {
    width: 300,
    height: 400
  }
  
});