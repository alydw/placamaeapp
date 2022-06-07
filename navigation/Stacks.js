import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";


const Stack = createNativeStackNavigator()
const Stacks = () => {
    
    return(
       <Stack.Navigator initialRouteName="Cadastro">
           <Stack.Screen name='Login' component={Login}/>
           <Stack.Screen name='Cadastro' component={Cadastro}/>
       </Stack.Navigator>
    )
}
export default Stacks