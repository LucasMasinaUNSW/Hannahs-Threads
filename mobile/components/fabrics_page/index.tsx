import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Fabrics_Page() {
  return (
    <View style={styles.container}>  
      <Text>Fabrics Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
