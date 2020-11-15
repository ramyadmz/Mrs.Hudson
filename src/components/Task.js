import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CheckBox, ListItem} from 'native-base';
class Task extends React.Component {
    
  constructor(props) {
    super(props);
  }
  
  toggleChecked(index,task,checked) {
    fetch('http://34.78.202.51:8888/tasks/' + index, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: task,
        checked: !checked,
      }),
    })
      .then(() => this.props.fetchAgain())
      
  }
  render() {
    if (this.props.task) {
      return (
        <View style={styles.checkboxContainer}>
          <ListItem style={{borderColor: 'rgb(243, 171, 51)'}}>
            <CheckBox
              title={this.props.task}
              checked={this.props.checked}
              color="#31d068"
              checkboxTickColor="gray"
              
              onPress={() => this.toggleChecked(this.props.id,this.props.task,this.props.checked)}
              style={styles.checkbox}
              
              
            />
            <Text style={styles.taskLabel}>{this.props.task}</Text>
          </ListItem>
        </View>
      );
    } else {
      return <></>;
    }
  }
}
const styles = StyleSheet.create({
  checkbox: {
    fontFamily: 'Handlee-Regular',
    alignSelf: 'center',
    marginLeft: 5,
  },
  taskIndex: {
    fontFamily: 'Handlee-Regular',
    color: '#000',
    paddingRight: 15,
    fontSize: 16,
    borderRightWidth: 1,
  },
  taskLabel: {
    fontFamily: 'Handlee-Regular',
    color: '#000',
    paddingLeft: 5,
    fontSize: 20,
  },
});
export default Task;
