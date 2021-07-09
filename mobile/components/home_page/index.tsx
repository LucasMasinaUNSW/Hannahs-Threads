import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/core';
import Activities from './activities';
import Upload from './upload';

interface HomeProps {
  navigation: NavigationProp<any, any>
}

export default function Home(props: HomeProps) {
  return (
    <View style={styles.container}>
      <Text>Hannah's Threads</Text>
      <Activities navigation={props.navigation} />
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
