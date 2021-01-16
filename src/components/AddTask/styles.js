import {StyleSheet} from 'react-native';

import colors from './constants/colors';
import {getWidthRatio} from './utils/ui';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flex: 1,
    alignSelf: 'flex-start',
    flexDirection: 'column',
  },
  subContainer: {},
  inputFieldContainer: {
    flexDirection: 'row',
  },
  inputField: {},
  overlappingButton: {},
  // Action Buttons
  actionButtonContainer: {
    justifyContent: 'flex-end',
  },
  actionButton: {
    height: 44,
    flexDirection: 'row',
    marginVertical: 2,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: colors.lightestGray,
  },
  actionButtonIcon: {
    tintColor: colors.black,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  inputMocText: {
    color: 'blue',
    paddingTop: 2,
    position: 'absolute',
    zIndex: -1,
  },
  username: {
    color: colors.iosBlue,
    fontWeight: 'bold',
  },

  addBtn: {},
  addIcon: {
    padding: 6,
    color: 'ivory',
    backgroundColor: '#00c281',
    borderRadius: 4,
    fontSize: 38,
  },
  suggestions: {
    marginLeft: 10,
    marginTop: 5,

    flexDirection: 'row',
    fontFamily: 'Handlee-Regular',
  },
  suggestionTagOff: {
    fontFamily: 'Handlee-Regular',
    padding: 5,
    marginLeft: 5,
    color: 'ivory',
    backgroundColor: '#b3b3b3',
    borderRadius: 4,
    fontSize: 14,
  },
  suggestionTagOn: {
    fontFamily: 'Handlee-Regular',
    padding: 5,
    marginLeft: 5,
    color: '#4b4b4b',
    backgroundColor: '#fff173',
    borderRadius: 4,
    fontSize: 14,
  },
});

export default styles;
