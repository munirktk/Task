import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './auth';
import App from './app';

const AppStack = createStackNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{ headerShown: false, animationEnabled: false }
                }
                initialRouteName="Auth" >
                <AppStack.Screen name="Auth" component={Auth} />
                <AppStack.Screen name="App" component={App} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Main