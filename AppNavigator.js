import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";
import CatEstadosScreen from "./CatEstadosScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={LogInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="CatEstados" component={CatEstadosScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
