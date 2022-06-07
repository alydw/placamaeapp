import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { NativeBaseProvider, Box, Button, Text, ScrollView, Stack, Input, FormControl, Heading } from 'native-base';

export default function Contato(){
    const BotaoCadastro = () => {
        return <Box alignItems="center">
            <Button
             style={styles.botao2}
             onPress={() => console.log("hello world")}>Cadastre</Button>
          </Box>;
      };

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
                  <Input />
                </FormControl>

              
                <BotaoCadastro></BotaoCadastro>
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