import React from 'react';
import {CheckInbox, Food, ForgotPassword, Login, OnBoarding} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const FoodStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FoodScreen" component={Food} />
    </Stack.Navigator>
  );
};

export default FoodStack;
