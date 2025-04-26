import { useEffect, useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CatEstadosScreen({ navigation }) {
    const [states, setStates] = useState([]);
    const [newState, setNewState] = useState("");

    const logOut = () => {
        navigation.navigate("LogIn");
    };

    const fetchStates = async () => {
        // const { data, error } = await supabase
        //     .from("mexican_states")
        //     .select("*")
        //     .order("name", { ascending: true });

        // if (!error) setStates(data);
        setStates([
            { id: 1, name: "Aguascalientes" },
            { id: 2, name: "Baja California" },
            { id: 3, name: "Baja California Sur" },
            { id: 4, name: "Campeche" },
            { id: 5, name: "Chiapas" },
            { id: 6, name: "Chihuahua" },
            { id: 7, name: "Ciudad de México" },
            { id: 8, name: "Coahuila" },
            { id: 9, name: "Colima" },
            { id: 10, name: "Durango" },
            { id: 11, name: "Estado de México" },
            { id: 12, name: "Guanajuato" },
            { id: 13, name: "Guerrero" },
            { id: 14, name: "Hidalgo" },
            { id: 15, name: "Jalisco" },
            { id: 16, name: "Michoacán" },
            { id: 17, name: "Morelos" },
            { id: 18, name: "Nayarit" },
            { id: 19, name: "Nuevo León" },
            { id: 20, name: "Oaxaca" },
            { id: 21, name: "Puebla" },
            { id: 22, name: "Querétaro" },
            { id: 23, name: "Quintana Roo" },
            { id: 24, name: "San Luis Potosí" },
            { id: 25, name: "Sinaloa" },
            { id: 26, name: "Sonora" },
            { id: 27, name: "Tabasco" },
            { id: 28, name: "Tamaulipas" },
            { id: 29, name: "Tlaxcala" },
            { id: 30, name: "Veracruz" },
            { id: 31, name: "Yucatán" },
            { id: 32, name: "Zacatecas" }
        ]);
    };

    const addState = async () => {
        // const user = supabase.auth.getUser();
        // const { error } = await supabase
        //     .from("mexican_states")
        //     .insert([
        //         { name: newState, created_by: (await user).data.user.id }
        //     ]);
        // if (!error) {
        //     setNewState("");
        //     fetchStates();
        // }
        setStates([...states, { id: states.length + 1, name: newState }]); // TODO: Fix bug
        setNewState("");
    };

    const deleteState = async (id) => {
        //   const { error } = await supabase
        //       .from("mexican_states")
        //       .delete()
        //       .eq("id", id);
        //   if (!error) fetchStates();
        const newStates = states.filter((item) => item.id != id);
        setStates(newStates);
    };

    useEffect(() => {
        fetchStates();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Catálogo de Estados 🇲🇽</Text>
            <FlatList
                data={states}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemRow}>
                        <Text>{item.name}</Text>
                        <TouchableOpacity onPress={() => deleteState(item.id)}>
                            <Text style={styles.delete}>Eliminar ❌</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TextInput
                placeholder="Nuevo estado"
                value={newState}
                onChangeText={setNewState}
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <Button title="Salir" onPress={logOut} color={"red"} />
                <Button title="Agregar Estado" onPress={addState} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, marginBottom: 10, textAlign: "center" },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginVertical: 10,
        borderRadius: 8
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
        borderBottomWidth: 1,
        paddingBottom: 4
    },
    delete: { color: "red" },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
});
