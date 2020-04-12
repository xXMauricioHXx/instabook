import styled from 'styled-components/native';
import { Colors } from '../../contants';

export const CardContainer = styled.View`
  width: 100%;
  height: 245px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;

export const CardItem = styled.View`
  width: 40%;
`;

export const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 10px;
  width: 95%;
  min-height: 55px;
`;
