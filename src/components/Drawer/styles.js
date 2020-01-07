import styled from 'styled-components';
import styles from '/styles';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${styles.colors.default.primary};
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`;

export const WrapperAvatar = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  overflow: hidden;
  border: 2px solid #fff;
`;
