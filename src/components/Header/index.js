import React from 'react';

// Components
import Icon from '/components/Icon';
// import { Button } from 'native-base';
import Button from '/components/Button';

// Styles
import {
  Wrapper,
  Title,
} from './styles';

/**
 * @param { object } props
 * @param { string } leftIcon
 * @param { function } leftIconAction
 * @param { function } leftComponent
 * @param { string } rightIcon
 * @param { function } rightIconAction
 * @param { function } rightComponent
 * @param { colors } color
 * @param { string } title
 */
function Header({
  title,
  leftComponent,
  leftIcon,
  leftIconAction,
  rightComponent,
  rightIcon,
  rightIconAction,
  color,
  fontSize,
  weight,
  ...props
}) {
  return (
    <Wrapper color={color}>
      { leftComponent && leftComponent() }
      { !leftComponent && leftIcon && (
        <Button
          color={color}
          onPress={leftIconAction}
          hasMarginY={false}
          hitSlop={{ top: 20, bottom: 10, left: 20, right: 20 }}
          rounded={true}
          hasPadding={false}
          hasShadow={false}
        >
          <Icon color={"secondary"} name={leftIcon} size={"regular"}/>
        </Button>
      )}
      { title && (
        <Title
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          fontSize={fontSize}
          weight={weight}
        >
          {title}
        </Title>
      )}
      { !rightComponent && rightIcon && (
        <Button
          color={color}
          onPress={rightIconAction}
          hasMarginY={false}
          hitSlop={{ top: 20, bottom: 10, left: 20, right: 20 }}
          rounded={true}
          hasPadding={false}
          hasShadow={false}
        >
          <Icon color={"secondary"} name={rightIcon} size={"regular"}/>
        </Button>
      )}
    </Wrapper>
  )
}


Header.defaultProps = {
  color: 'primary',
  fontSize: 'medium',
  weight: 'medium',
  leftIcon: false,
  rightIcon: false,
};

export default Header;
