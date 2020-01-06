import { Platform } from 'react-native';
import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';

const index = {
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  colors,
  fonts,
  metrics,
};

export default index;
