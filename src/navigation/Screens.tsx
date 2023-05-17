import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Articles,
  Components,
  Home,
  Profile,
  Register,
  Pro,
  Dashboard,
} from '../screens';
import Update from '../screens/Update';
import Report from '../screens/Report';
// import {ImageUpload} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import Suggetions from '../screens/SkinDiseas/Suggetions';
import Predictions from '../screens/SkinDiseas/Predictions';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen name="Report" component={Report} />

      <Stack.Screen name="Update" component={Update} />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: t('navigation.dashboard')}}
      />

      <Stack.Screen
        name="Suggetions"
        component={Suggetions}
        options={{title: t('navigation.suggetions')}}
      />

      <Stack.Screen
        name="Predictions"
        component={Predictions}
        options={{title: t('navigation.prediction')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Suggetions"
        component={Suggetions}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Predictions"
        component={Predictions}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};
