import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RoutineCard from '../components/RoutineCard';
import ChatBar from '../components/ChatBar'; // Import ChatBar
import ChatModal from '../components/ChatModal'; // Import ChatModal
import { routines } from '../data/mock';
import { colors, spacing, typography } from '../theme';

const CARD_WIDTH_PERCENTAGE = 0.8;
const CHAT_BAR_ESTIMATED_HEIGHT = 80; // Approximate height of the chat bar
const BOTTOM_NAV_BAR_ESTIMATED_HEIGHT = 50; // Estimated height of the bottom navigation tab bar
const BOTTOM_MENU_GAP = spacing.md; // Constant for the gap above the bottom menu

export default function RoutinesScreen({ navigation }) {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = screenWidth * CARD_WIDTH_PERCENTAGE;
  const gap = spacing.md;
  const contentOffset = (screenWidth - cardWidth) / 2;

  const [isChatModalVisible, setChatModalVisible] = useState(false); // State for modal visibility

  const handleRoutinePress = (routine) => {
    navigation.navigate('RoutineDetail', { routine });
  };

  const handleSendMessage = (message) => {
    console.log(`Global message from Routines screen: ${message}`);
    // Here you would typically handle the message, maybe sending it to a global AI service
    // or a dedicated chat context for the Routines section.
    alert(`Mensaje global enviado: ${message}`);
  };

  const openChatModal = () => setChatModalVisible(true);
  const closeChatModal = () => setChatModalVisible(false);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>AI Generated Routines</Text>
            <TouchableOpacity onPress={openChatModal} style={styles.sparkleIcon}>
              <Ionicons name="sparkles" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>
            Specially adapted for you
          </Text>
        </View>
        <FlatList
          data={routines}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.list,
            {
              paddingHorizontal: contentOffset,
              // Adjust paddingBottom to account for ChatBar height, gap, and bottom nav bar height
              paddingBottom: CHAT_BAR_ESTIMATED_HEIGHT + BOTTOM_MENU_GAP + BOTTOM_NAV_BAR_ESTIMATED_HEIGHT + spacing.md,
            }
          ]}
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
      {/* Absolutely positioned ChatBar */}
      <View style={styles.chatBarContainer}>
        <ChatBar onSubmitMessage={handleSendMessage} onInputPress={openChatModal} />
      </View>

      {/* Chat Modal */}
      <ChatModal
        visible={isChatModalVisible}
        onClose={closeChatModal}
        onSubmitMessage={handleSendMessage} // Use onSubmitMessage
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainContent: {
    flex: 1, // Ensures main content takes all available space above the chat bar
  },
  header: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the title and icon together
  },
  title: {
    ...typography.h2,
    color: colors.text,
    textAlign: 'center',
  },
  sparkleIcon: {
    marginLeft: spacing.sm, // Space between title and icon
    padding: spacing.xs, // Make it easier to tap
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  list: {
    paddingTop: spacing.md,
  },
  chatBarContainer: {
    position: 'absolute',
    bottom: BOTTOM_NAV_BAR_ESTIMATED_HEIGHT + BOTTOM_MENU_GAP, // Position above nav bar with gap
    left: 0,
    right: 0,
  },
});
