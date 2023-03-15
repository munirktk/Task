import { createStackNavigator } from '@react-navigation/stack';
import { Fav, GitApi, Home } from '../screens/app/index';

const AppStack = createStackNavigator();
const App = () => {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Fav" >
            <AppStack.Screen name='Fav' component={Fav} />
            <AppStack.Screen name='Home' component={Home} />
            <AppStack.Screen name='GitApi' component={GitApi} />
        </AppStack.Navigator>
    );
};

export default App;