import React from 'react';

// Components
import Text from '/components/Text';
import Icon from '/components/Icon';

// Styles
import {
  Wrapper,
  Touchable,
} from './styles';

/**
 * @param { object } props
 * @param { 'md' | 'fa' } lib
 * @param { node } children
 * @param { colors } color
 * @param { string } text
 * @param { boolean } revert
 * @param { boolean } bordered
 * @param { boolean } transparent
 * @param { boolean } hasPadding
 * @param { boolean } hasMarginX
 * @param { boolean } hasMarginY
 * @param { boolean } hasShadow
 * @param { string } suffix
 * @param { string } preffix
 * @param { function } onPress
 * @param { object } hitSlop
 * @param { boolean } rounded
 * @param { sizes } size
 */
function Button({
  children,
  color,
  text,
  bordered,
  transparent,
  hasPadding,
  hasMarginX,
  hasMarginY,
  hasShadow,
  lib,
  suffix,
  preffix,
  onPress,
  hitSlop,
  rounded,
  size,
  styleButton,
  ...props
}) {
  return (
    <Wrapper
      hasMarginX={hasMarginX}
      hasMarginY={hasMarginY}
      {...props}
    >
      <Touchable
        hasPadding={hasPadding}
        color={color}
        revert={bordered || transparent}
        transparent={transparent}
        onPress={() => setTimeout(() => onPress(), 0)}
        hitSlop={hitSlop}
        rounded={rounded}
        size={size}
        hasShadow={hasShadow}
        style={styleButton}
      >
        <>
          {preffix && (
            <Icon
              lib={lib}
              name={preffix}
              revert={!bordered && !transparent}
              color={color}
              mRight={"medium"}
            />
          )}
          {text && (
            <Text
              revert={!bordered && !transparent}
              weight={"medium"}
              textAlign={"center"}
              color={color}
            >
              {text}
            </Text>
          )}
          {children}
          {suffix && (
            <Icon
              lib={lib}
              name={suffix}
              revert={!bordered && !transparent}
              color={color}
              mLeft={"medium"}
            />
          )}
        </>
      </Touchable>
    </Wrapper>
  )
}

Button.defaultProps = {
  color: 'primary',
  text: false,
  revert: false,
  transparent: false,
  bordered: false,
  hasPadding: true,
  hasMarginX: true,
  hasMarginY: true,
  rounded: false,
  size: 'medium',
  hasShadow: true,
};

export default Button;
