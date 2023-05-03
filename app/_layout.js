import { Stack, Slot } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "../context/auth";

SplashScreen.preventAutoHideAsync(); // Prevent native splash screen from autohiding before App component declaration

const Layout = () => {
  const [fontsLoaded] = useFonts({
    // "Roboto": require("native-base/Fonts/Roboto.ttf"),
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide native splash screen after all startup related async tasks are done
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // return <Stack initialRouteName={user ? 'WeLCOME': 'LOGIN'} onLayout={onLayoutRootView} />
  return (
    <Provider>
      {/* <Slot /> */}
      <Stack onLayout={onLayoutRootView} />
    </Provider>
  );
};

export default Layout;
