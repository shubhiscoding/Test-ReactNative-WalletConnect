import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(100,160,160, 0.3)',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2F5233',
    marginBottom: 16,
  },
});

export default Card;
