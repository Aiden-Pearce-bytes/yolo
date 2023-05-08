import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';

const SignInScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleGetOTP = () => {
    fetch('http://getyoloauth.ap-1.evennode.com/auth/get-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setOTP(data.otp);
        setResponseMessage(data.message);
        console.log(data);
        console.log(phoneNumber);
        console.log(data.otp);
      })

      .catch(error => {
        console.error(error);
        setResponseMessage('An error occurred while fetching the OTP.');
      });

    navigation.navigate('Otp');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          enter your {'\n'}
          mobile number
        </Text>
        <Text style={styles.subTitleText}>
          apply with the phone number that you want to your yolo account
        </Text>
        <TouchableOpacity
          style={{fontFamily: 'Poppins-SemiBold', fontSize: 24}}>
          <TextInput
            style={styles.textInput}
            placeholder="your mobile number"
            placeholderTextColor={'#6E6E6E'}
            maxLength={10}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="numeric"></TextInput>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <BouncyCheckbox
          size={35}
          fillColor="green"
          unfillColor="#000"
          iconStyle={{borderColor: 'red'}}
          innerIconStyle={{borderWidth: 2}}
          onPress={() => {}}
          style={{paddingVertical: 10}}
        />
        <Text style={styles.checkbox}>i agree to enable whatsapp alerts</Text>
        <Text style={{color: '#6E6E6E'}}>
          by proceeding, you are indicating that you have read and agree to our
          <Text style={{color: '#B80808'}}>terms of use </Text> &{' '}
          <Text style={{color: '#B80808'}}>privacy policy</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={handleGetOTP} style={styles.button}>
        <LinearGradient
          colors={['#BB0707', '#BB070740']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{height: 70}}>
          <View style={styles.innerButton}>
            <Text style={styles.buttonText}>agree & continue</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#000',
  },
  titleText: {
    color: '#fff',
    padding: 24,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
  },
  subTitleText: {
    color: '#565656',
    paddingHorizontal: 24,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  button: {
    // width: 150,
    height: 70,
    marginTop: 50,

    padding: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  innerButton: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 10,
    borderBottomColor: '#fff',
    borderWidth: 1,
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 25,
    marginVertical: 25,
  },
  checkbox: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    paddingVertical: 10,
  },
});
