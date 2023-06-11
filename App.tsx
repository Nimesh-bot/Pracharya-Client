import React from 'react';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { STATUS_BAR_HEIGHT } from './src/libs/constants';
import tailwindConfig from "./tailwind.config";
import RootNavigator from './src/navigator/RootNavigator';

export default function App() {
  const [loaded] = useFonts({
    Raleway: require('./assets/fonts/Raleway.ttf'),
  })

  if(!loaded) {
    return null;
  }
  
  return (
    <SafeAreaProvider>
      <View>
        <View
          style={{
            height: STATUS_BAR_HEIGHT,
            backgroundColor: (tailwindConfig as any).theme?.colors
              .blue,
          }}
        >
          <StatusBar
            style={"dark"}
            backgroundColor={
              (tailwindConfig as any).theme?.colors.white
            }
          />
        </View>
        
        <View style={{
          padding: 20,
          backgroundColor: (tailwindConfig as any).theme?.colors.light
        }}>
          <RootNavigator />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
