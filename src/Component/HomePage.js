import React from 'react';
import { View } from 'react-native';
import Navbar from './Navbar';
import { StyleSheet } from 'react-native';
import Header from './Header'

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Navbar/>
      <ScrollView>
        <Header/>
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

