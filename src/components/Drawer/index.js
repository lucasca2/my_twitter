import React from 'react';
import styles from '/styles';
import { DrawerItems } from 'react-navigation-drawer';
import { SafeAreaView } from 'react-native';

// Static
import LogoSmall from "/static/Icons/LogoSmall";

// Components
import Row from "/components/Row";

// Styles
import {
  Wrapper
} from './styles';



export default function CustomDrawerContentComponent(props) {
  return (
    <Wrapper>
      <SafeAreaView
        style={{ flex: 1 }}
      >
        <Row align={"start"} mY={"large"}>
          <LogoSmall height={40} width={225} fill={styles.colors.default.secondary}/>
        </Row>
        <DrawerItems {...props} />
      </SafeAreaView>
    </Wrapper>
  )
};
