import React from 'react';
import { View, Text } from 'react-native';

// Components
import MainView from '/components/MainView';
import Header from "../../components/Header";

export default function SendTweet({
  navigation
}) {
return (
    <MainView
      topComponent={() => (
        <Header
          title={"New Tweet"}
          rightIcon={"menu"}
          rightIconAction={navigation.toggleDrawer}
          leftIcon={"arrow-back"}
          leftIconAction={navigation.goBack}
        />
      )}
    >
      <Text>
        Send Tweet Page
      </Text>
    </MainView>
  )
}
