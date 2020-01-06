import React from 'react';
import styles from '/styles';

// Components
import MainView from "/components/MainView";
import Header from "/components/Header";
import Text from "/components/Text";

// Static
import LogoSmall from '/static/Icons/LogoSmall';

export default function Home({
  navigation
}) {
  return (
    <MainView
      topComponent={() => (
        <Header
          leftComponent={() => (
            <LogoSmall height={40} width={225} fill={styles.colors.default.secondary}/>
          )}
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
