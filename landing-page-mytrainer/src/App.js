import React, { useState } from 'react';
import styled from 'styled-components';
import AppInfo from './components/AppInfo';
import mobileImage from './assets/mobile2.png';
import emojiImage from './assets/emoji.png';
import starImage from './assets/star.png';
import gitImage from './assets/git.png';
import { db, collection, addDoc } from './firebase';

const Container = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; // Add this line
`;

const GitHubLink = styled.a`
  position: absolute;
  right: 0;

  @media (max-width: 768px) {
    position: static;
  }
`;

const StyledImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 12px;
`;

const StarImage = styled.img`
  position: absolute;
  top: 12px; // Adjust this value as needed
  left: calc(100% - 129.5px); // Adjust this value as needed
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: 64px;
  margin: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  padding: 20px;
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const Tagline = styled.h1`
  margin-top: 0px;
  margin-bottom: -8px;
  font-size: 64px;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  text-align: left;
  margin-bottom: 36px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StyledImage2 = styled.img`
  width: 100%;
  max-width: 500px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const TextInput = styled.input`
  width: 80%;
  padding: 12px;
  font-size: 1em;
  border-radius: 36px;
  margin-bottom: 16px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 0px;
  margin-bottom: 12px;
`;

const Subtitle2 = styled.p`
  font-size: 16px;
  text-align: center;
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

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const JoinWaitlistButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubmit = async () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setIsValidEmail(isValid);

    if (isValid) {
      try {
        console.log("Submitting email:", email);
        const docRef = await addDoc(collection(db, 'waitlist'), { email });
        console.log("Document written with ID: ", docRef.id);
        alert(`Email submitted: ${email}`);
        setEmail('');
        setShowModal(false);
      } catch (error) {
        console.error("Error adding document: ", error);
        alert(`Error submitting email: ${error.message}`);
      }
    } else {
      console.log("Invalid email:", email);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <LogoContainer>
          <StyledImage src={emojiImage} alt="Mobile App" />
          <Title>MyTrainer</Title>
          <StarImage src={starImage} alt="Star Image" />
        </LogoContainer>
        <GitHubLink href="https://github.com/aryanv175/MyTrainer" target="_blank" rel="noopener noreferrer">
          <StyledImage src={gitImage} alt="GitHub Repository" />
        </GitHubLink>
      </TitleContainer>
      <ContentWrapper>
        <ContentSection>
          <Tagline>Your workout.</Tagline>
          <Tagline>Your way.</Tagline>
          <Subtitle>
            Get voice reminders for your specific workout routine and never worry about missing an exercise ever again!
          </Subtitle>
          <DownloadButton onClick={() => setShowModal(true)}>Join Waitlist</DownloadButton>
          <AppInfo />
        </ContentSection>
        <ImageSection>
          <StyledImage2 src={mobileImage} alt="Mobile App" />
        </ImageSection>
      </ContentWrapper>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
            <h2>Join Waitlist</h2>
            <TextInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isValidEmail && <ErrorMessage>Please enter a valid email address</ErrorMessage>}
            <DownloadButton onClick={handleSubmit}>Submit</DownloadButton>
            <Subtitle2>Please wait up to 5 seconds after pressing submit!</Subtitle2>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default JoinWaitlistButton;