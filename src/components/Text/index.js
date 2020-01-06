import React from 'react';

// Styles
import { MainText } from './styles';


/**
 * @param { object } props
 * @param { node } children
 * @param { boolean } revert
 * @param { colors } color
 * @param { fontWeight } weight
 * @param { fontSize } fontSize
 * @param { textAlign } textAlign
 */
function Text({
  revert,
  color,
  weight,
  fontSize,
  textAlign,
  children,
  lineHeight,
  ...props
}) {
  return (
    <MainText
      revert={revert}
      color={color}
      weight={weight}
      fontSize={fontSize}
      textAlign={textAlign}
      lineHeight={lineHeight}
      allowFontScaling={false}
      {...props}
    >
      {children}
    </MainText>
  )
}

Text.defaultProps = {
  color: 'text',
  weight: 'regular',
  textAlign: 'auto',
  fontSize: 'medium',
  lineHeight: 0
};

export default Text;
