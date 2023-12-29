import React from 'react';
import {Snoosend} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const SnoosendStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SnoosendScreen" component={Snoosend} />
    </Stack.Navigator>
  );
};

export default SnoosendStack;
