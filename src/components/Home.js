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
import {Container, Header, Right, Left, Button} from 'native-base';
import Task from './Task';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchTasks = this.fetchTasks.bind(this);
  }
  state = {
    data: [],
    isLoading: true,
    currentTask: '',
    showLastLTask: false,
    metaData: false,
  };
  fetchTasks() {
    fetch('http://34.78.202.51:8888/tasks')
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json.tasks});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({isLoading: false});
      });
  }
  componentDidMount() {
    this.fetchTasks();
  }
  addTask() {
    if (this.state.currentTask.length != 0) {
      const text = this.state.currentTask;
      this.setState({currentTask: ''});

      fetch('http://34.78.202.51:8888/tasks', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task: text,
          checked: false,
          deleted: false,
          star: false,
        }),
      })
        .then(() => this.fetchTasks())
        .then(() => this.setState({isLoading: true}));
    }
  }
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
              <Text style={styles.NavLink}>Login</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.content}>
          <View style={styles.LogoSection}></View>
          <View style={styles.AddSection}>
            <TextInput
              placeholder="What needs to be done?"
              placeholderTextColor="gray"
              style={styles.textInput}
              onChangeText={(text) => {
                this.setState({currentTask: text});
              }}
              onSubmitEditing={(e) => {
                this.addTask();
              }}
              value={this.state.currentTask}></TextInput>
            <TouchableOpacity
              onPress={() => {
                this.addTask();
              }}>
              <Text style={styles.addBtn}>ADD</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ListSection}>
            <View>
              {this.state.isLoading ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  refreshing={true}
                  extraData={this.state.metaData}
                  inverted={true}
                  data={this.state.data}
                  renderItem={({item, index}) => (
                    <Task
                      task={item.task}
                      checked={item.checked}
                      star={item.star}
                      id={index}
                      fetchAgain={this.fetchTasks}
                    />
                  )}
                />
              )}
            </View>
          </View>
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

  LogoSection: {},
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
    backgroundColor: 'darkgreen',
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
