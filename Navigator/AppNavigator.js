import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "../Screens/LogInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import CatEstadosScreen from "../Screens/CatEstadosScreen";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {session ? (
          <Stack.Screen name='CatEstados' component={CatEstadosScreen} />
        ) : (
          <>
            <Stack.Screen name='LogIn' component={LogInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
