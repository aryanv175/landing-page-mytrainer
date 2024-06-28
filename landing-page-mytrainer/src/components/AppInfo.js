import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const InfoBlock = styled.div`
  background: black;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const InfoNumber = styled.div`
  font-size: 2em;
`;

const InfoText = styled.div`
  font-size: 0.8em;
`;

function AppInfo() {
  return (
    <InfoContainer>
      <InfoBlock>
        <InfoNumber>4.9</InfoNumber>
        <InfoText>Lorem ipsum dolor amet</InfoText>
      </InfoBlock>
      <InfoBlock>
        <InfoNumber>876K</InfoNumber>
        <InfoText>Lorem ipsum dolor amet</InfoText>
      </InfoBlock>
      <InfoBlock>
        <InfoNumber>No.1</InfoNumber>
        <InfoText>Lorem ipsum dolor amet</InfoText>
      </InfoBlock>
      
    </InfoContainer>
  );
}

export default AppInfo;
