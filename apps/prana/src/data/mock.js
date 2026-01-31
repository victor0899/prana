export const currentUser = {
  id: 'u1',
  name: 'Víctor Rodríguez',
  username: '@victorr',
  avatar: 'https://i.pravatar.cc/150?u=victor',
  bio: 'Fitness enthusiast | Lifting since 2019 💪',
  stats: {
    workouts: 248,
    followers: 1243,
    following: 389,
  },
  caloriesBurnedToday: 850,
  dailyCalorieGoal: 1200,
  friendsStreak: {
    currentStreak: 7,
    friends: [
      { id: 'u2', name: 'María G.', streak: 5 },
      { id: 'u3', name: 'Carlos L.', streak: 7 },
      { id: 'u5', name: 'Diego F.', streak: 3 },
    ],
    /* friendCount will be derived from friends.length in the component */
  },
  sleepDebt: {
    hours: 8,
    message: 'Get more sleep!',
  },
};

const users = {
  u1: currentUser,
  u2: {
    id: 'u2',
    name: 'María García',
    username: '@mariag',
    avatar: 'https://i.pravatar.cc/150?u=maria',
  },
  u3: {
    id: 'u3',
    name: 'Carlos López',
    username: '@carlosl',
    avatar: 'https://i.pravatar.cc/150?u=carlos',
  },
  u4: {
    id: 'u4',
    name: 'Ana Martínez',
    username: '@anam',
    avatar: 'https://i.pravatar.cc/150?u=ana',
  },
  u5: {
    id: 'u5',
    name: 'Diego Fernández',
    username: '@diegof',
    avatar: 'https://i.pravatar.cc/150?u=diego',
  },
};

