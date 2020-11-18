import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import AddTask from './AddTask';
import NavBar from './NavBar';
import Logo from './Logo';
import TaskList from './TaskList';
import {Header, Right, Body, Title, Left, Button, Icon} from 'native-base';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }
  state = {
    isLoading: false,
    data: [],
    metaData: false,
  };
  toggleLoading() {
    this.setState({isLoading: !this.state.isLoading});
  }
  fetchTasks() {
    this.toggleLoading();
    fetch('http://34.78.202.51:8888/tasks')
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json.tasks});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.toggleLoading();
      });
  }
  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <Container style={styles.container}>
        
          <NavBar fetchAgain={this.fetchTasks}></NavBar>
          <Logo></Logo>
          <AddTask
            fetchAgain={this.fetchTasks}
            toggleLoading={this.toggleLoading}></AddTask>
          <TaskList
            isLoading={this.state.isLoading}
            data={this.state.data}
            metaData={this.state.metaData}
            fetchAgain={this.fetchTasks}></TaskList>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcd9c8',
    fontFamily: 'Handlee-Regular',
    alignItems:'center'

  },
  
});
export default Home;
