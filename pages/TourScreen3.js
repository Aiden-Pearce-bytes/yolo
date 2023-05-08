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

const TourScreen3 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('.././src/assets/Images/tour3.png')} />
        <Text style={styles.titleText}>build smart saving habits</Text>
        <Text style={styles.subTitleText}>
          save for future goals and get rewarded every month on saving balance
        </Text>
      </View>

      <Image
        style={{margin: 24, top: 24}}
        source={require('.././src/assets/Images/Button3.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Tour4')}
        style={styles.button}>
        <LinearGradient
          colors={['#ffffff', '#0D0D0D']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{padding: 2, width: 150, height: 70}}>
          <View style={styles.innerButton}>
            <Text style={styles.buttonText}>next feature</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TourScreen3;

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
    width: 150,
    height: 70,
    marginTop: 50,
    marginLeft: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  innerButton: {
    margin: 1,
    backgroundColor: '#000',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
