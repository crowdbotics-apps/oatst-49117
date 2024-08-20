import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, SafeAreaView, KeyboardAvoidingView, Platform, Text, ScrollView } from "react-native";

const TextInputScreen = () => {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  const handleSend = () => {
    if (text) {
      setHistory([...history, text]);
      setText("");
    }
  };

  return <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView style={styles.historyContainer}>
          {history.map((item, index) => <Text key={index} style={styles.historyText}>{item}</Text>)}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Type here..." value={text} onChangeText={setText} />
          <Button title="Send" onPress={handleSend} />
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
  historyContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  historyText: {
    fontSize: 16,
    marginVertical: 4
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