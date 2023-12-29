import React from 'react';
import {
  CheckInbox,
  Food,
  ForgotPassword,
  Grocery,
  Login,
  OnBoarding,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const GroceryStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GroceryScreen" component={Grocery} />
    </Stack.Navigator>
  );
};

export default GroceryStack;
