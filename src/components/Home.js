import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import {connect} from 'react-redux';
import {
  fetchTasks,
  addTaskCount,
  toggleLoading,
  resetTaskCount,
} from './../redux/actions';

import AddTask from './AddTask/AddTask.js';
import NavBar from './NavBar';
import Logo from './Logo';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchList = this.fetchList.bind(this);
  }

  fetchList() {
    this.props.toggleLoading();
    fetch('http://34.78.202.51:8888/tasks')
      .then((response) => response.json())
      .then((json) => {
        this.props.fetchTasks(json.tasks);
      })
      .catch((error) => console.error(error))

      .finally(() => {
        this.props.toggleLoading();
        this.props.resetTaskCount();
        this.props.payload.data.forEach((element) => {
          !element.deleted && !element.checked ? this.props.addTaskCount() : '';
        });
      });
  }
  componentDidMount() {
    this.fetchList();
  }

  render() {
    return (
      <Container style={styles.container}>
        <NavBar fetchList={this.fetchList}></NavBar>
        <Logo></Logo>
        <AddTask fetchList={this.fetchList}></AddTask>
        
        <TaskFilter></TaskFilter>
      </Container>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addTaskCount: () => {
      dispatch(addTaskCount());
    },
    resetTaskCount: () => {
      dispatch(resetTaskCount());
    },
    toggleLoading: () => {
      dispatch(toggleLoading());
    },
    fetchTasks: (data) => {
      dispatch(fetchTasks(data));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
