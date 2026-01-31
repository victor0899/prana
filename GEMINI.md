# Project Overview

This project, "prana," is a mobile application built with React Native and Expo. It appears to be a fitness-focused social media application. Users can share their workouts, view a feed of posts from other users, and browse a list of workout routines.

The app uses a bottom tab navigator for main navigation between the "Feed," "Routines," and "Profile" sections. Each section has a stack navigator for nested screens. The UI is custom-themed, and the data is currently mocked.

The project is structured as a monorepo with an `apps` directory, but only the `prana` application is substantially developed.

## Building and Running

To run the application, you will need to have Node.js and the Expo CLI installed.

1.  **Install dependencies:**
    ```bash
    cd apps/prana
    npm install
    ```

2.  **Run the application:**
    *   To run on iOS:
        ```bash
        npm run ios
        ```
    *   To run on Android:
        ```bash
        npm run android
        ```
    *   To run in the web browser:
        ```bash
        npm run web
        ```

## Development Conventions

*   **State Management:** Component-level state is managed with `useState`. There is no global state management library like Redux or Zustand.
*   **Styling:** Styles are written in JavaScript using `StyleSheet.create`. A custom theme is defined in `src/theme/index.js`.
*   **Navigation:** React Navigation is used for all navigation.
*   **Data:** All data is currently mocked and stored in `src/data/mock.js`.
*   **Components:** Reusable components are located in the `src/components` directory.
*   **Screens:** Application screens are located in the `src/screens` directory.
