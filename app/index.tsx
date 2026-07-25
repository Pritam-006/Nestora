import { Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";

export default function Index() {
  const {isSignedIn, isLoaded} = useAuth()

  if (!isLoaded) return null;

  // Redirect based on authentication state
  if (isSignedIn) return <Redirect href="/(root)/(tabs)" />;  

  return <Redirect href="/sign-up" />;
}
