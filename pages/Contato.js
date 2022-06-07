import { StyleSheet, View, Image, StatusBar, Text, Linking } from 'react-native';
import { NativeBaseProvider, Box, Button,  ScrollView, Stack, Input, FormControl, Heading } from 'native-base';


export default function Contato(){
        return(
          <View style={styles.container}>
              <Heading style={styles.head}>Contato</Heading>
              <View style={{border : '1px solid green', height: 400}}>
              <Text style={styles.text} onPress={() => Linking.openURL('https://placamae.org/')}>https://placamae.org/</Text>
                  <Text style={styles.text}>contato@placamae.org</Text>
                  <Text style={styles.text}>Rua Marques do Herval, 167/902 Box 31,</Text>
                  <Text style={styles.text}>CEP 50020-030</Text>
              </View>
          </View>
          )
      };

    const styles = StyleSheet.create({
        container: {
          flex: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#48378e',
          border : "1px solid red"
        },

        text : {
          color : 'white',
          fontFamily: "Helvetica Neue"
        },

        head: {
          
          color: 'white',
          top: 0,
        }
        
      });