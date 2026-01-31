# Prana

## What is Prana
Prana is a hybrid application (mobile + web) that supports the adherence of wellness into people's lives — where context matters. The name follows the Sanskrit definition of vital energy. The core differentiator is that we collect and persist user data so AI suggestions don't hallucinate and stay aligned to the user's goals, improving adherence to a healthy lifestyle.

## Design Language
- Mostly white colors combined with a relaxed orange
- "Wellness" experience: slow fades, clean UI, spaciousness
- The user should never feel overwhelmed

## Subscription Tiers

**Free** — Create and track workouts. Macronutrients tracker and calories. Community features. Integrations with Apple Health and Google Health. Meditation. Mood tracker.

**Pro** — AI suggested plans, AI camera macro estimation, AI tips, integration with Strava/Garmin/Oura, sleep tracking, stress notifications, AI video-chat for form analysis.

**Business (B2B)** — Wellness centers can register customers as a benefit. Coaches manage mentees in a unified dashboard with progress visibility.

## Features (Full Vision)

### Context & Goals
- User sets fitness goals: fat loss, muscle growth, body recomposition, cardiovascular health, overall health, etc.
- User context gathering: weight, height, age, illness, injuries, body limitations, food restrictions, allergies, type of work, training frequency.
- Select activity types and priority (e.g., boxing as main, strength training as secondary).

### AI-Powered Plans
- Suggested workout plans based on full user context (science + AI based).
- Weekly evolution of the plan based on previous performance and context.
- Nutrition suggestions based on activity type, body composition, timing, food allergies/restrictions.
- AI suggestions using smart device data (sleep from Oura, HRV, body temperature) to adjust training load.
- Notifications based on stress levels suggesting breathwork or meditation.

### Tracking
- Workout tracking for any activity type.
- Macronutrients tracker and calories + AI camera macro estimation.
- Mood tracker across the day and before/after workout.
- Lab exam results upload for custom advice.

### Community
- Follow friends, feed of workouts visible to connections.
- Like and comment on workouts.

### Integrations
- Apple Health, Google Health, Garmin, Strava, Oura.

### Content
- Video collection for strength training and stretching exercises (form + tips).
- AI video-chat agent for form analysis and feedback.
- Meditation audio collection and video techniques.

### Dashboard & Coaching
- Centralized dashboard for visualizing wellness progress with AI-based advice.
- Data access for human coaches (segmented: workout coach, nutritionist, etc.).
- B2B: wellness centers register customers, coaches manage mentees in one dashboard.

## Repo Structure
```
apps/
├── prana/          # React Native (Expo SDK 54) mobile app
├── frontend/       # Web app (TBD)
├── backend/        # API server (TBD)
└── landing-page/   # Marketing landing page (TBD)
```

## Tech Stack (Current)
- **Mobile**: React Native with Expo SDK 54 (managed workflow)
- **Navigation**: React Navigation v7 (Bottom Tabs + Native Stack)
- **Package manager**: pnpm
- **Node**: v22

## Mobile App Architecture (apps/prana/)
```
App.js                          # Entry point, registerRootComponent, NavigationContainer
src/
├── navigation/index.js         # BottomTabNavigator (Feed, Profile) + Stack navigators
├── screens/
│   ├── FeedScreen.js           # FlatList of workout posts with like toggle
│   ├── PostDetailScreen.js     # Full workout detail + comments + add comment
│   └── ProfileScreen.js        # Profile header + recent workouts
├── components/
│   ├── FeedCard.js             # Workout post card (avatar, stats, exercises, actions)
│   ├── CommentItem.js          # Single comment row
│   └── ProfileHeader.js        # Avatar, name, bio, stats
├── data/
│   └── mock.js                 # Hardcoded users, posts, comments, workouts
└── theme/
    └── index.js                # colors, spacing, typography, globalStyles
```

## Conventions
- Use pnpm, not npm or yarn
- Dark theme currently in the mobile app (will be updated to match brand: white + orange)
- Mock data for now, no backend integration yet
- User is assumed already logged in
- State is local (useState), no global state management yet
