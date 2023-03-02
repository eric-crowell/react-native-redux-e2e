import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Counter() {
    return (
      <View>
        <Text style={styles.textBase}>
            <Text testID="counter-title" style={styles.textTitle}>
                Counter
            </Text>
            <Button
                testID="counter-increment-button"
                title="Increment"
            />
        </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    textBase: {
        fontSize: 12
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});