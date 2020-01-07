import styled from 'styled-components';
import styles from '/styles';

export const Avatar = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 100%;
`;

export const WrapperAvatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid ${styles.colors.default.primary};
  overflow: hidden;
  margin-right: 10px;
`;

export const WrapperContent = styled.View``;

export const WrapperItem = styled.View`
  flex-direction: row;
  padding: 20px 10px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${styles.colors.default.border};
`;
