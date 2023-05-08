import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const DobScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Yolo Club form</Text>
        <Text style={styles.titleText}>
          Enter your {'\n'}
          date of birth
        </Text>
        <Text style={styles.subTitleText}>
          we need your date of birth details for our internal policy
        </Text>

        <TouchableOpacity
          style={{fontFamily: 'Poppins-SemiBold', fontSize: 24}}>
          <TextInput
            style={styles.textInput}
            placeholder="dd - mm - yyyy"
            placeholderTextColor={'#6E6E6E'}
            autoFocus={true}
            keyboardType="name-phone-pad"></TextInput>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('DOB')}
        style={styles.button}>
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

export default DobScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-around',
  },
  headerTitle: {
    color: '#565656',
    paddingHorizontal: 24,
    paddingTop: 50,
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  titleText: {
    color: '#fff',
    paddingHorizontal: 24,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
  },
  subTitleText: {
    color: '#565656',
    paddingHorizontal: 24,
    paddingVertical: 12,
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
    // height: 70,
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
