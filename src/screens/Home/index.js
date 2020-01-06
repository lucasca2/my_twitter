import React from 'react';

// Components
import MainView from "/components/MainView";
import Header from "/components/Header";
import Text from "../../components/Text";

export default function Home({
  navigation
}) {
  return (
    <MainView
      topComponent={() => (
        <Header
          title={"Lucas Amaral"}
          rightIcon={"menu"}
          rightIconAction={navigation.toggleDrawer}
        />
      )}
    >
      <Text>
        Home Page
      </Text>
    </MainView>
  )
}
