import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../pages/Cadastro";
import Principal from "../pages/Principal";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Tabs2 from "../navigation/Tabs2";
import Acoes from "../pages/Acoes";

const Stack = createNativeStackNavigator()
const Stacks = () => {
    
    return(
       <Stack.Navigator initialRouteName="Principal">
           <Stack.Screen name='Principal' component={Principal}/>
           <Stack.Screen name='Cadastro' component={Cadastro}/>
           <Stack.Screen name='Home' component={Home}/>
           <Stack.Screen name='Tabs2' component={Tabs2}/>
           <Stack.Screen name='Ações' component={Acoes}/>
           <Stack.Screen name='Contato' component={Contato}/>
       </Stack.Navigator>
    )
}
export default Stacks