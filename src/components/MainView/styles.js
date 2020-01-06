import styled from 'styled-components';
import styles from '/styles';

export const WrapperScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
`;

export const StatusBarColor = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: ${({ color }) => styles.colors.default[color]};
`;
