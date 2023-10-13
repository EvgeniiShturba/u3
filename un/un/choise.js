import { Button, StyleSheet, Text, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Choise({ navigation, route }) {

    return (

        <SafeAreaView style={styles2.container}>
            <Text style={styles2.item}>{route.params.data}</Text>
            <Button title='back to start' onPress={() => {
                navigation.navigate("main");
            }} />

        </SafeAreaView>
    );
}

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'steelblue',
    },
    item: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        backgroundColor: 'blue',
        textAlign: 'center',
        justifyContent: 'center',
        width: '80%',
        marginLeft: '10%',
        height: 90,
        borderRadius: 5,
        borderWidth: 3,

    },
});
