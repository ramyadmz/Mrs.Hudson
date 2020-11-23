import React from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import Task from './Task';

class TaskList extends React.Component {
  render() {
    return (
      <View style={styles.ListSection}>
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
                checked={item.checked}
                star={item.star}
                deleted={item.deleted}
                fetchList={this.props.fetchList}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ListSection: {
    width: '95%',
    flex: 1,
  },
});
const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  };
};

export default connect(mapStateToProps)(TaskList);
