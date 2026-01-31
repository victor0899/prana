import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CommentItem from '../components/CommentItem';
import { comments as mockComments, currentUser } from '../data/mock';
import { colors, spacing, typography, globalStyles } from '../theme';

export default function PostDetailScreen({ route }) {
  const { post } = route.params;
  const [commentList, setCommentList] = useState(mockComments[post.id] || []);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: `c-new-${Date.now()}`,
      user: currentUser,
      text: newComment.trim(),
      timestamp: 'Just now',
    };
    setCommentList((prev) => [...prev, comment]);
    setNewComment('');
  };

  const ListHeader = () => (
    <View>
      {/* Post Header */}
      <View style={[globalStyles.row, styles.postHeader]}>
        <Image source={{ uri: post.user.avatar }} style={globalStyles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.userName}>{post.user.name}</Text>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
      </View>

      {/* Workout Info */}
      <View style={styles.workoutSection}>
        <Text style={styles.workoutTitle}>{post.workoutTitle}</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Ionicons name="time-outline" size={16} color={colors.primary} />
            <Text style={styles.statText}>{post.duration}</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="barbell-outline" size={16} color={colors.primary} />
            <Text style={styles.statText}>{post.volume}</Text>
          </View>
        </View>
      </View>

      {/* Full Exercise List */}
      <View style={styles.exerciseSection}>
        {post.exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseBlock}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            {exercise.sets.map((set, setIndex) => (
              <View key={setIndex} style={styles.setRow}>
                <Text style={styles.setNumber}>Set {setIndex + 1}</Text>
                <Text style={styles.setDetail}>
                  {set.reps} reps{set.weight > 0 ? ` × ${set.weight} kg` : ''}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Comments Header */}
      <View style={styles.commentsHeader}>
        <Text style={styles.commentsTitle}>
          Comments ({commentList.length})
        </Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={commentList}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        renderItem={({ item }) => <CommentItem comment={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Comment Input */}
      <View style={styles.inputContainer}>
        <Image source={{ uri: currentUser.avatar }} style={styles.inputAvatar} />
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          placeholderTextColor={colors.textMuted}
          value={newComment}
          onChangeText={setNewComment}
          returnKeyType="send"
          onSubmitEditing={handleAddComment}
        />
        <TouchableOpacity onPress={handleAddComment} disabled={!newComment.trim()}>
          <Ionicons
            name="send"
            size={22}
            color={newComment.trim() ? colors.primary : colors.textMuted}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  postHeader: {
    padding: spacing.base,
  },
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
  workoutSection: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.base,
  },
  workoutTitle: {
    ...typography.h2,
    color: colors.text,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: spacing.sm,
    gap: spacing.lg,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  statText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  exerciseSection: {
    paddingHorizontal: spacing.base,
  },
  exerciseBlock: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  exerciseName: {
    ...typography.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  setNumber: {
    ...typography.caption,
    color: colors.textMuted,
  },
  setDetail: {
    ...typography.body,
    color: colors.textSecondary,
  },
  commentsHeader: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing.base,
  },
  commentsTitle: {
    ...typography.h3,
    color: colors.text,
  },
  list: {
    paddingBottom: spacing.base,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
  inputAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.surfaceLight,
  },
  input: {
    flex: 1,
    ...typography.body,
    color: colors.text,
    marginHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});
