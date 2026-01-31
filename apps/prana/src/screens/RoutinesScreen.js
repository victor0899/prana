import React from 'react';
import { View, Text, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import RoutineCard from '../components/RoutineCard';
import { routines } from '../data/mock';
import { colors, spacing, typography } from '../theme';

const CARD_WIDTH_PERCENTAGE = 0.8;

export default function RoutinesScreen({ navigation }) {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = screenWidth * CARD_WIDTH_PERCENTAGE;
  const gap = spacing.md;
  const contentOffset = (screenWidth - cardWidth) / 2;

  const handleRoutinePress = (routine) => {
    navigation.navigate('RoutineDetail', { routine });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Generated Routines</Text>
        <Text style={styles.subtitle}>
          Specially adapted for you
        </Text>
      </View>
      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.list, { paddingHorizontal: contentOffset }]}
        snapToInterval={cardWidth + gap}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={{ width: cardWidth, marginRight: gap }}>
            <RoutineCard
              routine={item}
              onPress={() => handleRoutinePress(item)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  list: {
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
  },
});
