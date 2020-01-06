import styled, { css } from "styled-components";
import styles from "/styles";

export const MainText = styled.Text` 
  include-font-padding: false;   
  text-align-vertical: center;
  
  color: ${({revert, color}) => styles.colors[revert ? 'revert' : 'default'][color] };   
  text-align: ${({textAlign}) => textAlign};
  font-size: ${({fontSize}) => styles.fonts.sizes[fontSize]};
  ${({ lineHeight, fontSize }) => lineHeight > 0 && css`
    line-height: ${({ lineHeight, fontSize }) => (styles.fonts.sizes[fontSize] + lineHeight)}; 
  `}
  
  ${({weight}) => styles.fonts.weights[weight]}
`;
