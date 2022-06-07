

import { StyleSheet, View, StatusBar } from 'react-native';
import { NativeBaseProvider, Box,  Text, ScrollView, Stack, FormControl, Input} from 'native-base';
import Botao from '../components/Botao';
import axios from 'axios';
import { useState } from 'react'

const Cadastro = () => {

      const [user, setUser] = useState({
        name: '',
        age: '',
        password: '',
        email: ''
      })

      const cadastrar = () => {
        axios.post("http://localhost:8080/adults", user).then((response) => console.log(response))
      } 
    
        const Cadastro = () => {
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
                      <Input  value={user.email} onChangeText={value => setUser({...user, email: value})}/>
                    </FormControl>
                      
                    <FormControl mb="5">
                      <FormControl.Label>Digite sua senha</FormControl.Label>
                      <Input onChangeText={value => setUser({...user, password: value})} value={user.password}/>
                    </FormControl>

                    <FormControl mb="5">
                      <FormControl.Label>Digite sua idade</FormControl.Label>
                      <Input onChangeText={value => setUser({...user, age: value})} value={user.age}/>
                    </FormControl>

                    <FormControl mb="5">
                      <FormControl.Label>Digite seu nome</FormControl.Label>
                      <Input onChangeText={value => setUser({...user, name: value})} value={user.name}/>
                    </FormControl>
                
                    <Botao alignItems='center' style={styles.botao2} text='Cadastre' onPress={cadastrar}/>
                  </Box>
                </Stack>
              </ScrollView>;
          };
    
          return (
            <NativeBaseProvider>
            <View style={styles.container}>
            <Cadastro></Cadastro>
              <StatusBar style="auto" />
            </View>
            </NativeBaseProvider>
          );
    
}

export default Cadastro
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