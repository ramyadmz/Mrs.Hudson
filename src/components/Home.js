import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import AddTask from './AddTask';
import NavBar from './NavBar';
import Logo from './Logo';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.addTaskCount = this.addTaskCount.bind(this);
    this.subtractTaskCount = this.subtractTaskCount.bind(this);
    
  }
  state = {
    isLoading: false,
    data: [],
    metaData: false,
    taskCount: 0,

    initialTaskCounting: true,
  };
  toggleLoading() {
    this.setState({isLoading: !this.state.isLoading});
  }

  addTaskCount() {
    this.setState({taskCount: this.state.taskCount + 1});
  }
  subtractTaskCount() {
    this.setState({taskCount: this.state.taskCount - 1});
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
        this.state.data.forEach((element) => {
          this.state.initialTaskCounting && !element.deleted && !element.checked
            ? this.addTaskCount()
            : '';
        });
        this.setState({initialTaskCounting: false});
      });
  }
  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <Provider store={store}>
        <Container style={styles.container}>
          <NavBar fetchAgain={this.fetchTasks}></NavBar>
          <Logo></Logo>
          <AddTask
            fetchAgain={this.fetchTasks}
            toggleLoading={this.toggleLoading}
            ></AddTask>
          <TaskList
            isLoading={this.state.isLoading}
            data={this.state.data}
            metaData={this.state.metaData}
            fetchAgain={this.fetchTasks}
            
            subtractTaskCount={this.subtractTaskCount}></TaskList>
          <TaskFilter></TaskFilter>
        </Container>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcd9c8',
    fontFamily: 'Handlee-Regular',
    alignItems: 'center',
  },
});
export default Home;
