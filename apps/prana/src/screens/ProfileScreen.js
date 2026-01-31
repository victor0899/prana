import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import LatestWorkoutCard from '../components/LatestWorkoutCard';
import CaloriesBurnedCard from '../components/CaloriesBurnedCard';
import FriendsStreakCard from '../components/FriendsStreakCard';
import { currentUser, userWorkouts } from '../data/mock';
import { colors, spacing, typography, globalStyles } from '../theme';

export default function ProfileScreen() {
  const latestWorkout = userWorkouts.length > 0 ? userWorkouts[0] : null;

  return (
    <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader user={currentUser} />

      <View style={styles.cardsContainer}>
        <LatestWorkoutCard workout={latestWorkout} />
        <CaloriesBurnedCard
          burned={currentUser.caloriesBurnedToday}
          goal={currentUser.dailyCalorieGoal}
        />
        <FriendsStreakCard streakData={currentUser.friendsStreak} />
      </View>

      {/* Optionally, you can add a section for "All Workouts" here, if needed,
          e.g., a button to navigate to a dedicated workouts list screen.
          For now, the section "Recent Workouts" and the list is removed as per request.
      */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    marginTop: spacing.md,
  },
});
