import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.dangnhap}>Đăng nhập</Text>
      <Text style={styles.title}>Nhập số điện thoại</Text>
      <Text style={styles.title1}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput style={styles.input}
      placeholder="Nhập số điện thoại của bạn"
      keyboardType="phone-pad">  
      </TextInput>
      <Button title='Tiếp tục' ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor:'#fff'
  },
  dangnhap: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 25,
    height: 60,
    paddingTop: 10,
    borderBottomWidth:2,
    borderColor: '#efefef'
    
  },
  title: {
    paddingLeft: 25,
    height: 120,
    paddingTop: 50,
    fontSize : 30 
  },
  title1: {
    paddingLeft: 25,
    height: 60,
    fontSize : 20 ,
  },
  input: {
    paddingLeft: 25,
    paddingTop:0,
    height: 100,
    fontSize : 20 ,
    borderBottomWidth:2,
    borderColor: '#efefef'
  },
  button: {
    
  }
});
