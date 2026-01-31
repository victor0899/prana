import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';
import ChatBar from './ChatBar'; // Re-use the ChatBar component

export default function ChatModal({ visible, onClose, onSubmitMessage }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-circle" size={30} color={colors.textMuted} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Asistente Prana AI</Text>
          <View style={styles.chatContent}>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>
                ¡Hola! Soy Prana, tu asistente personal.
                Puedo ayudarte a modificar tu rutina,
                ajustarla si te has lesionado o simplemente
                responder tus preguntas sobre entrenamiento.
                ¿Cómo puedo ayudarte hoy?
              </Text>
            </View>
            {/* Future chat messages would go here */}
          </View>
          <ChatBar onSubmitMessage={onSubmitMessage} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end', // Align to bottom
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Dim background
  },
  modalView: {
    width: '100%',
    height: '70%', // Take up 70% of the screen height
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    zIndex: 1, // Ensure it's above other content
  },
  modalTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md,
  },
  chatContent: {
    flex: 1, // Allow chat content to grow
    width: '100%',
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.md,
  },
  messageBubble: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: spacing.md,
    alignSelf: 'flex-start', // Align to left for "Prana's" message
    maxWidth: '80%',
    marginBottom: spacing.sm,
  },
  messageText: {
    ...typography.body,
    color: colors.text,
  },
});
