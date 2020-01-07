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
    ultraLarge: 30,
  },
  button: {
    ultra_small: 2.5,
    small: 7.5,
    medium: 12.5,
    regular: 17.5,
    large: 22.5,
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

  baseRadius: 2,
  baseBorder: 1,
};

const metricsAndroid = {
  ...metrics,
  input: {
    padding: {
      top: 8.5,
      bottom: 7.5,
      left: 12,
      right: 12,
    }
  },
  baseBoxShadow: `elevation: 2;`
};

const metricsIOS = {
  ...metrics,
  input: {
    top: 13,
    bottom: 11,
    left: 12,
    right: 12,
  },
  baseBoxShadow: `box-shadow: 0px 2px 1.5px rgba(0, 0, 0, 0.25);`,
};

export default Platform.select({ ios: metricsIOS, android: metricsAndroid });
