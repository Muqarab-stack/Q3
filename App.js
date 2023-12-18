import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecordSearch from './RecordSearch';
import RecordView from './RecordView';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecordSearch">
        <Stack.Screen name="RecordSearch" component={RecordSearch} />
        <Stack.Screen name="RecordView" component={RecordView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
