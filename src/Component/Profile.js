import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

import { StyleSheet, View} from 'react-native';



export default function Profile({navigation}) {
    const [user, setUser] = useState({});
    useEffect(() => {  
        fetchData();
      }, []);
    const fetchData = async () => {
        try {
          const userSignin = await AsyncStorage.getItem('email');
          console.log(userSignin+'1')
          if (userSignin) {
            const response = await fetch('http://localhost:3000/User');
            const db = await response.json();
            const userfind = db.find((userfind) => userfind.email === userSignin);
            if (userfind) {
              setUser(userfind);
              console.log(userfind+'2')
            } else {
                navigation.navigate('Signin')
            }
          } else {navigation.navigate('Signin')}
        } catch (error) {
            navigation.navigate('Signin')
            console.log(user)
        }
      };
      const handleLogout = async () => {
        try {
         
          await AsyncStorage.removeItem('email');
          
          navigation.navigate('Signin');
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <View style={styles.container}>
     <View  style={styles.title}>
       <Text style={styles.text}>ID:{user.user_name}</Text>
       <Text style={styles.text}>Email:{user.email}</Text>
    </View>   
    <View style={styles.DangXuat}>
        <TouchableOpacity style={styles.btnDangXuat} onPress={handleLogout}>
            <Text>Đăng xuất</Text>
        </TouchableOpacity>    
    </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    padding:20
  },
  title:{
    width:'80%',
    height:100,
    justifyContent:'space-around'
  },text:{
    fontSize:15
  },DangXuat:{
    alignItems:'center',
    justifyContent:'flex-end',
    height:400,
    width:'100%'
  }
  ,btnDangXuat:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'red',
    width:200,
    height:50,
  },
});