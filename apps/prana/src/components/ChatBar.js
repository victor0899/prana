import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../theme';

export default function ChatBar({ onSubmitMessage, onInputPress }) { // Removed isModalOpen prop as it's not directly needed here
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSubmitMessage(message.trim());
      setMessage('');
    }
  };

  const InputContent = (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={message}
        onChangeText={setMessage}
        placeholder="Modifica tu rutina con Prana..."
        placeholderTextColor={colors.textMuted}
        multiline
        editable={!onInputPress} // Editable only if no onInputPress (i.e., inside modal or standalone chat)
        pointerEvents={onInputPress ? 'none' : 'auto'} // Disable pointer events if acting as a trigger
      />
      {/* Show send button always if it's an editable chat bar, or if onInputPress is not provided (meaning it's the active chat bar) */}
      {!onInputPress && (
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" size={24} color={colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      {onInputPress ? (
        <TouchableOpacity style={styles.inputContainerTouchable} onPress={onInputPress} activeOpacity={0.7}>
          {InputContent}
        </TouchableOpacity>
      ) : (
        InputContent
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    backgroundColor: 'transparent',
  },
  inputContainerTouchable: { // Style for the TouchableOpacity wrapper when onInputPress is provided
    borderRadius: 25,
    overflow: 'hidden', // Ensure border radius applies to children
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 25,
    paddingHorizontal: spacing.md,
    minHeight: 40,
    borderWidth: 1,
    borderColor: colors.border,
  },
  textInput: {
    flex: 1,
    color: colors.text,
    ...spacing.pY_sm,
    ...spacing.pX_xs,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: spacing.sm,
    padding: spacing.xs,
  },
});
