import React from 'react';

// Components
import MainView from '/components/MainView';
import Header from "/components/Header";
import Text from "/components/Text";

export default function AboutUs({
  navigation
}) {
  return (
    <MainView
      topComponent={() => (
        <Header
          title={"About Us"}
          rightIcon={"menu"}
          rightIconAction={navigation.toggleDrawer}
          leftIcon={"arrow-back"}
          leftIconAction={navigation.goBack}
        />
      )}
    >
      <Text fontSize={"large"} weight={"bold"}>
        My Twitter
      </Text>
      <Text lineHeight={15}>
        This app was created to facilitate the active use of twitter user.
      </Text>
      <Text lineHeight={15}>
        The user can follow and write their tweets directly through this app.
      </Text>
    </MainView>
  )
}
