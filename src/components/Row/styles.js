import styled, { css } from "styled-components";
import styles from "/styles";

export const Wrapper = styled.View` 
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  
  justify-content: ${({ align }) => styles.metrics.aligns[align] };
  
  ${({ mX }) => mX && css` 
    margin-left: ${ styles.metrics.margin[mX] }px;
    margin-right: ${ styles.metrics.margin[mX] }px;
  `}
  ${({ mY }) => mY && css` 
    margin-top: ${ styles.metrics.margin[mY] }px;
    margin-bottom: ${ styles.metrics.margin[mY] }px;
  `}
  ${({ mLeft }) => mLeft && css` 
    margin-left: ${ styles.metrics.margin[mLeft] }px;
  `}
  ${({ mRight }) => mRight && css` 
    margin-right: ${ styles.metrics.margin[mRight] }px;
  `}
  ${({ mTop }) => mTop && css` 
    margin-top: ${ styles.metrics.margin[mTop] }px;
  `}
  ${({ mBottom }) => mBottom && css` 
    margin-bottom: ${ styles.metrics.margin[mBottom] }px;
  `}
`;
