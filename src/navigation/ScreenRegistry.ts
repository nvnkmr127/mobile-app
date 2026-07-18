import React from 'react';
import { View, Text } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { NotificationScreen } from '../screens/NotificationScreen';

// Fallback screen for unmapped modules
const FallbackScreen = ({ module }: { module: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Module Not Implemented: {module}</Text>
  </View>
);

// Registry maps dynamic backend 'app_slug' or 'feature_key' to native React screens.
// Only modules with a native screen are registered; anything else falls back.
// NOTE: 'crm' / 'estimator' are server-side modules with no native screen yet.
export const SCREEN_REGISTRY: Record<string, React.FC<any>> = {
  home: HomeScreen,
  profile: ProfileScreen,
  notifications: NotificationScreen,
};

export const resolveScreen = (moduleKey: string): React.FC<any> => {
  return SCREEN_REGISTRY[moduleKey] || FallbackScreen;
};
