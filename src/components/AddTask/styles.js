import {StyleSheet} from 'react-native';

import colors from './constants/colors';
import {getWidthRatio} from './utils/ui';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    width: getWidthRatio(75),
    
  },
  subContainer: {},
  inputFieldContainer: {
    //************************* */
    height: 150,
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
  hashTag: {
    color: colors.iosBlue,
    fontWeight: 'bold',
  },
  dateBtn: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '-14%',
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  dateIcon: {
    
    padding: 6,
    color: 'ivory',
    backgroundColor: '#9363b1',
    borderRadius: 4,
    fontSize: 36,
  },
  addBtn: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '99%',
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  addIcon: {
    padding: 6,
    color: 'ivory',
    backgroundColor: '#00c281',
    borderRadius: 4,
    fontSize: 36,
  },
});

export default styles;
