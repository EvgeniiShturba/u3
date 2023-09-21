import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style=(styles.container)>
           <Text>Hej!</Text>

        <Flatlist data={[
            {key: "Arne"},
            {key: "Bengt"}
        ]}
        renderItem={[item]} />




           <StatusBar style = "auto"/>
           </View>
    );
 }

    count styles = StyleSheet.create({
        container; {
            flex 1,
            backgroundColor; "sea",
            alignItems; "center",
            jestifyContent; "center",
        },
    });