export const feedPosts = [
  {
    id: 'p1',
    user: users.u2,
    timestamp: '2h ago',
    workoutTitle: 'Upper Body Push',
    duration: '1h 12m',
    volume: '8,450 kg',
    media: require('../../assets/media/image.png'),
    exercises: [
      { name: 'Bench Press', sets: [
        { reps: 10, weight: 60 },
        { reps: 8, weight: 70 },
        { reps: 6, weight: 80 },
        { reps: 6, weight: 80 },
      ]},
      { name: 'Overhead Press', sets: [
        { reps: 10, weight: 40 },
        { reps: 8, weight: 45 },
        { reps: 8, weight: 45 },
      ]},
      { name: 'Incline Dumbbell Press', sets: [
        { reps: 12, weight: 24 },
        { reps: 10, weight: 28 },
        { reps: 10, weight: 28 },
      ]},
      { name: 'Lateral Raises', sets: [
        { reps: 15, weight: 10 },
        { reps: 15, weight: 10 },
        { reps: 12, weight: 12 },
      ]},
    ],
    likes: 24,
    commentsCount: 5,
    liked: false,
  },
  {
    id: 'p2',
    user: users.u3,
    timestamp: '4h ago',
    workoutTitle: 'Leg Day',
    duration: '1h 30m',
    volume: '12,200 kg',
    exercises: [
      { name: 'Barbell Squat', sets: [
        { reps: 8, weight: 100 },
        { reps: 6, weight: 110 },
        { reps: 6, weight: 120 },
        { reps: 4, weight: 130 },
      ]},
      { name: 'Romanian Deadlift', sets: [
        { reps: 10, weight: 80 },
        { reps: 10, weight: 80 },
        { reps: 8, weight: 90 },
      ]},
      { name: 'Leg Press', sets: [
        { reps: 12, weight: 180 },
        { reps: 10, weight: 200 },
        { reps: 10, weight: 200 },
      ]},
      { name: 'Leg Curl', sets: [
        { reps: 12, weight: 45 },
        { reps: 12, weight: 45 },
        { reps: 10, weight: 50 },
      ]},
    ],
    likes: 42,
    commentsCount: 8,
    liked: true,
  },
  {
    id: 'p3',
    user: users.u4,
    timestamp: '6h ago',
    workoutTitle: 'Pull Day',
    duration: '58m',
    volume: '6,300 kg',
    exercises: [
      { name: 'Pull-ups', sets: [
        { reps: 10, weight: 0 },
        { reps: 8, weight: 0 },
        { reps: 8, weight: 0 },
      ]},
      { name: 'Barbell Row', sets: [
        { reps: 10, weight: 60 },
        { reps: 8, weight: 70 },
        { reps: 8, weight: 70 },
      ]},
      { name: 'Face Pulls', sets: [
        { reps: 15, weight: 20 },
        { reps: 15, weight: 20 },
        { reps: 15, weight: 22 },
      ]},
      { name: 'Bicep Curls', sets: [
        { reps: 12, weight: 14 },
        { reps: 10, weight: 16 },
        { reps: 10, weight: 16 },
      ]},
    ],
    likes: 18,
    commentsCount: 3,
    liked: false,
  },
  {
    id: 'p4',
    user: users.u5,
    timestamp: '8h ago',
    workoutTitle: 'Full Body Strength',
    duration: '1h 45m',
    volume: '15,800 kg',
    exercises: [
      { name: 'Deadlift', sets: [
        { reps: 5, weight: 140 },
        { reps: 5, weight: 150 },
        { reps: 3, weight: 160 },
        { reps: 3, weight: 170 },
      ]},
      { name: 'Bench Press', sets: [
        { reps: 8, weight: 80 },
        { reps: 6, weight: 90 },
        { reps: 6, weight: 90 },
      ]},
      { name: 'Barbell Squat', sets: [
        { reps: 8, weight: 100 },
        { reps: 6, weight: 110 },
        { reps: 6, weight: 110 },
      ]},
      { name: 'Weighted Chin-ups', sets: [
        { reps: 8, weight: 10 },
        { reps: 6, weight: 15 },
        { reps: 6, weight: 15 },
      ]},
    ],
    likes: 67,
    commentsCount: 12,
    liked: false,
  },
  {
    id: 'p5',
    user: users.u1,
    timestamp: '1d ago',
    workoutTitle: 'Push Hypertrophy',
    duration: '1h 05m',
    volume: '9,100 kg',
    exercises: [
      { name: 'Dumbbell Bench Press', sets: [
        { reps: 12, weight: 30 },
        { reps: 10, weight: 34 },
        { reps: 10, weight: 34 },
        { reps: 8, weight: 36 },
      ]},
      { name: 'Cable Flyes', sets: [
        { reps: 15, weight: 15 },
        { reps: 12, weight: 17 },
        { reps: 12, weight: 17 },
      ]},
      { name: 'Arnold Press', sets: [
        { reps: 10, weight: 20 },
        { reps: 10, weight: 22 },
        { reps: 8, weight: 24 },
      ]},
      { name: 'Tricep Pushdowns', sets: [
        { reps: 15, weight: 25 },
        { reps: 12, weight: 30 },
        { reps: 12, weight: 30 },
      ]},
    ],
    likes: 31,
    commentsCount: 4,
    liked: false,
  },
];

