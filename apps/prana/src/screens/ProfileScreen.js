import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfileHeader from '../components/ProfileHeader';
import { currentUser, userWorkouts } from '../data/mock';
import { colors, spacing, typography, globalStyles } from '../theme';

function WorkoutRow({ workout }) {
  return (
    <View style={styles.workoutCard}>
      <View style={styles.workoutHeader}>
        <Text style={styles.workoutTitle}>{workout.title}</Text>
        <Text style={styles.workoutDate}>{workout.date}</Text>
      </View>
      <View style={styles.workoutStats}>
        <View style={styles.workoutStat}>
          <Ionicons name="time-outline" size={14} color={colors.textSecondary} />
          <Text style={styles.workoutStatText}>{workout.duration}</Text>
        </View>
        <View style={styles.workoutStat}>
          <Ionicons name="barbell-outline" size={14} color={colors.textSecondary} />
          <Text style={styles.workoutStatText}>{workout.volume}</Text>
        </View>
        <View style={styles.workoutStat}>
          <Ionicons name="list-outline" size={14} color={colors.textSecondary} />
          <Text style={styles.workoutStatText}>{workout.exercises} exercises</Text>
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  return (
    <FlatList
      data={userWorkouts}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View>
          <ProfileHeader user={currentUser} />
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Workouts</Text>
          </View>
        </View>
      }
      renderItem={({ item }) => <WorkoutRow workout={item} />}
      contentContainerStyle={styles.list}
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: spacing.xxl,
  },
  sectionHeader: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
  },
  workoutCard: {
    backgroundColor: colors.surface,
    marginHorizontal: spacing.base,
    marginBottom: spacing.sm,
    borderRadius: 10,
    padding: spacing.base,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutTitle: {
    ...typography.bodyBold,
    color: colors.text,
  },
  workoutDate: {
    ...typography.caption,
    color: colors.textMuted,
  },
  workoutStats: {
    flexDirection: 'row',
    marginTop: spacing.sm,
    gap: spacing.base,
  },
  workoutStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  workoutStatText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
