import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.screen.background};
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.button.background};
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.color.button.title};
  font-weight: 500;
`;