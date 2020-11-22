import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import UUIDGenerator from 'react-native-uuid-generator';
import {connect} from "react-redux";
import {addTaskCount} from "./../redux/actions";

class addTask extends React.Component {
  state = {
    currentTask: '',
  };
  addTask() {
    if (this.state.currentTask.length != 0) {
      UUIDGenerator.getRandomUUID().then((uuid) => {
        const text = this.state.currentTask;
        const id = uuid;
        this.setState({currentTask: ''});
        this.props.toggleLoading();

        fetch('http://34.78.202.51:8888/tasks', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id:id,
            task: text,
            checked: false,
            deleted: false,
            star: false,
          }),
        })
          .catch((error) => console.error(error))
          .then(() => this.props.toggleLoading())
          .then(() => this.props.addTaskCount())
          .finally(() => this.props.fetchAgain());
      });
    }
  }
  render() {
    return (
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
          <Icon style={styles.addBtn} name="add"></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AddSection: {
    backgroundColor: '#dcd9c8',
    fontFamily: 'Handlee-Regular',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
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
    flex: 0.8,
  },
  addBtn: {
    fontFamily: 'Handlee-Regular',
    margin: 5,
    padding: 8,
    color: 'ivory',
    backgroundColor: '#31d068',
    borderRadius: 4,
    fontSize: 20,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    addTaskCount : () => {
          dispatch(addTaskCount())
      }
  }
}


export default connect( null,mapDispatchToProps )(addTask);
