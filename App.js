
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Tabs from "./navigation/Tabs"
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './navigation/Stacks';

//import {  AuthProvider } from './provider';
import Navigation from './navigation';
import { createContext, useState } from 'react';
import { AuthContext } from './provider';

   
export default function App() {
   

  const[ resultado, setResultado ]  = useState( {
    user : {

        name : '',
        email : '',
        password : '',
        age : ''
    },

    cadastrado : false
})

 
  console.log(resultado?.cadastrado)


  return (
    <NavigationContainer>
        <NativeBaseProvider>
            <AuthContext.Provider value={{resultado, setResultado}}>
                <Navigation cadastro={resultado.cadastrado} />
            </AuthContext.Provider>
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

