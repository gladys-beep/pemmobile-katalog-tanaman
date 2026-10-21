import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Lencana({ label }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#c8e6c9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginVertical: 4,
  },
  badgeText: {
    color: '#1b5e20',
    fontSize: 12,
    fontWeight: '600',
  },
});