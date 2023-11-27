import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,img ,Button,Text} from 'react-native';
import logo from '../assets/logo.png';
import { TextInput } from "react-native-paper";
export default function ResendEmail(navigation) {
  return (
    <View style={styles.container}>
      <a href='#' >&larr;</a>
      <img src={logo} alignItems= 'center' justifyContent='center'></img>

      <View style={styles.TextInput}>
        <TextInput left={<TextInput.Icon icon="email"/>} placeholder='Email'></TextInput>
      </View>

      <View style={styles.Button}>
        <Button title='        Gửi lại email kích hoạt        ' color='#4682b4' ></Button>
      </View>

      
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
  TextInput: {
    flex :1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  a: {
    flext: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  Text: {
    flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
  }
  
});