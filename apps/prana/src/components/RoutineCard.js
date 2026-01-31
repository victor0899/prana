import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, globalStyles } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function RoutineCard({ routine, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{flex: 1}}>
      <LinearGradient
        colors={[colors.surface, colors.background]}
        style={styles.container}
      >
        {routine.isAIGenerated && (
          <View style={styles.aiBadge}>
            <Ionicons name="sparkles" size={18} color={colors.primary} />
          </View>
        )}

        <View style={styles.content}>
          <View style={styles.topRow}>
            <Ionicons name={routine.icon} size={32} color={colors.primary} />
            <Text style={styles.name}>{routine.name}</Text>
          </View>

          {/* Main Activity Tag */}
          {routine.mainActivityTag && (
            <View style={styles.mainTagRow}>
              <Ionicons name="fitness-outline" size={14} color={colors.primary} />
              <Text style={styles.mainTagText}>{routine.mainActivityTag}</Text>
            </View>
          )}

          <View style={styles.tagsRow}>
            {routine.muscleGroups.slice(0, 3).map((group) => (
              <View key={group} style={styles.tag}>
                <Text style={styles.tagText}>{group}</Text>
              </View>
            ))}
          </View>

          {/* Exercise List */}
          <View style={styles.exerciseList}>
            {routine.exercises.map((exercise, index) => (
              <View key={index} style={styles.exerciseRow}>
                <Text style={styles.exerciseIndex}>{index + 1}</Text>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseSets}>{exercise.sets.length} sets</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.stat}>
            <Ionicons name="list-outline" size={14} color={colors.textSecondary} />
            <Text style={styles.statText}>{routine.exercises.length} exercises</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="time-outline" size={14} color={colors.textSecondary} />
            <Text style={styles.statText}>{routine.estimatedDuration}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    padding: spacing.lg,
    ...globalStyles.shadow,
  },
  aiBadge: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: spacing.xs,
  },
  content: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  name: {
    ...typography.h3,
    color: colors.text,
    flex: 1,
  },
  mainTagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: '#FFF3EC',
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  mainTagText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '600',
    flex: 1,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  tag: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  tagText: {
    ...typography.small,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  exerciseList: {
    backgroundColor: colors.surfaceLight,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  exerciseIndex: {
    ...typography.caption,
    color: colors.textMuted,
    width: 24,
  },
  exerciseName: {
    ...typography.body,
    color: colors.text,
    flex: 1,
  },
  exerciseSets: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.md,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  statText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
