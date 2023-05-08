import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OTPScreen = ({navigation, jwtOtp, data}) => {
  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    try {
      const response = await fetch(
        'http://getyoloauth.ap-1.evennode.com/auth/verify-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Verification: jwtOtp,
          },
          body: JSON.stringify({
            otp: otp,
            phone_number: '1234567890',
          }),
        },
      );

      const responseBody = await response.json();

      console.log(responseBody);
    } catch (error) {
      console.log('Error verifying OTP: ', error);
    }
    navigation.navigate('Signup')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          we have sent you {'\n'}
          an one time password
        </Text>
        <Text style={styles.subTitleText}>
          enter the 4 digit OTP sent on 1234567890 to proceed further
        </Text>
        <TouchableOpacity
          style={{fontFamily: 'Poppins-SemiBold', fontSize: 24}}>
          <TextInput
            style={styles.textInput}
            placeholder="0000"
            placeholderTextColor={'#6E6E6E'}
            maxLength={4}
            value={otp}
            onChangeText={setOtp}
            autoFocus={true}
            keyboardType="numeric"></TextInput>
        </TouchableOpacity>

        <Text style={{color: '#565656', padding: 20}}>
          didn't receive otp? <Text style={{color: '#B20808'}}>resend otp</Text>{' '}
        </Text>
      </View>
      <TouchableOpacity onPress={handleVerify} style={styles.button}>
        <LinearGradient
          colors={['#BB0707', '#BB070740']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{height: 70}}>
          <View style={styles.innerButton}>
            <Text style={styles.buttonText}>continue</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
    color: '#fff',
    paddingHorizontal: 24,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
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
  button: {
    width: 250,
    height: 70,

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

});

export default OTPScreen;
