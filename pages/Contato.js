import { StyleSheet, View, Image, StatusBar, Text, Linking } from 'react-native';
import { NativeBaseProvider, Box, Button,  ScrollView, Stack, Input, FormControl, Heading } from 'native-base';
import { SiInstagram } from "react-icons/si";

export default function Contato(){
        return(
          <View style={styles.container}>
            <Image 
            style={styles.image}
            source={require('../assets/logo.png')}
            />

              <Heading style={styles.head}>Contato</Heading>
              <View style={{height: 400}}>
              <Text style={styles.text} onPress={() => Linking.openURL('https://placamae.org/')}>https://placamae.org/</Text>
              <Text style={styles.text} onPress={() => Linking.openURL('https://www.instagram.com/placamae.org_/')}><SiInstagram color="white"/> placamae.org_</Text>
                  <Text style={styles.text}>contato@placamae.org</Text>
                  <Text style={styles.text}>Rua Marques do Herval, 167/902 Box 31,</Text>
                  <Text style={styles.text}>CEP 50020-030</Text>
              </View>
          </View>
          )
      };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#48378e',
        },
        text : {
          color : 'white',
          fontFamily: "Helvetica Neue",
          margin: 2,
          padding: 2
        },
        head: {
          color: 'white',
          top: 0,
        },
        image: {
        width: 190,
        height: 70,
      
        top: 3,
        marginBottom: 10,
       
  },
        
      });