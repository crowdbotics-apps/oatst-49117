import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Button, TextInput } from "react-native";

const TextInputScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <TextInput style={styles.input} placeholder="Type here..." />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default TextInputScreen;