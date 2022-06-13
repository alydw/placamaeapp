import { StyleSheet, View, Image, Linking } from 'react-native';
import { Heading , Box, NativeBaseProvider,Text} from 'native-base';
import { SiInstagram } from "react-icons/si";
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Contato({navigation}){
        return(
          <NativeBaseProvider>
          <View style={styles.container}>
            <Image 
            style={styles.image}
            source={require('../assets/logo.png')}
            />
            <Text></Text>
            <Box style={styles.inicio}></Box>
              <Heading color="white">Contato</Heading>
              <Text style={styles.text}></Text>
              <Text style={styles.text} onPress={() => Linking.openURL('https://placamae.org/')}>https://placamae.org/</Text>
              <Text style={styles.text} onPress={() => Linking.openURL('https://www.instagram.com/placamae.org_/')}><SiInstagram color="white"/> placamae.org_</Text>
                  <Text style={styles.text}>contato@placamae.org</Text>
                  <Text style={styles.text}>Rua Marques do Herval, 167/902 Box 31,</Text>
                  <Text style={styles.text}>CEP 50020-030</Text>
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
        text: {
          color: 'white',
          width: 305,
          height: 85,
          margin: 8,
        },
        image: {
        width: 190,
        height: 70,
        top: 3,
        marginBottom: 10,
       
  },
        
      });