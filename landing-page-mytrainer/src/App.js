// src/App.js (continued)
import React from 'react';
import styled from 'styled-components';
import AppInfo from './components/AppInfo';
import mobileImage from './assets/mobile.png'; // Make sure to place your image in the src/assets folder

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 24px;
`;

const Title = styled.h1`
  font-size: 2.5em;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const DownloadButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
`;

const Image = styled.img`
  width: 200px;
  margin-top: 20px;
`;

function App() {
  return (
    <Container>
      <Header>
        <span role="img" aria-label="muscle">
          💪
        </span>
        MyTrainer
      </Header>
      <Title>Your workout. Your way.</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
      </Subtitle>
      <DownloadButton>Download the App</DownloadButton>
      <Image src={mobileImage} alt="Mobile App" />
      <AppInfo />
    </Container>
  );
}

export default App;
