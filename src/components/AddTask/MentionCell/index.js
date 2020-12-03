import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export const CELL_HEIGHT = 38;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.5,
    marginVertical: 2,
    height: CELL_HEIGHT,
    flexDirection: 'row',

    borderBottomWidth: 1,
    paddingHorizontal: 5,
    borderTopColor: '#EEEEEE',
    borderBottomColor: '#EEEEEE',
    alignItems: 'center',
  },
  imageContainer: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#dcd9c8',
  },
  text: {
    fontFamily: 'Handlee-Regular',
    fontSize: 20,
    borderRadius: 4,
    paddingLeft: 5,
    marginHorizontal: 5,
    marginLeft: 15,
  },
});

class MentionCell extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={this.props.image} />
        </View>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

export default MentionCell;
