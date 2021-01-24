import React from 'react';
import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import {Icon} from 'native-base';
import UUIDGenerator from 'react-native-uuid-generator';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {addTaskCount, toggleLoading} from './../../redux/actions';
import styles from './styles.js';
import MentionCell from './MentionCell';
import MentionInput from './MentionInput';
import _ from 'lodash';

/**
 * Uniqueness for Object.
 */
const unique = (array) => {
  return [...new Set(array.map((s) => JSON.stringify(s)))].map((s) =>
    JSON.parse(s),
  );
};

class addTask extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeTextDelayed = _.debounce(this.onChangeText, 2000);
  }

  state = {
    inputText: '',
    date: new Date(),
    isMentionBoxShown: false,
    isInputFieldActive: false,
    mentionSuggestions: [],
    allUniqueSuggestions: [], // suggestions shown in that instance. Eg first time suggestions shown are [1, 3, 4]
    // Second time shown are [2, 5, 6]. then `allUniquesSuggestions` -> [1, 2, 3, 4, 5, 6]
  };

  /**
   * InputText `onchangeText` callback
   */
  onChangeText = (text) => {
    this.setState({inputText: text});
  };

  /**
   * Called by fake button that focuses or dismisses the text field.
   */
  toggleTextField = () => {
    this.setState(
      (prevState) => ({
        isInputFieldActive: !prevState.isInputFieldActive,
      }),
      () => {
        this.state.isInputFieldActive
          ? this.inputField.focus()
          : Keyboard.dismiss();
      },
    );
  };

  searchUser = (text) => {
    return this.props.payload.people.filter((usr) => usr.name.search(text));
  };

  /**
   * Text field on change text event callback
   */
  mentioningChangeText = (text) => {
    const suggestions = this.props.payload.people.filter((user) =>
      user.name.toUpperCase().includes(text.toUpperCase()),
    );
    // to remove space between name 'Shark James' -> 'SharkJames'
    const transformedSuggestions = suggestions.map((item) => ({
      ...item,
      name: item.name.replace(/\s/g, ''),
    }));
    const allSuggestions = [
      ...this.state.mentionSuggestions,
      ...transformedSuggestions,
    ];
    const allUniqueSuggestions = unique(allSuggestions);
    this.setState({
      mentionSuggestions: transformedSuggestions,
      allUniqueSuggestions,
    });
  };
  addTask = () => {
    if (this.state.inputText.length != 0) {
      UUIDGenerator.getRandomUUID().then((uuid) => {
        const text = this.state.inputText;
        const id = uuid;
        const date = this.props.payload.selectedDate;
        const time = this.props.payload.selectedTime;
        const priority = this.props.payload.selectedPriority;

        this.setState({inputText: ''});

        this.toggleTextField();
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
            mentions: this.state.mentionSuggestions,
            date: date,
            time: time,
            priority: priority,
          }),
        })
          .catch((error) => console.error(error))
          .then(() => this.props.toggleLoading())
          .then(() => this.props.addTaskCount())
          .then(() => this.inputField.clear())
          .finally(() => this.props.fetchList());
      });
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <View style={styles.inputFieldContainer}>
            {/* Text Input Field */}
            <MentionInput
              reference={(comp) => {
                this.inputField = comp;
              }}
              placeholder="What needs to be done ?"
              onChangeText={this.onChangeTextDelayed}
              mentionData={this.state.mentionSuggestions}
              mentioningChangeText={this.mentioningChangeText}
              renderMentionCell={({item}) => {
                return <MentionCell name={item.name} image={item.image} />;
              }}
              style={styles.inputField}
            />

            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => {
                this.addTask();
              }}>
              <Icon style={styles.addIcon} name="add"></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.suggestions}>
            <TouchableOpacity onPress={() => Actions.DatePickerLightBox()}>
              <Text
                style={
                  this.props.payload.selectedDate
                    ? styles.suggestionTagOn
                    : styles.suggestionTagOff
                }>
                {this.props.payload.selectedDate
                  ? this.props.payload.selectedDate +
                    '  ' +
                    this.props.payload.selectedTime
                  : 'Set due date'}{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.SetPriorityLightBox()}>
            <Text
                style={
                  this.props.payload.selectedPriority
                    ? styles.suggestionTagOn
                    : styles.suggestionTagOff
                }>
                {this.props.payload.selectedPriority
                  ? this.props.payload.priorities[this.props.payload.selectedPriority]   
                  : 'Set priority'}{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.SetPriorityLightBox()}>
              <Text style={styles.suggestionTagOff}>meeting </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  };
};
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

export default connect(mapStateToProps, mapDispatchToProps)(addTask);