export const comments = {
  p1: [
    { id: 'c1', user: users.u3, text: 'Great session! That bench PR is coming soon 🔥', timestamp: '1h ago' },
    { id: 'c2', user: users.u1, text: 'Solid volume on the OHP!', timestamp: '1h ago' },
    { id: 'c3', user: users.u5, text: 'Need to try that rep scheme for incline', timestamp: '45m ago' },
    { id: 'c4', user: users.u4, text: 'Beast mode 💪', timestamp: '30m ago' },
    { id: 'c5', user: users.u2, text: 'Thanks everyone! Felt strong today', timestamp: '15m ago' },
  ],
  p2: [
    { id: 'c6', user: users.u1, text: '130kg squat is insane, bro!', timestamp: '3h ago' },
    { id: 'c7', user: users.u2, text: 'Leg day king 👑', timestamp: '3h ago' },
    { id: 'c8', user: users.u4, text: 'RDLs at 90kg? Goals!', timestamp: '2h ago' },
    { id: 'c9', user: users.u5, text: 'That volume is crazy', timestamp: '2h ago' },
    { id: 'c10', user: users.u3, text: 'Was a good one 😤', timestamp: '1h ago' },
    { id: 'c11', user: users.u1, text: 'Leg press sets looked clean', timestamp: '1h ago' },
    { id: 'c12', user: users.u2, text: 'Appreciate it! 🙏', timestamp: '45m ago' },
    { id: 'c13', user: users.u4, text: 'See you next leg day!', timestamp: '30m ago' },
  ],
  p3: [
    { id: 'c14', user: users.u2, text: 'Pull-ups without weight are underrated', timestamp: '5h ago' },
    { id: 'c15', user: users.u1, text: 'Nice back session!', timestamp: '4h ago' },
    { id: 'c16', user: users.u5, text: 'Face pulls are key 🔑', timestamp: '3h ago' },
  ],
  p4: [
    { id: 'c17', user: users.u1, text: '170kg deadlift!! Monster', timestamp: '7h ago' },
    { id: 'c18', user: users.u2, text: 'Full body strength is the way', timestamp: '7h ago' },
    { id: 'c19', user: users.u3, text: 'Weighted chin-ups too? Respect', timestamp: '6h ago' },
    { id: 'c20', user: users.u4, text: 'How long have you been training?', timestamp: '6h ago' },
    { id: 'c21', user: users.u5, text: 'About 5 years now!', timestamp: '5h ago' },
    { id: 'c22', user: users.u1, text: 'That squat to deadlift ratio is perfect', timestamp: '5h ago' },
    { id: 'c23', user: users.u2, text: 'Teach me the ways 🙏', timestamp: '4h ago' },
    { id: 'c24', user: users.u3, text: 'Savage workout', timestamp: '4h ago' },
    { id: 'c25', user: users.u4, text: 'Need a program like this', timestamp: '3h ago' },
    { id: 'c26', user: users.u5, text: 'Thanks fam! Consistency is key', timestamp: '3h ago' },
    { id: 'c27', user: users.u1, text: '1h 45m is commitment 💪', timestamp: '2h ago' },
    { id: 'c28', user: users.u2, text: 'Absolute unit', timestamp: '1h ago' },
  ],
  p5: [
    { id: 'c29', user: users.u3, text: 'Arnold press is so underrated', timestamp: '20h ago' },
    { id: 'c30', user: users.u4, text: 'Nice hypertrophy work!', timestamp: '18h ago' },
    { id: 'c31', user: users.u2, text: 'Cable flyes hit different 🔥', timestamp: '15h ago' },
    { id: 'c32', user: users.u5, text: 'Solid push session bro', timestamp: '12h ago' },
  ],
};

