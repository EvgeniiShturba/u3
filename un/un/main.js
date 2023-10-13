import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function Main({ navigation }) {

    const list = [
        { key: 'Apelsinjuice', },
        { key: 'Banansmoothie', },
        { key: 'Cider!!!', },
    ];

    return (

        <SafeAreaView style={styles.container}>
            <FlatList
                data={list}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate("choise", { data: item.key })}>
                        <Text style={styles.item}>{item.key}</Text>
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'steelblue',
    },
    item: {
        color: 'white',
        fontSize: 26,
        backgroundColor: 'blue',
        textAlign: 'center',
        justifyContent: 'center',
        width: '70%',
        marginLeft: '15%',
        height: 70,
        marginTop: 100,
        borderRadius: 5,
        borderWidth: 3,

    },
});