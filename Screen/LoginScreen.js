
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { COLORS } from './Constant/Color';

const LoginScreen = ({navigation}) => {

  const handleSubmitPress = () => {
    navigation.replace('DrawerNavigationRoutes');
  };

  return (
    <View style={styles.mainBody}>
     
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Images/logoimg.png')}
                style={{
                  width: '30%',
                  height: 50,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
            <Text style={{color:COLORS.black}}>Email Id</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="Please Enter Email Id"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                 
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
            <Text style={{color:COLORS.black}} >Password</Text>
              <TextInput
                style={styles.inputStyle}
               
                placeholder="Please Enter Password"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
               
                blurOnSubmit={false}
                secureTextEntry={true}
               
                returnKeyType="next"
              />
            </View>
             <View style={{alignItems: 'center',marginTop:100}} >
             <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
             </View>
            
           
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'column',
    maxHeight:40,
    marginTop:30,
    marginLeft: 15,
    marginRight: 15,
    
  },
  buttonStyle: {
    backgroundColor: COLORS.red,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: COLORS.red,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    width:150,
     
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 14,
  },
  inputStyle: {
    color: 'black',
    borderBottomWidth:2,
    borderBottomColor:'#8b9cb5',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});