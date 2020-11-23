import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
class Logo extends React.Component {
  render() {
    return (
      <View style={styles.LogoSection}>
        <Image
          style={styles.logo}
          source={require('./../../assets/images/Logo.jpg')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  LogoSection: {
    backgroundColor: '#dcd9c8',
    alignItems: 'center',
    paddingTop: 5,
  },
});
export default Logo;
