import {StyleSheet} from 'react-native';

import colors from '../constants/colors';
import {getWidthRatio} from '../utils/ui';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    padding: 8,
    marginTop: 80,
  },
  // Header
  profileHeader: {
    flexDirection: 'row',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  titlesContainer: {
    paddingHorizontal: 8,
  },
  subtitlesContainer: {
    marginTop: 4,
    flexDirection: 'row',
    maxWidth: getWidthRatio(70),
  },
  titleText: {
    fontSize: 12,
  },
  sutitleButton: {
    marginRight: 2,
  },
  // inputfield
  inputFieldContainer: {},
  inputField: {
    // backgroundColor: 'red'
    // color: colors.transparent
    width: getWidthRatio(80),

    fontFamily: 'Handlee-Regular',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 20,
    borderRadius: 4,
    paddingLeft: 5,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  overlappingButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.transparent,
  },
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
  actionButtonTitle: {
    paddingHorizontal: 12,
    color: colors.darkGray,
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
    padding: 10,
    color: 'ivory',
    backgroundColor: '#00c281',
    borderRadius: 4,
    fontSize: 30,
  },
});

export default styles;
