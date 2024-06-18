import React from 'react';
import { Stack } from 'expo-router';

export default function BookDetailsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[bookid]" />
    </Stack>
  );
}
