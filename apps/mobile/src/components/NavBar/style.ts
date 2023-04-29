import styled from 'styled-components/native';

export const Container = styled.View`
  margin:auto;
  bottom: 0px;
  width: 100%;
  position: relative;
  background-color: transparent;
  border-radius: 21px;
  justify-content: center;
  align-items: center;
  padding: 20px 0 40px;
  flex-direction: row;
`;

export const ImageLineBar = styled.Image`
  width: 90%;
  height: 1px;
  position: absolute;
  top: 0;
`;

export const ContentIcon = styled.View`
  padding: 4px 15px;

`;

export const ButtomNav = styled.TouchableOpacity`
  padding: 8px 12px ;
  justify-content: center;
  align-items: center;
`;
