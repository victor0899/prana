import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

export default function FriendsStreakCard({ streakData }) {
  const { currentStreak, friends } = streakData;
  const friendCount = friends ? friends.length : 0; // Derive friendCount from the new friends array

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="people-outline" size={24} color={colors.primary} />
        <Text style={styles.title}>Friends Streak</Text>
      </View>
      <Text style={styles.mainStreakText}>
        You're on a <Text style={styles.streakValue}>{currentStreak} day</Text> streak!
      </Text>
      {friendCount > 0 ? (
        <View style={styles.friendsList}>
          {friends.map((friend) => (
            <View key={friend.id} style={styles.friendItem}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <Text style={styles.friendStreak}>{friend.streak} days</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.encouragementText}>Connect with friends to start a streak!</Text>
      )}
      <Text style={styles.encouragementText}>Keep motivating each other!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    justifyContent: 'space-between',
    width: '48%', // Occupy full width, equivalent to two squares
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
  mainStreakText: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },
  streakValue: {
    ...typography.h3,
    color: colors.primary,
  },
  friendsList: {
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
    alignSelf: 'stretch',
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: spacing.xs,
  },
  friendName: {
    ...typography.body,
    color: colors.text,
  },
  friendStreak: {
    ...typography.bodyBold,
    color: colors.primary,
  },
  encouragementText: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
