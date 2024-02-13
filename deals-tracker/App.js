import * as React from 'react';
import {View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import { Search } from './src/screens/Search';
import { theme } from './src/globals/Styles/theme';
import { OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } 
        from '@expo-google-fonts/open-sans'

export default function App() {

  /* Loading fonts */
  const [fontsLoaded, fontError] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if(!fontsLoaded && !fontError){
    return null;
  }

  return (
    <View>
      <StatusBar 
        barStyle='light-content'
        backgroundColor={theme.colors.headerBackground}
        translucent={true}
      /> 
      <Search />
    </View>
  );
}
