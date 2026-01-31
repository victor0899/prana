import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../theme';

export default function ChatBar({ onSubmitMessage, onInputPress }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSubmitMessage(message.trim());
      setMessage('');
    }
  };

  // If onInputPress is provided, this ChatBar acts as a button to open the modal
  if (onInputPress) {
    return (
      <TouchableOpacity style={styles.containerTrigger} onPress={onInputPress} activeOpacity={0.7}>
        <View style={styles.inputContainerTrigger}>
          <Text style={styles.textInputTriggerPlaceholder}>
            Modifica tu rutina con Prana...
          </Text>
          <Ionicons name="sparkles" size={20} color={colors.primary} />
        </View>
      </TouchableOpacity>
    );
  }

  // Otherwise, it's the actual chat input bar
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} // Removed debugging styles
          value={message}
          onChangeText={setMessage}
          placeholder="Escribe tu mensaje..."
          placeholderTextColor={colors.textMuted}
          multiline
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    backgroundColor: 'transparent',
  },
  containerTrigger: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    backgroundColor: 'transparent',
  },
  inputContainerTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 25,
    paddingHorizontal: spacing.md,
    minHeight: 40,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'space-between',
  },
  textInputTriggerPlaceholder: {
    flex: 1,
    color: colors.textMuted,
    paddingVertical: spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 25,
    paddingHorizontal: spacing.md,
    minHeight: 40, // Ensures a minimum height for the input area
    borderWidth: 1,
    borderColor: colors.border,
  },
  textInput: {
    flex: 1, // Ensures TextInput takes up all available space
    color: colors.text,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xs,
    maxHeight: 100, // Allows it to grow up to a certain height
  },
  sendButton: {
    marginLeft: spacing.sm,
    padding: spacing.xs,
  },
});
