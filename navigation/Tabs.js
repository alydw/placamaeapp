import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contato from "../pages/Contato"
import { StyleSheet } from "react-native"
import Home from "../pages/Home"
import Materiais from "../pages/Materiais"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Contato" component={Contato} />
            <Tab.Screen name="Materiais" component={Materiais}/>
        
            
        </Tab.Navigator>
    )
}

export default Tabs;