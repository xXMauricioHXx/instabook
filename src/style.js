import styled from 'styled-components/native';
import { Colors } from './contants';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.bgColor};
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${Colors.textColors};
  margin: 10px;
`;
