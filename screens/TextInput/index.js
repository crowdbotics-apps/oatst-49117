import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Button } from "react-native";

const TextInput = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.buttonContainer}>
          <Button title="Send" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default TextInput;