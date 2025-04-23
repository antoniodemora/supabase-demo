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
            { id: 4, name: "Campeche" }
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
