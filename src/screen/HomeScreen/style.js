import styled from 'styled-components/native';
import { Colors } from '../../contants';

export const SearchBarResultContainer = styled.View`
  width: 100%;
  position: relative;
  align-items: center;
  margin-top: 10px;
`;

export const SearchBarResult = styled.View`
  min-height: 20px;
  max-height: 120px;
  background: #ffff;
`;

export const SearchBarResultItem = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

export const SearchBarResultItemAuthor = styled.Text`
  color: ${Colors.grey};
`;
