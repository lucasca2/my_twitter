import React from 'react';
import styles from '/styles';

// Components
import MainView from '/components/MainView';
import Header from "/components/Header";
import Row from "/components/Row";
import Text from "/components/Text";

// Static
import Logo from '/static/Icons/Logo';

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
      <Row mBottom={"medium"} align={"center"}>
        <Logo height={100} width={100} fill={styles.colors.default.primary} />
      </Row>
      <Row mY={"medium"} align={"start"}>
        <Text lineHeight={15}>
          This app was created to facilitate the active use of twitter user.
        </Text>
      </Row>
      <Row mY={"medium"} align={"start"}>
        <Text lineHeight={15}>
          The user can follow and write their tweets directly through this app.
        </Text>
      </Row>

      <Row mTop={"large"} align={"start"}>
        <Text fontSize={"small"} color={"blackLighten"}>
          Versão do app - 1.0.0{'\n'}
          © 2020 - Lucas Costa Amaral
        </Text>
      </Row>
    </MainView>
  )
}
