import styled from 'styled-components';
import styles from '/styles';

export const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 10,
  placeholderTextColor: styles.colors.default.blackLighten,
  autoCorrect: false
})`
  padding: 15px;
  margin: 10px 0;
  background-color: ${styles.colors.default.border};
  min-height: 80px;
  text-align-vertical: top;
  
  ${styles.fonts.weights.regular}
`;
