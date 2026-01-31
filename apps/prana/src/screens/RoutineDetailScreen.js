import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, globalStyles } from '../theme';

export default function RoutineDetailScreen({ route }) {
  const { routine } = route.params;

  // Build editable state from routine data
  const [exercises, setExercises] = useState(() =>
    routine.exercises.map((ex) => ({
      ...ex,
      sets: ex.sets.map((s) => ({
        ...s,
        completed: false,
      })),
    }))
  );

  const toggleSetCompleted = useCallback((exerciseIndex, setIndex) => {
    setExercises((prev) =>
      prev.map((ex, ei) =>
        ei === exerciseIndex
          ? {
              ...ex,
              sets: ex.sets.map((s, si) =>
                si === setIndex ? { ...s, completed: !s.completed } : s
              ),
            }
          : ex
      )
    );
  }, []);

  const updateSetField = useCallback((exerciseIndex, setIndex, field, value) => {
    const parsed = value === '' ? '' : parseInt(value, 10);
    if (value !== '' && isNaN(parsed)) return;
    setExercises((prev) =>
      prev.map((ex, ei) =>
        ei === exerciseIndex
          ? {
              ...ex,
              sets: ex.sets.map((s, si) =>
                si === setIndex ? { ...s, [field]: parsed } : s
              ),
            }
          : ex
      )
    );
  }, []);

  const completedSets = exercises.reduce(
    (acc, ex) => acc + ex.sets.filter((s) => s.completed).length,
    0
  );
  const totalSets = exercises.reduce((acc, ex) => acc + ex.sets.length, 0);

  const ListHeader = () => (
    <View>
      <View style={styles.headerSection}>
        <Text style={styles.routineName}>{routine.name}</Text>
        <Text style={styles.description}>{routine.description}</Text>
      </View>

      <View style={styles.tagsRow}>
        {routine.muscleGroups.map((group) => (
          <View key={group} style={styles.tag}>
            <Text style={styles.tagText}>{group}</Text>
          </View>
        ))}
      </View>

      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <Ionicons name="time-outline" size={16} color={colors.primary} />
          <Text style={styles.metaText}>{routine.estimatedDuration}</Text>
        </View>
        <View style={styles.metaItem}>
          <Ionicons name="flame-outline" size={16} color={colors.primary} />
          <Text style={styles.metaText}>{routine.caloriesBurned}</Text>
        </View>
        <View style={styles.metaItem}>
          <Ionicons name="checkmark-done-outline" size={16} color={colors.primary} />
          <Text style={styles.metaText}>{completedSets}/{totalSets} sets</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: totalSets > 0 ? `${(completedSets / totalSets) * 100}%` : '0%' },
            ]}
          />
        </View>
      </View>

      <View style={styles.exercisesHeader}>
        <Text style={styles.exercisesTitle}>
          Exercises ({exercises.length})
        </Text>
      </View>
    </View>
  );

  const renderExercise = ({ item, index: exerciseIndex }) => {
    const completedCount = item.sets.filter((s) => s.completed).length;
    const allDone = completedCount === item.sets.length;

    return (
      <View style={[styles.exerciseBlock, allDone && styles.exerciseBlockDone]}>
        <View style={styles.exerciseHeader}>
          <TouchableOpacity
            style={styles.exerciseNameRow}
            onPress={() => Alert.alert(item.name, 'Video coming soon. This will show a demo video of the exercise with proper form and tips.')}
            activeOpacity={0.6}
          >
            <Ionicons name="play-circle-outline" size={20} color={colors.primary} />
            <Text style={[styles.exerciseName, styles.exerciseNameLink, allDone && styles.exerciseNameDone]}>
              {item.name}
            </Text>
          </TouchableOpacity>
          {allDone && (
            <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          )}
        </View>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <View style={styles.colCheck} />
          <Text style={[styles.tableHeaderText, styles.colSet]}>Set</Text>
          <Text style={[styles.tableHeaderText, styles.colReps]}>Reps</Text>
          <Text style={[styles.tableHeaderText, styles.colWeight]}>kg</Text>
        </View>

        {item.sets.map((set, setIndex) => (
          <View
            key={set.setNumber}
            style={[styles.setRow, set.completed && styles.setRowCompleted]}
          >
            {/* Check */}
            <TouchableOpacity
              style={styles.colCheck}
              onPress={() => toggleSetCompleted(exerciseIndex, setIndex)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons
                name={set.completed ? 'checkbox' : 'square-outline'}
                size={22}
                color={set.completed ? colors.primary : colors.textMuted}
              />
            </TouchableOpacity>

            {/* Set Number */}
            <Text style={[styles.setNumber, styles.colSet]}>{set.setNumber}</Text>

            {/* Reps (editable) */}
            <View style={styles.colReps}>
              <TextInput
                style={[styles.editableInput, set.completed && styles.editableInputDone]}
                value={String(set.reps)}
                onChangeText={(v) => updateSetField(exerciseIndex, setIndex, 'reps', v)}
                keyboardType="number-pad"
                selectTextOnFocus
              />
            </View>

            {/* Weight (editable) */}
            <View style={styles.colWeight}>
              <TextInput
                style={[styles.editableInput, styles.editableInputRight, set.completed && styles.editableInputDone]}
                value={set.weight > 0 ? String(set.weight) : '0'}
                onChangeText={(v) => updateSetField(exerciseIndex, setIndex, 'weight', v)}
                keyboardType="number-pad"
                selectTextOnFocus
              />
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <FlatList
      data={exercises}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      ListHeaderComponent={ListHeader}
      renderItem={renderExercise}
      contentContainerStyle={styles.list}
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  headerSection: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.base,
  },
  routineName: {
    ...typography.h2,
    color: colors.text,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    lineHeight: 22,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.base,
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  tag: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  tagText: {
    ...typography.small,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  metaRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.base,
    marginTop: spacing.md,
    gap: spacing.lg,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  metaText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  progressContainer: {
    paddingHorizontal: spacing.base,
    marginTop: spacing.md,
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.surfaceLight,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  exercisesHeader: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing.base,
  },
  exercisesTitle: {
    ...typography.h3,
    color: colors.text,
  },
  exerciseBlock: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: spacing.md,
    marginHorizontal: spacing.base,
    marginBottom: spacing.sm,
  },
  exerciseBlockDone: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  exerciseNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
  exerciseName: {
    ...typography.bodyBold,
    color: colors.text,
    flex: 1,
  },
  exerciseNameLink: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.primary,
  },
  exerciseNameDone: {
    color: colors.primary,
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tableHeaderText: {
    ...typography.caption,
    color: colors.textMuted,
    fontWeight: '600',
  },
  colCheck: {
    width: 36,
    alignItems: 'center',
  },
  colSet: {
    width: 36,
  },
  colReps: {
    flex: 1,
  },
  colWeight: {
    width: 72,
    alignItems: 'flex-end',
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  setRowCompleted: {
    backgroundColor: '#FFF3EC',
    borderRadius: 6,
    borderBottomColor: 'transparent',
  },
  setNumber: {
    ...typography.caption,
    color: colors.textMuted,
  },
  editableInput: {
    ...typography.body,
    color: colors.text,
    backgroundColor: colors.surfaceLight,
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    minWidth: 48,
    textAlign: 'center',
  },
  editableInputRight: {
    textAlign: 'center',
  },
  editableInputDone: {
    backgroundColor: '#FFE8DA',
  },
  list: {
    paddingBottom: spacing.xxl,
  },
});
