import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button, View} from 'native-base';
class TaskFilter extends React.Component {
  state = {
    filter: ['All', 'Active', 'Completed'],
    selectedItem: 'All',
  };

  render() {
    let activeButton = '';
    return (
      <View style={styles.filterBar}>
        <View style={styles.filterItem}>
          <Text style={styles.filterText}>
            {this.props.taskCount}{' '}
            {this.props.taskCount == 1 ? 'item' : 'items'} left{' '}
          </Text>
        </View>
        {this.state.filter.map((item) => (
          <TouchableOpacity
            style={styles.filterItem}
            onPress={() => {
              this.props.changeFilter(item);
              this.setState({selectedItem: item});
            }}>
            <Text
              style={[
                styles.filterText,
                this.state.selectedItem == item ? styles.selected : '',
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  filterBar: {
    display: 'flex',
    fontFamily: 'Handlee-Regular',
    flexDirection:'row',
    backgroundColor: '#350245',
    paddingVertical: 10,
  },
 
  filterItem: {
    flex:1,
    marginHorizontal:10
  },
  filterText: {
    fontFamily: 'Handlee-Regular',
    fontSize: 20,
    color: '#dcd9c8',
    textAlign:'center'
    
  },
  selected: {
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderWidth: 0.3,
    borderColor: 'gray',
  },
});
export default TaskFilter;
