import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

export default function LatestWorkoutCard({ workout }) {
  if (!workout) {
    return (
      <View style={[styles.card, styles.emptyCard]}>
        <Text style={styles.emptyCardText}>No recent workouts</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="barbell-outline" size={24} color={colors.primary} />
        <Text style={styles.title}>Último Entrenamiento</Text>
      </View>
      <Text style={styles.workoutTitle}>{workout.title}</Text>
      <Text style={styles.workoutDate}>{workout.date}</Text>
      <View style={styles.detailsRow}>
        <Text style={styles.detailText}>{workout.duration}</Text>
        <Text style={styles.detailText}>{workout.volume}</Text>
      </View>
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
  },
  emptyCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCardText: {
    ...typography.body,
    color: colors.textMuted,
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
  workoutTitle: {
    ...typography.bodyBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  workoutDate: {
    ...typography.caption,
    color: colors.textMuted,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  detailText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
