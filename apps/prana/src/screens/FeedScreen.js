import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FeedCard from '../components/FeedCard';
import { feedPosts } from '../data/mock';
import { colors, spacing } from '../theme';

export default function FeedScreen({ navigation }) {
  const [posts, setPosts] = useState(feedPosts);

  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handlePostPress = (post) => {
    navigation.navigate('PostDetail', { post });
  };

  const handleShare = (postId) => {
    alert(`Share post ${postId} pressed!`);
    // In a real app, you would use React Native's Share API here
    // Share.share({
    //   message: 'Check out this workout post!',
    //   url: `https://yourapp.com/posts/${postId}`,
    // });
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <FeedCard
          post={item}
          onPress={() => handlePostPress(item)}
          onLike={() => handleLike(item.id)}
          onShare={() => handleShare(item.id)} // Pass the handleShare function
        />
      )}
      contentContainerStyle={styles.list}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
  },
});
