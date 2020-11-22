import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Task from './Task';

class TaskList extends React.Component {
  
    render() {
    return (
      <View style={styles.ListSection}>
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
            data={this.props.data}
            renderItem={({item, index}) => (
              <Task
                key={index}
                uuid={item.id}
                task={item.task}
                checked={item.checked}
                star={item.star}
                deleted={item.deleted}
                fetchAgain={this.props.fetchAgain}
                filter={this.props.filter}
                addTaskCount={this.props.addTaskCount}
                subtractTaskCount={this.props.subtractTaskCount}
                
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
    flex:1
  },
});
export default TaskList;
