import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import DatePicker from 'react-native-date-picker';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {setDateTime} from './../../redux/actions';

class DatePickerLightBox extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <ScrollView style={{paddingHorizontal: 20, flex: 1}}>
        <DatePicker
          date={this.props.payload.selectedDateTime}
          onDateChange={(date) => this.setState({date})}
          mode="datetime"
          confirmBtnText="Confirm"
        />

        <Button
          onPress={() => {
            this.props.setDateTime(this.state.date);

            Actions.pop();
          }}
          rounded
          style={[styles.loginBtn, {backgroundColor: '#350245'}]}>
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
const mapDispatchToProps = (dispatch) => {
  return {
    setDateTime: (selectedDateTime) => {
      dispatch(setDateTime(selectedDateTime));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DatePickerLightBox);
