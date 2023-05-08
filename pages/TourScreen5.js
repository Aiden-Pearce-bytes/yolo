import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const TourScreen5 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('.././src/assets/Images/tour5.png')} />
        <Text style={styles.titleText}>complete secured transaction</Text>
        <Text style={styles.subTitleText}>
          yolo has partnered with RBI regulated bank and every transaction is
          secure and safe
        </Text>
      </View>

      <Image
        style={{margin: 24, top: 24}}
        source={require('.././src/assets/Images/Button5.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        style={styles.button}>
        <LinearGradient
          colors={['#BB0707', '#BB070740']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{height: 70}}>
          <View style={styles.innerButton}>
            <Text style={styles.buttonText}>join the yolo club</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TourScreen5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  button: {
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
});
