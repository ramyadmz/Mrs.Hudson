import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CheckBox, ListItem, Icon} from 'native-base';
import {Rating, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {addTaskCount, subtractTaskCount} from './../redux/actions';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleChecked(id, uuid, task, checked, star, deleted) {
    let lastCheckedStatus = checked;

    fetch('http://34.78.202.51:8888/tasks/' + uuid, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuid,
        task: task,
        checked: !checked,
        star: star,
        deleted: deleted,
      }),
    })
      .catch((error) => console.error(error))
      .then(() =>
        lastCheckedStatus
          ? this.props.addTaskCount()
          : this.props.subtractTaskCount(),
      )
      .finally(() => this.props.fetchList());
  }

  toggleStar(id, uuid, task, checked, star, deleted) {
    fetch('http://34.78.202.51:8888/tasks/' + uuid, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuid,
        task: task,
        checked: checked,
        star: !star,
        deleted: deleted,
      }),
    }).then(() => this.props.fetchList());
  }

  deleteTask(id, uuid, task, checked, star, deleted) {
    let lastCheckedStatus = checked;
    fetch('http://34.78.202.51:8888/tasks/' + uuid, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuid,
        task: task,
        checked: checked,
        star: star,
        deleted: !deleted,
      }),
    })
      .then(() => (lastCheckedStatus ? '' : this.props.subtractTaskCount()))
      .finally(() => this.props.fetchList());
  }

  render() {
    if (
      this.props.task &&
      !this.props.deleted &&
      (this.props.payload.selectedFilter == 'Completed'
        ? this.props.checked
        : this.props.payload.selectedFilter == 'Active'
        ? !this.props.checked
        : true)
    ) {
      return (
        <Card
          containerStyle={{
            padding: 0,
            margin: 5,
            borderRadius: 10,
            backgroundColor: '#F7F8F8',
          }}>
          <ListItem style={{borderColor: 'rgb(243, 171, 51)'}}>
            <Rating
              type="custom"
              startingValue={this.props.star ? 1 : 0}
              ratingCount={1}
              imageSize={22}
              style={styles.rating}
              onFinishRating={() =>
                this.toggleStar(
                  this.props.id,
                  this.props.uuid,
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
                  this.props.uuid,
                  this.props.task,
                  this.props.checked,
                  this.props.star,
                  this.props.deleted,
                )
              }
              style={styles.checkbox}
            />
            <Text
              style={[styles.Label, this.props.checked ? styles.checked : '']}>
              {this.props.task}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.deleteTask(
                  this.props.id,
                  this.props.uuid,
                  this.props.task,
                  this.props.checked,
                  this.props.star,
                  this.props.deleted,
                );
              }}>
              <Icon style={styles.Delete} name="trash"></Icon>
            </TouchableOpacity>
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
    marginLeft: 1,
  },
  Label: {
    flex: 1,
    fontFamily: 'Handlee-Regular',
    color: 'rgba(0, 0, 0, 0.80)',
    paddingLeft: 5,
    fontSize: 20,
  },
  checked: {
    textDecorationLine: 'line-through',
    color: 'gray',
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },

  rating: {
    backgroundColor: '#F7F8F8',
  },
  Delete: {
    fontFamily: 'Handlee-Regular',
    color: 'red',
    fontSize: 20,
    paddingLeft: 5,
    marginLeft: 10,
    borderRadius: 1,
    borderLeftWidth: 0.3,
    borderLeftColor: 'gray',
  },
});
const mapDispatchToProps = (dispatch) => {
  return {
    addTaskCount: () => {
      dispatch(addTaskCount());
    },
    subtractTaskCount: () => {
      dispatch(subtractTaskCount());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
