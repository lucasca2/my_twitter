import React, { useEffect, useState } from 'react';
import styles from '/styles';
import { DrawerItems } from 'react-navigation-drawer';
import { SafeAreaView } from 'react-native';

// Static
import LogoSmall from "/static/Icons/LogoSmall";

// Components
import Row from "/components/Row";
import Text from "/components/Text";

// Styles
import {
  Wrapper,
  Avatar,
  WrapperAvatar
} from './styles';
import AsyncStorage from "@react-native-community/async-storage";



export default function CustomDrawerContentComponent(props) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      const user = JSON.parse(await AsyncStorage.getItem('@user'));
      setCurrentUser(user);

      console.tron(user);
    }

    getUser();
  }, []);
  return (
    <Wrapper>
      <SafeAreaView
        style={{ flex: 1 }}
      >
        <Row align={"center"} mTop={"large"} mBottom={"small"}>
          <LogoSmall height={40} width={225} fill={styles.colors.default.secondary}/>
        </Row>
        <Row mY={"medium"}>
          <WrapperAvatar>
            <Avatar source={{ uri: currentUser?.profile_image_url?.replace(/normal/g, '200x200') }}/>
          </WrapperAvatar>
        </Row>
        <Row>
          <Text color={"secondary"}>@{currentUser?.screen_name}</Text>
        </Row>
        <Row mBottom={"medium"}>
          <Text color={"secondary"} weight={"bold"} fontSize={"large"}>{currentUser?.name}</Text>
        </Row>
        <DrawerItems {...props} />
      </SafeAreaView>
    </Wrapper>
  )
};
