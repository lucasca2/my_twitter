import Reactotron from 'reactotron-react-native'

Reactotron
  .useReactNative()
  .connect();

console.tron = Reactotron.log;
