import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,img ,Button,Text} from 'react-native';
import logo from '../assets/logo.png';
import { TextInput } from "react-native-paper";
export default function Signin(navigation) {
  return (
    <View style={styles.container}>
      <a href='#' >X</a>
      <img src={logo} alignItems= 'center' justifyContent='center'></img>

      <View style={styles.TextInput}>
        <TextInput left={<TextInput.Icon icon="email"/>} placeholder='Email'></TextInput>
        <TextInput left={<TextInput.Icon icon="lock"/>} placeholder='Mật Khẩu'></TextInput>
      </View>

      <View style={styles.Button}>
        <Button title='Đăng Nhập' color='#4682b4' ></Button>
      </View>

      <View style={styles.Button}>
        <Button title='Đăng ký' color='#808080'></Button>
      </View >
      <View style={styles.a}>
        <a href='#'>Gửi lại email kích hoạt</a>
        <a href='#'>Quên mật khẩu</a>
      </View>
      <View style={styles.Text}>
        <Text>
          Khi bạn nhấn đăng nhập mặc nhiên được coi là đồng ý với <br/><a href='#'>Chính sách bảo mật </a>
          cùng <a href='#'>Điều khoản và điều kiện</a>    
        </Text>
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