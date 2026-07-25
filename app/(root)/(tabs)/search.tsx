import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Search Screen</Text>
      </View>
    </SafeAreaView>
  );
}
