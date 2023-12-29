import {View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {primary, RF} from '@theme';
import {createStackNavigator} from '@react-navigation/stack';
import FoodStack from '../stacks/foodStack';
import GroceryStack from '../stacks/groceryStack';
import AllServicesStack from '../stacks/allServicesStack';
import SnoosendStack from '../stacks/snoosendStack';
import ProfileStack from '../stacks/profileStack';

import {allService, food, grocery, profile, snoosend} from '@assets';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(theme.colors);

  const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({route: {name}}) => ({
          headerShown: false,
          keyboardHidesTabBar: true,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: '#949494',
          tabBarIconStyle: styles.tabIcon,
        })}>
        <Tab.Screen
          name="Food"
          component={FoodStack}
          options={{
            tabBarIcon: ({focused}: any) => (
              <TabBarIcon
                source={food}
                colors={colors}
                styles={styles}
                focused={focused}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Grocery"
          component={GroceryStack}
          options={{
            tabBarIcon: ({focused}: any) => (
              <TabBarIcon
                source={grocery}
                colors={colors}
                styles={styles}
                focused={focused}
              />
            ),
          }}
        />

        <Tab.Screen
          name="AllService"
          component={AllServicesStack}
          options={{
            tabBarIcon: ({focused}: any) => (
              <TabBarIcon
                source={allService}
                colors={colors}
                styles={styles}
                focused={focused}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Snoosend"
          component={SnoosendStack}
          options={{
            tabBarIcon: ({focused}: any) => (
              <TabBarIcon
                source={snoosend}
                colors={colors}
                styles={styles}
                focused={focused}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({focused}: any) => (
              <TabBarIcon
                source={profile}
                colors={colors}
                styles={styles}
                focused={focused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

const TabBarIcon = ({
  colors,
  source,
  styles,
  focused,
}: {
  source: any;
  styles?: any;
  colors: any;
  focused?: any;
}) => {
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <Image
        source={source}
        style={[
          styles.image,
          {
            tintColor: focused ? primary : '#949494',
          },
        ]}
      />
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    image: {width: 24, height: 24, opacity: 100, resizeMode: 'contain'},
    tabIcon: {
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    tabBarStyle: {
      height: 65,
      backgroundColor: '#fff',
      paddingBottom: 15.5,
      borderTopWidth: 0,
    },
  });

export default MainStack;
