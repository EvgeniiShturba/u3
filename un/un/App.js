import Main from './main.js';
import Choise from './choise.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='main' component={Main} />

        <Stack.Screen name='choise' component={Choise} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}