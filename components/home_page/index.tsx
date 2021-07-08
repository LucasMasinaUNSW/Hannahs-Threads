import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Activities from './activities';
import Upload from './upload'

export default function Home() {
  return (
    <View style={styles.container}>  
      <Text>Hannah's Threads</Text>
      <Activities />
      <Upload />
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
