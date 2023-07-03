import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Group>
        <Stack.Screen name="Home" 
        component={Home} 
        options={{headerShown: false}} />

      </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main


{/* <View style={{ paddingVertical: Platform.OS==="android" ? StatusBar.currentHeight : 0}}>
     <SafeAreaView>
     <Text>Main</Text>
     </SafeAreaView>
    </View> */}