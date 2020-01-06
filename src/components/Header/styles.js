import styled, { css } from "styled-components";
import styles from '/styles';

// Components
import Text from "/components/Text";

export const Wrapper = styled.View`
  background-color: ${({ color }) => styles.colors.default[color]};
  padding: ${styles.metrics.padding.large}px ${styles.metrics.padding.medium}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text).attrs({
  textAlign: "center",
  color: "secondary"
})`
  flex: 1;
  padding: 0 ${styles.metrics.padding.large}px;
  z-index: -1;
  
  ${({ leftIcon }) => leftIcon ? css`margin-right: ${styles.metrics.icon.regular}px;` : ''}
  ${({ rightIcon }) => rightIcon ? css`margin-left: ${styles.metrics.icon.regular}px;` : ''}
`;
