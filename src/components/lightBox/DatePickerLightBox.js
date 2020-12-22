import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import DatePicker from 'react-native-date-picker';

class DatePickerLightBox extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <ScrollView style={{paddingHorizontal: 20, flex: 1}}>
        <DatePicker
          date={this.state.date}
          onDateChange={(date) => this.setState({date})}
          mode="datetime"
        />

        <Button rounded style={[styles.loginBtn, {backgroundColor: '#350245'}]}>
          <Icon type="FontAwesome" name="check" />
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  loginBtn: {
    flex: 1,
    paddingTop: 0,
    marginVertical: 5,
    justifyContent: 'flex-start',
  },
  loginText: {
    fontFamily: 'Handlee-Regular',
    textAlign: 'center',
  },
});
export default DatePickerLightBox;
