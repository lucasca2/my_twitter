import React from 'react';
import md from 'react-native-vector-icons/MaterialIcons';
import fa from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from '/styles';

const ICONS = {
  md,
  fa
};

/**
 * @param { object } props
 * @param { node } children
 * @param { 'md' | 'fa' } lib
 * @param { colors } color
 * @param { boolean } revert
 * @param { sizes } size
 * @param { sizes } mX
 * @param { sizes } mY
 * @param { sizes } mLeft
 * @param { sizes } mRight
 * @param { sizes } mTop
 * @param { sizes } mBottom
 */
function Icon({
  lib,
  color,
  revert,
  size,
  name,
  mX,
  mY,
  mLeft,
  mRight,
  mTop,
  mBottom,
  style,
  ...props
}) {
  const IconComponent = ICONS[lib];

  return(
    <IconComponent
      color={styles.colors[revert ? 'revert' : 'default'][color]}
      size={styles.metrics.icon[size]}
      name={name}
      style={{
        paddingLeft: mLeft ||mX ? styles.metrics.padding[mLeft || mX] : 0,
        paddingRight: mRight || mX ? styles.metrics.padding[mRight || mX] : 0,
        ...style
      }}
      {...props}
    />
  )
}

Icon.defaultProps = {
  color: 'primary',
  size: 'medium',
  lib: 'md',
  mX: false,
  mY: false,
  mLeft: false,
  mRight: false,
  mTop: false,
  mBottom: false,
};

export default Icon;