export const routines = [
  {
    id: 'r1',
    name: 'Upper Body Push',
    description: 'Focused on chest, shoulders and triceps. Progressive overload scheme with compound movements first, followed by isolation work.',
    muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
    estimatedDuration: '~60 min',
    isAIGenerated: true,
    mainActivityTag: 'Builds punching power for Boxing',
    caloriesBurned: '350 kcal',
    icon: 'barbell-outline',
    exercises: [
      {
        name: 'Bench Press',
        sets: [
          { setNumber: 1, reps: 10, weight: 60 },
          { setNumber: 2, reps: 8, weight: 70 },
          { setNumber: 3, reps: 6, weight: 80 },
          { setNumber: 4, reps: 6, weight: 80 },
        ],
      },
      {
        name: 'Overhead Press',
        sets: [
          { setNumber: 1, reps: 10, weight: 40 },
          { setNumber: 2, reps: 8, weight: 45 },
          { setNumber: 3, reps: 8, weight: 45 },
        ],
      },
      {
        name: 'Incline Dumbbell Press',
        sets: [
          { setNumber: 1, reps: 12, weight: 24 },
          { setNumber: 2, reps: 10, weight: 28 },
          { setNumber: 3, reps: 10, weight: 28 },
        ],
      },
      {
        name: 'Lateral Raises',
        sets: [
          { setNumber: 1, reps: 15, weight: 10 },
          { setNumber: 2, reps: 15, weight: 10 },
          { setNumber: 3, reps: 12, weight: 12 },
        ],
      },
      {
        name: 'Tricep Pushdowns',
        sets: [
          { setNumber: 1, reps: 15, weight: 25 },
          { setNumber: 2, reps: 12, weight: 30 },
          { setNumber: 3, reps: 12, weight: 30 },
        ],
      },
    ],
  },
  {
    id: 'r2',
    name: 'Lower Body Strength',
    description: 'Quad and hamstring dominant session. Heavy compound lifts with moderate accessory volume for balanced leg development.',
    muscleGroups: ['Quads', 'Hamstrings', 'Glutes', 'Calves'],
    estimatedDuration: '~70 min',
    isAIGenerated: true,
    mainActivityTag: 'Footwork & stance stability for Boxing',
    icon: 'analytics-outline',
    exercises: [
      {
        name: 'Barbell Squat',
        sets: [
          { setNumber: 1, reps: 8, weight: 100 },
          { setNumber: 2, reps: 6, weight: 110 },
          { setNumber: 3, reps: 6, weight: 120 },
          { setNumber: 4, reps: 4, weight: 130 },
        ],
      },
      {
        name: 'Romanian Deadlift',
        sets: [
          { setNumber: 1, reps: 10, weight: 80 },
          { setNumber: 2, reps: 10, weight: 80 },
          { setNumber: 3, reps: 8, weight: 90 },
        ],
      },
      {
        name: 'Leg Press',
        sets: [
          { setNumber: 1, reps: 12, weight: 180 },
          { setNumber: 2, reps: 10, weight: 200 },
          { setNumber: 3, reps: 10, weight: 200 },
        ],
      },
      {
        name: 'Leg Curl',
        sets: [
          { setNumber: 1, reps: 12, weight: 45 },
          { setNumber: 2, reps: 12, weight: 45 },
          { setNumber: 3, reps: 10, weight: 50 },
        ],
      },
      {
        name: 'Standing Calf Raises',
        sets: [
          { setNumber: 1, reps: 15, weight: 60 },
          { setNumber: 2, reps: 15, weight: 60 },
          { setNumber: 3, reps: 12, weight: 70 },
        ],
      },
    ],
  },
  {
    id: 'r3',
    name: 'Pull Day',
    description: 'Back and biceps session. Vertical and horizontal pulling movements for complete back development, with curl variations to finish.',
    muscleGroups: ['Back', 'Biceps', 'Rear Delts'],
    estimatedDuration: '~55 min',
    isAIGenerated: true,
    mainActivityTag: 'Guard endurance for Boxing',
    icon: 'arrow-up-circle-outline',
    exercises: [
      {
        name: 'Pull-ups',
        sets: [
          { setNumber: 1, reps: 10, weight: 0 },
          { setNumber: 2, reps: 8, weight: 0 },
          { setNumber: 3, reps: 8, weight: 0 },
        ],
      },
      {
        name: 'Barbell Row',
        sets: [
          { setNumber: 1, reps: 10, weight: 60 },
          { setNumber: 2, reps: 8, weight: 70 },
          { setNumber: 3, reps: 8, weight: 70 },
        ],
      },
      {
        name: 'Seated Cable Row',
        sets: [
          { setNumber: 1, reps: 12, weight: 50 },
          { setNumber: 2, reps: 10, weight: 55 },
          { setNumber: 3, reps: 10, weight: 55 },
        ],
      },
      {
        name: 'Face Pulls',
        sets: [
          { setNumber: 1, reps: 15, weight: 20 },
          { setNumber: 2, reps: 15, weight: 20 },
          { setNumber: 3, reps: 15, weight: 22 },
        ],
      },
      {
        name: 'Bicep Curls',
        sets: [
          { setNumber: 1, reps: 12, weight: 14 },
          { setNumber: 2, reps: 10, weight: 16 },
          { setNumber: 3, reps: 10, weight: 16 },
        ],
      },
    ],
  },
  {
    id: 'r4',
    name: 'Full Body Power',
    description: 'Full body session hitting all major muscle groups. Focused on the big compound lifts for overall strength and power development.',
    muscleGroups: ['Full Body'],
    estimatedDuration: '~75 min',
    isAIGenerated: true,
    mainActivityTag: 'Fight conditioning for Boxing',
    icon: 'flash-outline',
    exercises: [
      {
        name: 'Deadlift',
        sets: [
          { setNumber: 1, reps: 5, weight: 140 },
          { setNumber: 2, reps: 5, weight: 150 },
          { setNumber: 3, reps: 3, weight: 160 },
          { setNumber: 4, reps: 3, weight: 170 },
        ],
      },
      {
        name: 'Bench Press',
        sets: [
          { setNumber: 1, reps: 8, weight: 80 },
          { setNumber: 2, reps: 6, weight: 90 },
          { setNumber: 3, reps: 6, weight: 90 },
        ],
      },
      {
        name: 'Barbell Squat',
        sets: [
          { setNumber: 1, reps: 8, weight: 100 },
          { setNumber: 2, reps: 6, weight: 110 },
          { setNumber: 3, reps: 6, weight: 110 },
        ],
      },
      {
        name: 'Weighted Chin-ups',
        sets: [
          { setNumber: 1, reps: 8, weight: 10 },
          { setNumber: 2, reps: 6, weight: 15 },
          { setNumber: 3, reps: 6, weight: 15 },
        ],
      },
      {
        name: 'Dumbbell Shoulder Press',
        sets: [
          { setNumber: 1, reps: 10, weight: 22 },
          { setNumber: 2, reps: 8, weight: 24 },
          { setNumber: 3, reps: 8, weight: 24 },
        ],
      },
    ],
  },
  {
    id: 'r5',
    name: 'Core & Mobility',
    description: 'Low intensity session focused on core strength, flexibility and mobility work. Great for active recovery days.',
    muscleGroups: ['Core', 'Hip Flexors', 'Mobility'],
    estimatedDuration: '~40 min',
    isAIGenerated: true,
    mainActivityTag: 'Core rotation & recovery for Boxing',
    icon: 'body-outline',
    exercises: [
      {
        name: 'Plank Hold',
        sets: [
          { setNumber: 1, reps: 60, weight: 0 },
          { setNumber: 2, reps: 60, weight: 0 },
          { setNumber: 3, reps: 45, weight: 0 },
        ],
      },
      {
        name: 'Dead Bug',
        sets: [
          { setNumber: 1, reps: 12, weight: 0 },
          { setNumber: 2, reps: 12, weight: 0 },
          { setNumber: 3, reps: 10, weight: 0 },
        ],
      },
      {
        name: 'Bird Dog',
        sets: [
          { setNumber: 1, reps: 10, weight: 0 },
          { setNumber: 2, reps: 10, weight: 0 },
          { setNumber: 3, reps: 10, weight: 0 },
        ],
      },
      {
        name: 'Hip 90/90 Stretch',
        sets: [
          { setNumber: 1, reps: 30, weight: 0 },
          { setNumber: 2, reps: 30, weight: 0 },
        ],
      },
      {
        name: 'Cat-Cow',
        sets: [
          { setNumber: 1, reps: 15, weight: 0 },
          { setNumber: 2, reps: 15, weight: 0 },
        ],
      },
    ],
  },
];

export const userWorkouts = [
  {
    id: 'w1',
    title: 'Push Hypertrophy',
    date: 'Jan 30, 2026',
    duration: '1h 05m',
    exercises: 4,
    volume: '9,100 kg',
  },
  {
    id: 'w2',
    title: 'Pull Strength',
    date: 'Jan 28, 2026',
    duration: '1h 10m',
    exercises: 5,
    volume: '7,800 kg',
  },
  {
    id: 'w3',
    title: 'Leg Day',
    date: 'Jan 26, 2026',
    duration: '1h 25m',
    exercises: 5,
    volume: '11,500 kg',
  },
  {
    id: 'w4',
    title: 'Upper Body Push',
    date: 'Jan 24, 2026',
    duration: '1h 00m',
    exercises: 4,
    volume: '8,200 kg',
  },
  {
    id: 'w5',
    title: 'Full Body',
    date: 'Jan 22, 2026',
    duration: '1h 30m',
    exercises: 6,
    volume: '13,400 kg',
  },
];
