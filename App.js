
import { StyleSheet, Text, View } from 'react-native';
import Signup from './Components/Holds/Signup'
import {StatusBar} from 'expo-status-bar'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomNavigator} from '@react-navigation/bottom-tabs' 
import Home from './components/Home'
import BabyScreen from './components/BabyScreen'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  const Tabs = createBottomNavigator()
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator
        >
          <Tabs.Screen
          name ="baby"
          component={BabyScreen}
          /> 
          <Tabs.Screen
          name="home"
          component={Home}

          />
        </Tabs.Navigator>
      </NavigationContainer>
      {/* <Signup/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
