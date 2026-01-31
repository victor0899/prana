import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

export default function SleepDebtCard({ sleepDebtData }) {
  const { hours, message } = sleepDebtData;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="moon-outline" size={24} color={colors.primary} />
        <Text style={styles.title}>Sleep Debt</Text>
      </View>
      <Text style={styles.sleepDebtText}>
        <Text style={styles.sleepDebtValue}>{hours} hours</Text>
      </Text>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    justifyContent: 'space-between',
    width: '48%', // To fit alongside other cards or take half width
    marginBottom: spacing.md,
    minHeight: 120, // Ensure it has a reasonable height
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.h4,
    color: colors.text,
    marginLeft: spacing.xs,
  },
  sleepDebtText: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  sleepDebtValue: {
    ...typography.h3,
    color: colors.primary,
  },
  messageText: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
