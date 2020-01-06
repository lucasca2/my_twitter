import React from 'react';

// Styles
import { Wrapper } from './styles';

/**
 * @param { object } props
 * @param { node } children
 * @param { sizes } mX
 * @param { sizes } mY
 * @param { sizes } mLeft
 * @param { sizes } mRight
 * @param { sizes } mTop
 * @param { sizes } mBottom
 * @param { aligns } align
 */
function Row({
  children,
  mX,
  mY,
  mLeft,
  mRight,
  mTop,
  mBottom,
  align,
  ...props
}) {
  return (
    <Wrapper
      mX={mX}
      mY={mY}
      mLeft={mLeft}
      mRight={mRight}
      mTop={mTop}
      mBottom={mBottom}
      align={align}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

Row.defaultProps = {
  align: 'center',
  mX: false,
  mY: false,
  mLeft: false,
  mRight: false,
  mTop: false,
  mBottom: false,
};

export default Row;
