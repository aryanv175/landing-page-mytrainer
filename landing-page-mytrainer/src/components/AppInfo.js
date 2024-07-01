import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  background: black;
  border-radius: 24px;
`;

const InfoBlock = styled.div`
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
        <InfoNumber>s5</InfoNumber>
        <InfoText>Guadmire</InfoText>
        <InfoText>Buildspace</InfoText>
      </InfoBlock>
      <InfoBlock>
        <InfoNumber>48H</InfoNumber>
        <InfoText>Made in</InfoText>
        <InfoText>48 hours</InfoText>
      </InfoBlock>
      <InfoBlock>
        <InfoNumber>No.1</InfoNumber>
        <InfoText>My first</InfoText>
        <InfoText>IOS app</InfoText>
      </InfoBlock>
      
    </InfoContainer>
  );
}

export default AppInfo;
