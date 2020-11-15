import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity,} from 'react-native';
import {CheckBox, ListItem, Button} from 'native-base';
import {Rating,Card} from 'react-native-elements';
class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  

  toggleChecked(index, task, checked, star, deleted) {
    fetch('http://34.78.202.51:8888/tasks/' + index, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: task,
        checked: !checked,
        star: star,
        deleted: deleted,
      }),
    }).then(() => this.props.fetchAgain());
  }
  
  toggleStar(index, task, checked, star, deleted) {
    fetch('http://34.78.202.51:8888/tasks/' + index, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: task,
        checked: checked,
        star: !star,
        deleted: deleted,
      }),
    }).then(() => this.props.fetchAgain());
  }

  deleteTask(index, task, checked, star, deleted) {
    fetch('http://34.78.202.51:8888/tasks/' + index, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: task,
        checked: checked,
        star: star,
        deleted: !deleted,
      }),
    }).then(() => this.props.fetchAgain());
  }

  render() {
    if (this.props.task && !this.props.deleted) {
      return (
        <Card containerStyle={{padding: 0,margin:5,borderRadius: 10,backgroundColor: '#F7F8F8',}}>
          <ListItem style={{borderColor: 'rgb(243, 171, 51)'}}>
            <Rating
              type="custom"
              startingValue={this.props.star}
              ratingCount={1}
              imageSize={22}
              style={styles.rating}
              onFinishRating={() =>
                this.toggleStar(
                  this.props.id,
                  this.props.task,
                  this.props.checked,
                  this.props.star,
                  this.props.deleted,
                )
              }
            />
            <CheckBox
              title={this.props.task}
              checked={this.props.checked}
              color="#31d068"
              checkboxTickColor="gray"
              onPress={() =>
                this.toggleChecked(
                  this.props.id,
                  this.props.task,
                  this.props.checked,
                  this.props.star,
                  this.props.deleted,
                )
              }
              style={styles.checkbox}
            />
            <Text style={[styles.Label , this.props.checked ?  styles.checked : '' ,]}>{this.props.task}</Text>
            <TouchableOpacity
              onPress={() => {
                this.deleteTask(
                  this.props.id,
                  this.props.task,
                  this.props.checked,
                  this.props.star,
                  this.props.deleted,
                );
              }} ><Text style={styles.Delete}>X</Text></TouchableOpacity>
          </ListItem>
        </Card>
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
  Label: {
    flex:1,
    fontFamily: 'Handlee-Regular',
    color: 'rgba(0, 0, 0, 0.80)',
    paddingLeft: 5,
    fontSize: 20,
  },
  checked:{
    textDecorationLine:"line-through",
    color:'gray',
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  
  rating:{
    backgroundColor: '#F7F8F8',

  },
  Delete:{
    fontFamily: 'Handlee-Regular',
    color:'red',
    fontSize: 20,
    backgroundColor: '#F7F8F8',
    

  }
});
export default Task;
