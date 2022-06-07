import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contato from "../pages/Contato"
import { StyleSheet } from "react-native"
import Home from "../pages/Home"


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Contato" component={Contato} options={{tabBarStyle : {display : 'none'}}}></Tab.Screen>
            
        </Tab.Navigator>
    )
}

export default Tabs;