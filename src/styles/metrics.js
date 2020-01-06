import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  screen: {
    width: width,
    height: height,
  },
  margin: {
    ultraSmall: 2.5,
    small: 5,
    medium: 10,
    regular: 15,
    large: 20,
  },
  padding: {
    small: 5,
    medium: 10,
    regular: 15,
    large: 20,
  },
  icon: {
    small: 14,
    medium: 18,
    regular: 22,
    large: 26,
    gigant: 40,
  },
  aligns: {
    space_between: 'space-between',
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  },

  smallDevice: width <= 335,
  inputPadding: Platform.select({
    ios: {
      top: 13,
      bottom: 11,
      left: 12,
      right: 12,
    },
    android: {
      top: 8.5,
      bottom: 7.5,
      left: 12,
      right: 12,
    }
  }),
  baseRadius: 10,
  baseBorder: 1,
};

export default metrics;
