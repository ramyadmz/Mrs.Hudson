import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
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
            inverted={true}
            data={this.props.data.reverse()}
            renderItem={({item, index}) => (
              <Task
                id={index}
                uuid={item.id}
                task={item.task}
                checked={item.checked}
                star={item.star}
                deleted={item.deleted}
                fetchAgain={this.props.fetchAgain}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            
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
