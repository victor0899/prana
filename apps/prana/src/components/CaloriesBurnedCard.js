import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

export default function CaloriesBurnedCard({ burned, goal }) {
  const progress = goal ? Math.min(burned / goal, 1) : 0;
  const progressPercentage = Math.round(progress * 100);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="flame-outline" size={24} color={colors.primary} />
        <Text style={styles.title}>Calorías Quemadas</Text>
      </View>
      <Text style={styles.burnedText}>{burned} kcal</Text>
      {goal && (
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
        </View>
      )}
      {goal && (
        <Text style={styles.goalText}>Meta diaria: {goal} kcal</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    justifyContent: 'space-between',
    width: '48%', // Approx half minus gap for two items in a row
    aspectRatio: 1, // Make it square
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.h4,
    color: colors.text,
    marginLeft: spacing.xs,
  },
  burnedText: {
    ...typography.h2,
    color: colors.text,
    textAlign: 'center',
    marginVertical: spacing.sm,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    marginTop: spacing.sm,
    overflow: 'hidden',
    width: '80%', // Adjusted width for better appearance
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  goalText: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
