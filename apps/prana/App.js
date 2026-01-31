import React from 'react';
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigation from './src/navigation';
import { colors } from './src/theme';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
    notification: colors.primary,
  },
};

function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Navigation />
    </NavigationContainer>
  );
}

registerRootComponent(App);
