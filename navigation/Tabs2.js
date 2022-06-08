import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contato from "../pages/Contato"
import { StyleSheet } from "react-native"
import Home from "../pages/Home"
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs2 = () => {
    return(
        <NavigationContainer independent={true}>
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Tab.Screen name="Contato" component={Contato} options={{headerShown: false}}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs2;