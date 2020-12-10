import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import IconInput from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';

import {Input, SocialIcon} from 'react-native-elements';

class LoginLightBox extends React.Component {
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
