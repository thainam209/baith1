import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    // Biểu thức Regex kiểm tra số điện thoại Việt Nam
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');

      
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.dangnhap}>Đăng nhập</Text>
      <Text style={styles.title}>Nhập số điện thoại</Text>
      <Text style={styles.title1}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput style={styles.input}
      placeholder="Nhập số điện thoại của bạn"
      keyboardType="numeric"
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      >  
      </TextInput>
      {errorMessage ? (
        <Text style={errorMessage.includes('Số điện thoại hợp lệ!') ? styles.successMessage : styles.errorMessage}>
          {errorMessage}
        </Text>
      ) : null}
      <Text></Text>
      <Text style={styles.button}
        onPress={() => validatePhoneNumber(phoneNumber)}
      >Tiếp tục</Text>
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
    borderColor: '#efefef',
    marginBottom: 30
  },
  button: {
    alignContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#000ef8',
    paddingLeft:161,
    paddingTop:10,
    height:60,
    width:400,
    marginLeft: 17,
    color:'white',
    paddingTop:18,
    fontSize: 20
  },
  successMessage: {
    color: 'green',
    paddingLeft:25
  },
  errorMessage: {
    color: 'red',
    paddingLeft:25
  }
});
