import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

import Task from './Task';

class TaskList extends React.Component {
  render() {
    return (
      <ScrollView style={styles.ListSection}>
        {this.props.payload.isLoading ? (
          <ActivityIndicator
            style={{marginTop: 20}}
            size="large"
            color="#350245"
          />
        ) : (
          <FlatList
            refreshing={true}
            data={this.props.payload.data}
            renderItem={({item, index}) => (
              <Task
                id={index}
                uuid={item.id}
                task={item.task}
                date={item.date}
                time={item.time}
                priority={item.priority}
                checked={item.checked}
                deleted={item.deleted}
                fetchList={this.props.fetchList}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  ListSection: {
    width: '95%',
    marginTop: -90,
   marginBottom:43
  },
});
const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  };
};

export default connect(mapStateToProps)(TaskList);
