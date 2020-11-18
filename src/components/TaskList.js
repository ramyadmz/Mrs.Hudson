import React from 'react';
import {StyleSheet, View, ScrollView ,FlatList, ActivityIndicator} from 'react-native';
import Task from './Task';

class TaskList extends React.Component {
  render() {
    return (
      <ScrollView style={styles.ListSection}>
        
          {this.props.isLoading ? (
            <ActivityIndicator
              style={{marginTop: 20}}
              size="large"
              color="#350245"
            />
          ) : (
            <FlatList
              refreshing={true}
              extraData={this.props.metaData}
              inverted={true}
              data={this.props.data}
              renderItem={({item, index}) => (
                <Task
                  task={item.task}
                  checked={item.checked}
                  star={item.star}
                  deleted={item.deleted}
                  id={index}
                  fetchAgain={this.props.fetchAgain}
                />
              )}
            />
          )}
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  ListSection: {
    width:'95%',
    
  },
});
export default TaskList;
