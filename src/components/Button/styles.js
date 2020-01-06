import styled, { css } from 'styled-components';
import styles from "/styles";

import TouchablePlatforms from 'react-native-platform-touchable';

export const Touchable = styled(TouchablePlatforms).attrs(p => ({
  activeOpacity: .4,
  background: TouchablePlatforms.Ripple(styles.colors.revert[p.color], p.rounded)
}))`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${styles.metrics.baseRadius};
  background-color: ${({revert, color}) => styles.colors[revert ? 'revert' : 'default'][color] };
  
  ${({ transparent }) => !transparent && css`
    border: ${styles.metrics.baseBorder}px solid ${({color}) => styles.colors.default[color]};
  `}
  
  ${({ hasPadding }) => hasPadding && css`
    padding: ${p => styles.metrics.button[p.size]}px; 
  `}
  
  ${({ hasShadow }) => hasShadow ? styles.metrics.baseBoxShadow : ''} 
`;

export const Wrapper = styled.View`
  ${({ hasMarginX }) => hasMarginX && css`
    padding-left: ${styles.metrics.margin.medium}px;
    padding-right: ${styles.metrics.margin.medium}px;
  `}
   
  ${({ hasMarginY }) => hasMarginY && css`
    padding-top: ${styles.metrics.margin.medium}px;
    padding-bottom: ${styles.metrics.margin.medium}px;
  `}
`;

