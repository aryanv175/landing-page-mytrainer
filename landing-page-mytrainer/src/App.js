// src/App.js
import React from 'react';
import styled from 'styled-components';
import AppInfo from './components/AppInfo';
import mobileImage from './assets/mobile.png'; // Make sure to place your image in the src/assets folder
import emojiImage from './assets/emoji.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const StyledImage = styled.img`
  width: 64px;  // Set your desired width
  height: 64px; // Adjust height automatically to maintain aspect ratio
  margin-right: 12px;
  margin-top: 8px;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const Tagline = styled.h1`
  font-size: 64px;
  text-align: left;
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

const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const HalfWidthDiv = styled.div`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <Title>
        <StyledImage src={emojiImage} alt="Mobile App" />
        MyTrainer
      </Title>
      <Div2>
        <HalfWidthDiv>
          <Tagline>Your workout.</Tagline>
          <Tagline>Your way.</Tagline>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
          </Subtitle>
          <DownloadButton>Download the App</DownloadButton>
          <AppInfo />
        </HalfWidthDiv>
        <HalfWidthDiv>
          <Image src={mobileImage} alt="Mobile App" />
        </HalfWidthDiv>
      </Div2>
    </Container>
  );
}

export default App;
