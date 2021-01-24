import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';
import {AirbnbRating} from 'react-native-elements';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {setPriority} from '../../redux/actions';

class SetPriorityLightBox extends React.Component {
  state = {
    priority: ''
  };

  render() {
    return (
      <ScrollView style={{paddingHorizontal: 20, flex: 1}}>
        <AirbnbRating
              
              defaultRating={this.props.payload.selectedPriority ? this.props.payload.selectedPriority : 1}
              reviews={['Normal', 'High', 'Urgent']}
              count={3}
              size={50}
              starContainerStyle={styles.rating}
              onFinishRating={(priority) => this.setState({priority})}
             
            />

        <Button
          onPress={() => {
            this.props.setPriority(this.state.priority);
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
  rating: {
    flex: 1,
    paddingTop: 20,
    marginVertical: 20,
  },
  reviewText: {
    fontFamily: 'Handlee-Regular',
    margin: 30,
  },
});
const mapDispatchToProps = (dispatch) => {
  return {
    setPriority: (selectedPriority) => {
      dispatch(setPriority(selectedPriority));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SetPriorityLightBox);
