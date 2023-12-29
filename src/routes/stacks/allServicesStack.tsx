import React from 'react';
import {AllServices} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AllServicesStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AllServicesScreen" component={AllServices} />
    </Stack.Navigator>
  );
};

export default AllServicesStack;
