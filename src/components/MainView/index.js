import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';

// Styles
import styles from '/styles';

import {
  WrapperScroll,
  StatusBarColor
} from './styles'


/**
 * @param { object } props
 * @param { node } children
 * @param { boolean } form
 * @param { function } topComponent
 * @param { function } bottomComponent
 */
function MainView({
  noScroll,
  children,
  topComponent,
  bottomComponent,
  statusBarBackgroundColor,
  statusBarStyle,
  statusBarHidden,
  statusBarColor,
  ...props
}) {
  return (
    <>
      <StatusBar
        backgroundColor={styles.colors.default[statusBarColor]}
        barStyle={statusBarStyle}
        hidden={statusBarHidden}
      />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"} enabled={styles.isIOS && noScroll}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBarColor color={statusBarColor}/>
          {topComponent && topComponent()}
          <WrapperScroll
            contentContainerStyle={{
              width: '100%',
              alignSelf: 'center',
              padding: 20,
            }}
          >
            {children}
          </WrapperScroll>
          {bottomComponent && bottomComponent()}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}

MainView.defaultProps = {
  noScroll: false,
  safeBackgroundColor: 'primary',
  statusBarColor: 'primary',
  statusBarStyle: 'light-content',
  statusBarHidden: false,
};

export default MainView
