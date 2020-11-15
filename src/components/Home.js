
import React from 'react';
import {
    StyleSheet,
    TextInput,
    Image,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import {
    Container,
    Header,
    Right,
    Left,
    Button,
    CheckBox,
    ListItem,
    Icon,
  } from 'native-base';
class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={{marginHorizontal: 10}}>
            <Button>
              <Text style={styles.NavLink}>Home</Text>
            </Button>
          </Left>
          <Right>
            <Button>
              <Text>Login</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.content}>
          <View style={styles.LogoSection}></View>
          <View style={styles.AddSection}>
            <TextInput
              placeholder="What needs to be done?"
              placeholderTextColor="gray"
              style={styles.textInput}></TextInput>
            <TouchableOpacity>
              <Text style={styles.addBtn}>ADD</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ListSection}></View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkgray',
  },
  NavLink: {
    fontSize: 18,
    color: 'ivory',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },

  LogoSection: {

  },
  AddSection: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    fontSize: 24,
    borderRadius: 4,
    paddingLeft: 10,
    margin: 5,
  },
  addBtn: {
    margin: 5,
    padding: 8,
    color: 'ivory',
    backgroundColor:'darkgreen',
    borderRadius: 4,
    fontSize: 20,
  },
  ListSection: {
    flexDirection: 'column',
    backgroundColor: '#F7F8F8',
    width: 400,
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderStyle: 'solid',
  },
});
export default Home;
