import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Designs_Page() {
  return (
    <View style={styles.container}>  
      <Text>Designs Screen</Text>
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
