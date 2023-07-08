import React from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { SCREEN_HEIGHT, STATUS_BAR_HEIGHT } from './src/libs/constants';
import tailwindConfig from "./tailwind.config";

import RootNavigator from './src/navigator/RootNavigator';
import { PostDetailContextProvider } from './src/context/PostDetailContextProvider';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingScreen from './src/screens/SplashScreen/LoadingScreen';

export default function App() {
  const [loaded] = useFonts({
    Raleway: require('./assets/fonts/Raleway.ttf'),
  })

  if(!loaded) {
    return null;
  }
  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate 
          loading={<LoadingScreen />}
          persistor={persistor}
        >
          <PostDetailContextProvider>
            <SafeAreaView>
              <View style={{
                backgroundColor: (tailwindConfig as any).theme?.colors.light,
              }}>
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
                  width: '100%',
                  height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT,
                }}>
                  <RootNavigator />
                </View>
              </View>
            </SafeAreaView>
          </PostDetailContextProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
