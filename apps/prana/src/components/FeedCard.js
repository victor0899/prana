import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography, globalStyles } from '../theme';

export default function FeedCard({ post, onPress, onLike }) {
  const previewExercises = post.exercises.slice(0, 3);
  const remaining = post.exercises.length - 3;

  return (
    <TouchableOpacity style={globalStyles.card} onPress={onPress} activeOpacity={0.7}>
      {/* Header */}
      <View style={globalStyles.row}>
        <Image source={{ uri: post.user.avatar }} style={globalStyles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.userName}>{post.user.name}</Text>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
      </View>

      {/* Workout Title */}
      <Text style={styles.workoutTitle}>{post.workoutTitle}</Text>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Ionicons name="time-outline" size={14} color={colors.textSecondary} />
          <Text style={styles.statText}>{post.duration}</Text>
        </View>
        <View style={styles.stat}>
          <Ionicons name="barbell-outline" size={14} color={colors.textSecondary} />
          <Text style={styles.statText}>{post.volume}</Text>
        </View>
        <View style={styles.stat}>
          <Ionicons name="list-outline" size={14} color={colors.textSecondary} />
          <Text style={styles.statText}>{post.exercises.length} exercises</Text>
        </View>
      </View>

      {/* Exercise Preview */}
      <View style={styles.exerciseList}>
        {previewExercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseRow}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseSets}>
              {exercise.sets.length} sets
            </Text>
          </View>
        ))}
        {remaining > 0 && (
          <Text style={styles.moreExercises}>+{remaining} more</Text>
        )}
      </View>

      {/* Separator */}
      <View style={globalStyles.separator} />

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={globalStyles.row} onPress={onLike}>
          <Ionicons
            name={post.liked ? 'heart' : 'heart-outline'}
            size={20}
            color={post.liked ? colors.like : colors.textSecondary}
          />
          <Text style={[styles.actionText, post.liked && styles.actionTextLiked]}>
            {post.likes}
          </Text>
        </TouchableOpacity>
        <View style={globalStyles.row}>
          <Ionicons name="chatbubble-outline" size={18} color={colors.textSecondary} />
          <Text style={styles.actionText}>{post.commentsCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerText: {
    marginLeft: spacing.md,
    flex: 1,
  },
  userName: {
    ...typography.bodyBold,
    color: colors.text,
  },
  timestamp: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: 2,
  },
  workoutTitle: {
    ...typography.h3,
    color: colors.text,
    marginTop: spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: spacing.sm,
    gap: spacing.base,
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
  exerciseList: {
    marginTop: spacing.md,
    backgroundColor: colors.surfaceLight,
    borderRadius: 8,
    padding: spacing.md,
  },
  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
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
  moreExercises: {
    ...typography.caption,
    color: colors.primary,
    marginTop: spacing.xs,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.xl,
  },
  actionText: {
    ...typography.body,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  actionTextLiked: {
    color: colors.like,
  },
});
