import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Header,
  Right,
  Body,
  Title,
  Left,
  Button,
  Icon,
  View,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Left>
          <Button hasText transparent backgroundColor="#350245" 
          onPress={() => Actions.LoginLightBox()}>
            <Icon style={styles.NavIcon} type="FontAwesome" name="sign-in" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Mrs.Hudson</Title>
        </Body>
        <Right>
          <Button
            hasText
            transparent
            backgroundColor="#350245"
            onPress={() => this.props.fetchList()}>
            <Icon style={styles.NavIcon} name="refresh"></Icon>
          </Button>
        </Right>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#350245',
    flexDirection: 'row',
  },
  headerTitle: {
    fontFamily: 'HomemadeApple-Regular',
    fontSize: 24,
    color: 'gold',
  },
  NavIcon: {
    fontSize: 25,
    color: 'ivory',
  },
});
export default NavBar;
