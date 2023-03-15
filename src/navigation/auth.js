import { createStackNavigator } from '@react-navigation/stack';
import { OnBoarding, Splash } from '../screens/auth';

const AuthStack = createStackNavigator();
const Auth = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Splash" >
            <AuthStack.Screen name='Splash' component={Splash} />
            <AuthStack.Screen name='OnBoarding' component={OnBoarding} />

        </AuthStack.Navigator>
    );
};

export default Auth;