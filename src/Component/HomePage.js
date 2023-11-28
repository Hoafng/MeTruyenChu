import React from 'react';
import { View } from 'react-native';
import Navbar from './Navbar';
import {ScrollView, StyleSheet } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <ScrollView >
        {/* <Header/> */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
})

