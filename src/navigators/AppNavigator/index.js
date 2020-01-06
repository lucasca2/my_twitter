import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import styles from '/styles';

// Screens
import Home from '/screens/Home';
import SendTweet from '/screens/SendTweet';
import AboutUs from '/screens/AboutUs';

// Components
import Drawer from '/components/Drawer';
import Icon from '/components/Icon';

const AppNavigator = createDrawerNavigator({
  "Home": {
    screen: Home,
    navigationOptions: {
      drawerIcon: <Icon color={"secondary"} name={"home"} size={"regular"} />
    }
  },
  "Send Tweet": {
    screen: SendTweet,
    navigationOptions: {
      drawerIcon: <Icon color={"secondary"} name={"send"} size={"regular"} />
    }
  },
  "About Us": {
    screen: AboutUs,
    navigationOptions: {
      drawerIcon: <Icon color={"secondary"} name={"info"} size={"regular"} />
    }
  },
}, {
  contentComponent: Drawer,
  contentOptions: {
    activeBackgroundColor: "transaparent",
    activeTintColor: styles.colors.default.secondary,
    inactiveTintColor: styles.colors.default.primaryLighten,
    labelStyle: { fontFamily: 'Poppins-Regular', marginLeft: 0 },

  },
  drawerWidth: 280,
});

export default createAppContainer(AppNavigator)
