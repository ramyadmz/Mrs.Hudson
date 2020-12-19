import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import IconInput from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';


import {Input, SocialIcon} from 'react-native-elements';

class LoginLightBox extends React.Component {
  ComponentDidMount(){
    GoogleSignin.configure({
      webClientId: WebClientID, // client ID of type WEB for your server(needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
         });
     
  }
  
 signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const info = await GoogleSignin.signIn();
    console.warn({userInfo: info});
    setUserInfo(info);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setUserInfo(null); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

  render() {
    return (
      <ScrollView style={{paddingHorizontal: 20,flex:1}}>
        <Input inputContainerStyle={{marginVertical:-5,padding:0}}
          placeholder="Username"
          leftIcon={<IconInput name="user" size={16} color="gray" />}
        />
        <Input inputContainerStyle={{marginVertical:-10,padding:0}}
          placeholder="Password"
          leftIcon={<IconInput name="lock" size={16} color="gray" />}
          secureTextEntry={true}
        />
        
        <Button rounded style={[styles.loginBtn, {backgroundColor: '#350245'}]}>
          <Icon type="FontAwesome" name="sign-in" />
          <Text style={styles.loginText}>submit</Text>
        </Button>
        <Text style={styles.loginText}>or</Text>

        <Button rounded style={[styles.loginBtn, {backgroundColor: '#de5246'}]}>
          <Icon type="FontAwesome" name="google" />
          <Text style={styles.loginText}>Login  with  Google</Text>
        </Button>
        <Button rounded style={[styles.loginBtn, {backgroundColor: '#3b5998'}]}>
          <Icon type="FontAwesome" name="facebook" />
          <Text style={styles.loginText}>Login  with  Facebook</Text>
        </Button>
        <Button rounded style={[styles.loginBtn, {backgroundColor: '#515151'}]}>
          <Icon type="FontAwesome" name="apple" />
          <Text style={styles.loginText}>Login  with  Apple</Text>
        </Button>
        <GoogleSigninButton/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  loginBtn: {
        flex: 1,
    paddingTop: 0,
    marginVertical: 5,
    justifyContent: 'flex-start',

  },
  loginText:{
    fontFamily: 'Handlee-Regular',
    textAlign: 'center',




  }
});
export default LoginLightBox;
