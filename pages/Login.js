import { View, StyleSheet, StatusBar } from "react-native"
import { NativeBaseProvider, Box,  Text, ScrollView, Stack, Input, FormControl, Heading } from 'native-base';

import Botao from '../components/Botao';

const Login = () =>{
    const Campo = () => {
        return <ScrollView w="100%">
            <Stack space={2.0} alignSelf="center" px="3" safeArea mt="150" w={{
            base: "100%",
            md: "25%"
          }}>
              <Box>
                <Text bold fontSize="xl" mb="1" color="white">
                  Cadastre-se
                </Text>
                <FormControl mb="5">
                  <FormControl.Label>Digite seu e-mail</FormControl.Label>
                  <Input />
                </FormControl>
            
                <Botao alignItems='center' style={styles.botao2} text='Cadastre' onPress={() => console.log('pegou doidão')}/>
              </Box>
            </Stack>
          </ScrollView>;
      };
      return (
        <NativeBaseProvider>
        <View style={styles.container}>
        <Campo/>
          <StatusBar style="auto" />
        </View>
        </NativeBaseProvider>
      );
}

export default Login


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#48378e'
    },
    botao:{
      backgroundColor: "#FF0000",
      margin: 20,
      padding: 10,
      width: 70,
      height: 32
    },
    botao2: {
      backgroundColor: "#FF00FF",
      width: 70,
      height: 32,
      margin: 1,
    }
  });