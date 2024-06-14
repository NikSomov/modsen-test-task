import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from "../components/LoginScreen";
export default function RootLayout() {
  useFonts({
    'comfortaa-r':require('./../assets/fonts/Comfortaa-Regular.ttf'),
    'comfortaa-m':require('./../assets/fonts/Comfortaa-Medium.ttf'),
    'comfortaa-b':require('./../assets/fonts/Comfortaa-Bold.ttf')
  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
      <Stack screenOptions={{
        headerShown:false
        }}>
          <Stack.Screen name="(tabs)" options={{
            headerShown: false
            }}/>
            </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
    </ClerkProvider>
  );
}
