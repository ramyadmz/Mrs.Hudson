import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';
import {changeFilter} from './../../redux/actions';

class TaskFilter extends React.Component {
  render() {
    let activeButton = '';
    return (
      <View style={styles.filterBar}>
        <View style={styles.filterItem}>
          <Text style={styles.filterText}>
            {this.props.payload.taskCount > 1
              ? this.props.payload.taskCount + ' items left'
              : this.props.payload.taskCount == 1
              ? 'only one left'
              : 'nothing to do'}
          </Text>
        </View>
        {this.props.payload.filter.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.filterItem}
            onPress={() => {
              this.props.changeFilter(item);
            }}>
            <Text
              style={[
                styles.filterText,
                this.props.payload.selectedFilter == item
                  ? styles.selected
                  : '',
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
    flexDirection: 'row',
    backgroundColor: '#350245',
    paddingVertical: 10,
    bottom: 0,
    position: 'absolute',
  },

  filterItem: {
    flex: 1,
    marginHorizontal: 10,
  },
  filterText: {
    fontFamily: 'Handlee-Regular',
    fontSize: 18,
    color: '#dcd9c8',
    textAlign: 'center',
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (selectedFilter) => {
      dispatch(changeFilter(selectedFilter));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);
