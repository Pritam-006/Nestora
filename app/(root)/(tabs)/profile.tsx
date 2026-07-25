import { useRouter } from "expo-router";
import { useAuth } from "@clerk/expo";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const router = useRouter();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/sign-in"); // Navigate to the sign-in screen after signing out
      // Handle successful sign-out, e.g., navigate to the sign-in screen
    }catch (error) {
      console.error("Error signing out:", error);
      // Handle sign-out error, e.g., show an error message
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Profile Screen</Text>
        <TouchableOpacity onPress={handleSignOut} style={{ marginTop: 20, padding: 10, backgroundColor: 'red', borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
