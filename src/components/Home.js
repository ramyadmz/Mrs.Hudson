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
import {Container, Header, Right, Left, Button, Icon} from 'native-base';
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
    this.setState({isLoading: true})
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
            <Button backgroundColor="#350245" onPress={()=>this.fetchTasks()}>
              <Icon name="refresh" ></Icon>
            </Button>
          </Left>
          <Right>
            <Button backgroundColor="#350245">
              <Text style={styles.NavLink}>Login</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.content}>
          <View style={styles.LogoSection}>
            <Image
              style={styles.logo}
              source={require('./../../assets/images/Logo.jpg')}
            />
          </View>
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
                <ActivityIndicator size="large" color="#350245"/>
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
    backgroundColor: '#350245',

    
  },
  NavLink: {
    fontFamily: 'Handlee-Regular',
    fontSize: 22,
    color: 'ivory',
  },
  content: {
    paddingTop:10,
    fontFamily: 'Handlee-Regular',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#dcd9c8',
  },

  logo: {},
  AddSection: {
    fontFamily: 'Handlee-Regular',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10,
  },
  textInput: {
    fontFamily: 'Handlee-Regular',
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
    fontFamily: 'Handlee-Regular',
    margin: 5,
    padding: 8,
    color: 'ivory',
    backgroundColor: 'darkgreen',
    borderRadius: 4,
    fontSize: 20,
  },
  ListSection: {
    fontFamily: 'Handlee-Regular',
    flexDirection: 'column',
    backgroundColor: '#F7F8F8',
    width: '95%',
    flex:1,
    padding: 10,
    margin: 10,
    borderWidth: 0.8,
    borderStyle: 'solid',
  },
});
export default Home;
