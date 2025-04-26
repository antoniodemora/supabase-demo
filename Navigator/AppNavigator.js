import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "../Screens/LogInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import CatEstadosScreen from "../Screens/CatEstadosScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="LogIn" component={LogInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="CatEstados" component={CatEstadosScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
