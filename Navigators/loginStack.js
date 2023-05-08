import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen.js';
import TourScreen from '../pages/TourScreen.js';
import TourScreen2 from '../pages/TourScreen2.js';
import TourScreen3 from '../pages/TourScreen3.js';
import TourScreen4 from '../pages/TourScreen4.js';
import TourScreen5 from '../pages/TourScreen5.js';
import SignInScreen from '../pages/SignInScreen.js';
import OtpScreen from '../pages/OtpScreen.js';
import SignupScreen from '../pages/SignupScreen.js';
import EmailAuth from '../pages/EmailAuth.js';
import DobScreen from '../pages/DobScreen.js';

const signInStack = createStackNavigator();

function Login() {
  return (
    <signInStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <signInStack.Screen name="Splash" component={SplashScreen} />
      <signInStack.Screen name="Tour" component={TourScreen} />
      <signInStack.Screen name="Tour2" component={TourScreen2} />
      <signInStack.Screen name="Tour3" component={TourScreen3} />
      <signInStack.Screen name="Tour4" component={TourScreen4} />
      <signInStack.Screen name="Tour5" component={TourScreen5} />
      <signInStack.Screen name="SignIn" component={SignInScreen} />
      <signInStack.Screen name="Otp" component={OtpScreen} />
      <signInStack.Screen name="Signup" component={SignupScreen} />
      <signInStack.Screen name="Email" component={EmailAuth} />
      <signInStack.Screen name="DOB" component={DobScreen} />
    </signInStack.Navigator>
  );
}

export default Login;
