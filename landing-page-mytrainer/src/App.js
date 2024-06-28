// src/App.js
import React from 'react';
import styled from 'styled-components';
import AppInfo from './components/AppInfo';
import mobileImage from './assets/mobile.png'; // Ensure your image path is correct
import emojiImage from './assets/emoji.png';
import starImage from './assets/star.png'; // Import the star image

const Container = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 24px;
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  position: relative;
  top: -5px;
  width: 64px;
  height: 64px;
  margin-right: 12px;
  margin-top: 8px;
`;

const StyledImage2 = styled.img`
  width: 475px;
  margin-right: 12px;
  margin-top: 8px;
`;

const StarImage = styled.img`
  position: absolute;
  top: 11px; // Adjust the position as needed
  left: 283px; // Adjust the position as needed
  width: 20px; // Adjust the size as needed
  height: 20px; // Adjust the size as needed
`;

const Title = styled.h1`
  font-size: 64px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Tagline = styled.h1`
  margin-top: 0px;
  margin-bottom: -8px;
  font-size: 64px;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  text-align: left;
  margin-bottom: 36px;
`;

const DownloadButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 36px;
  cursor: pointer;
  font-size: 1em;
  width: 269px;
  height: 78px;
  margin-bottom: 30px;
  font-weight: 700;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Div3 = styled.div`
  text-align: left;
`;

const HalfWidthDiv = styled.div`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <TitleContainer>
        <StyledImage src={emojiImage} alt="Mobile App" />
        <Title>MyTrainer</Title>
        <StarImage src={starImage} alt="Star Image" />
      </TitleContainer>
      <Div2>
        <HalfWidthDiv>
          <Tagline>Your workout.</Tagline>
          <Tagline>Your way.</Tagline>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
          </Subtitle>
          <Div3>
            <DownloadButton>Join Waitlist</DownloadButton>
          </Div3>
          <AppInfo />
        </HalfWidthDiv>
        <HalfWidthDiv>
          <StyledImage2 src={mobileImage} alt="Mobile App" />
        </HalfWidthDiv>
      </Div2>
    </Container>
  );
}

export default App;
