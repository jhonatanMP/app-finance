import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home'
import Wallet from '../pages/Wallet'
import Transitions from '../pages/Transitions'
import Perfil from '../pages/Perfil'

import CustomNavBar from '../components/NavBar'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#387CFF",

                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: "#FFF"
                }
            }}

            tabBar={(props) => <CustomNavBar {...props} />}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: 'home'
                }}
            />

            <Tab.Screen
                name='Wallet'
                component={Wallet}
                options={{
                    tabBarIcon: 'wallet'
                }}
            />

            <Tab.Screen
                name='Transitions'
                component={Transitions}
                options={{
                    tabBarIcon: 'stats-chart'
                }}
            />

            <Tab.Screen
                name='Perfil'
                component={Perfil}
                options={{
                    tabBarIcon: 'person'
                }}
            />

        </ Tab.Navigator>
    )
}