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
import {connect} from 'react-redux';
import {addTaskCount, toggleLoading} from './../redux/actions';
import Autocomplete from 'react-native-autocomplete-input';

class addTask extends React.Component {
  state = {
    currentTask: '',
    persons: ['Ramyad', 'Ramtin', 'Ali', 'jack', 'joey','natasha'],
    query: '',
  };
  findPerson(query) {
    if (query === '') {
      return [];
    }
    const {persons} = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return persons.filter((person) => person.search(regex) >= 0);
  }
  addTask() {
    if (this.state.currentTask.length != 0) {
      UUIDGenerator.getRandomUUID().then((uuid) => {
        const text = this.state.currentTask + ' @' + this.state.query;
        const id = uuid;
        this.setState({currentTask: ''});
        this.setState({query: ''});
        this.props.toggleLoading();

        fetch('http://34.78.202.51:8888/tasks', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
            task: text,
            checked: false,
            deleted: false,
            star: false,
          }),
        })
          .catch((error) => console.error(error))
          .then(() => this.props.toggleLoading())
          .then(() => this.props.addTaskCount())
          .finally(() => this.props.fetchList());
      });
    }
  }
  render() {
    const {query} = this.state;
    const persons = this.findPerson(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

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
        <Autocomplete containerStyle={styles.AcContainer}
         style={styles.AcInputContainer}
        inputContainerStyle={styles.AcInputContainer}
          placeholder="contacts"
          data={persons.length === 1 && comp(query, persons[0]) ? [] : persons}
          defaultValue={query}
          onChangeText={(text) => this.setState({query: text})}
          renderItem={({item, i}) => (
            <TouchableOpacity  onPress={() => this.setState({query: item})}>
              <Text style={styles.personList}>{item}</Text>
            </TouchableOpacity>
          )}
        />

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
    fontSize: 22,
    borderRadius: 4,
    paddingLeft: 5,
    marginHorizontal: 5,
    marginLeft:15,
    flex: 3,
  },
  AcContainer:{
    fontFamily: 'Handlee-Regular',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 22,
    borderRadius: 4,
    paddingHorizontal:5,
    marginRight:5
  },
  AcInputContainer:{
    fontFamily: 'Handlee-Regular',
    fontSize: 22,
    borderWidth: 0,
  },

  personList:{fontFamily: 'Handlee-Regular',
  backgroundColor: 'white',
  fontSize: 18,
  padding: 5,},

  addBtn: {
    fontFamily: 'Handlee-Regular',
    padding: 15,
    color: 'ivory',
    backgroundColor: '#31d068',
    borderRadius: 4,
    fontSize: 20,
    marginRight:15
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTaskCount: () => {
      dispatch(addTaskCount());
    },
    toggleLoading: () => {
      dispatch(toggleLoading());
    },
  };
};

export default connect(null, mapDispatchToProps)(addTask);
