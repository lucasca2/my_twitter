import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";

// Screens
import Home from '/screens/Home';
import SendTweet from '/screens/SendTweet';
import AboutUs from '/screens/AboutUs';

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: Home
  },
  SendTweet: {
    screen: SendTweet
  },
  AboutUs: {
    screen: AboutUs
  },
}, {

});

export default createAppContainer(AppNavigator)
