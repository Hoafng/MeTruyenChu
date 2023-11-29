import React from 'react';
import { Image, View } from 'react-native';
import Navbar from './Navbar';
import {ScrollView, StyleSheet } from 'react-native';
import Body from './Body';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <ScrollView >
      {/* <Image source={require('../assets/logo.png')} style={styles.logoImage}/> */}
      <Body/>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: 'flex-start',
    
  },
  logoImage: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
},
})

