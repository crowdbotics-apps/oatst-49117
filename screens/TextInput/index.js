import React from "react";
import { StyleSheet, View, Button, TextInput, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";

const TextInputScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Type here..." />
          <Button title="Send" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  inputContainer: {
    marginBottom: 36,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
export default TextInputScreen;