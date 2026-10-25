import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StoreProvider } from '../lib/store';
import { C } from '../lib/theme';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    TiroTelugu_400Regular: require('@expo-google-fonts/tiro-telugu/400Regular/TiroTelugu_400Regular.ttf'),
    NotoSerifTelugu_500Medium: require('@expo-google-fonts/noto-serif-telugu/500Medium/NotoSerifTelugu_500Medium.ttf'),
    NotoSerifTelugu_700Bold: require('@expo-google-fonts/noto-serif-telugu/700Bold/NotoSerifTelugu_700Bold.ttf'),
    Cinzel_600SemiBold: require('@expo-google-fonts/cinzel/600SemiBold/Cinzel_600SemiBold.ttf'),
    Cinzel_700Bold: require('@expo-google-fonts/cinzel/700Bold/Cinzel_700Bold.ttf'),
    CormorantGaramond_500Medium: require('@expo-google-fonts/cormorant-garamond/500Medium/CormorantGaramond_500Medium.ttf'),
    CormorantGaramond_500Medium_Italic: require('@expo-google-fonts/cormorant-garamond/500Medium_Italic/CormorantGaramond_500Medium_Italic.ttf'),
    CormorantGaramond_700Bold: require('@expo-google-fonts/cormorant-garamond/700Bold/CormorantGaramond_700Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync().catch(() => {});
  }, [loaded, error]);

  if (!loaded && !error) return <View style={{ flex: 1, backgroundColor: C.bg0 }} />;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: C.bg0 }}>
      <SafeAreaProvider>
        <StoreProvider>
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: C.bg0 },
              animation: 'fade_from_bottom',
            }}
          />
        </StoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
