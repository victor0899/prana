import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

export default function FriendsStreakCard({ streakData }) {
  const { currentStreak, friendCount } = streakData;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="people-outline" size={24} color={colors.primary} />
        <Text style={styles.title}>Racha con Amigos</Text>
      </View>
      <Text style={styles.streakText}>
        ¡Llevas una racha de <Text style={styles.streakValue}>{currentStreak} días</Text> con tus {friendCount} amigos!
      </Text>
      <Text style={styles.encouragementText}>¡Sigue motivándote con tus compañeros!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    justifyContent: 'space-between',
    width: '100%', // Occupy full width, equivalent to two squares
    marginBottom: spacing.md,
    minHeight: 120, // Ensure it has a reasonable height even if content is small
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
  streakText: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  streakValue: {
    ...typography.h3,
    color: colors.primary,
  },
  encouragementText: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
