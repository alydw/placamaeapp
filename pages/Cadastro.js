

import { StyleSheet, View, StatusBar } from 'react-native';
import { NativeBaseProvider, Box,  Text, ScrollView, Stack, FormControl, Input} from 'native-base';
import Botao from '../components/Botao';
import axios from 'axios';
import { useContext, useState } from 'react'
import { AuthContext } from '../provider';


const Cadastro = () => {
  const {resultado, setResultado} = useContext(AuthContext)


      const [userCadastro, setUser] = useState({
        name: '',
        age: '',
        password: '',
        email: ''
      })
     

      const cadastrar = () => {
        axios.post("https://fierce-ocean-02102.herokuapp.com/adults", userCadastro).then((response) => {
          console.log(response)
          setResultado({user : userCadastro, cadastrado : true })
        })

      } 
      
    
    
          return (
            <NativeBaseProvider>
            <View style={styles.container}>
            <ScrollView w="100%">

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
                      <Input style={styles.cor} value={userCadastro.email} onChangeText={value => {
                        
                        setUser({...userCadastro, email: value})
                      }
                      }/>
                    </FormControl>
                      
                   
                    <FormControl mb="5">
                      <FormControl.Label>Digite sua senha</FormControl.Label>
                      <Input  style={styles.cor} onChangeText={value => setUser({...userCadastro, password: value})} value={userCadastro.password}/>
                    </FormControl>

                    <FormControl mb="5">
                      <FormControl.Label>Digite sua idade</FormControl.Label>
                      <Input style={styles.cor} onChangeText={value => setUser({...userCadastro, age: value})} value={userCadastro.age}/>
                    </FormControl>

                    <FormControl mb="5">
                      <FormControl.Label>Digite seu nome</FormControl.Label>
                      <Input style={styles.cor} onChangeText={value => setUser({...userCadastro, name: value})} value={userCadastro.name}/>
                    </FormControl>
                
                    <Botao alignItems='center' style={styles.botao2} text='Cadastre' onPress={cadastrar}/>
                  </Box>
                </Stack>
              </ScrollView>

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
    },
    cor : {
     color : 'white'
    }
  });