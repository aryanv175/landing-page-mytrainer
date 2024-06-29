import React, { useState } from 'react';
import styled from 'styled-components';
import AppInfo from './components/AppInfo';
import mobileImage from './assets/mobile2.png';
import emojiImage from './assets/emoji.png';
import starImage from './assets/star.png';
import { db, collection, addDoc } from './firebase';

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
  width: 500px;
  margin-right: 12px;
  margin-top: 8px;
`;

const StarImage = styled.img`
  position: absolute;
  top: 11px;
  left: 283px;
  width: 20px;
  height: 20px;
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
  width: 400px; /* Set a fixed width for the modal */
  height: 300px; /* Set a fixed height for the modal */
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
  margin-bottom: 16px; /* Adjusted margin */
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 0px;
  margin-bottom: 12px; /* Ensure no margin disrupts the layout */
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
        const docRef = await addDoc(collection(db, 'waitlist'), { email });
        console.log("Document written with ID: ", docRef.id);
        alert(`Email submitted: ${email}`);
        setEmail('');
        setShowModal(false);
      } catch (error) {
        console.error("Error adding document: ", error);
        alert(`Error submitting email: ${error.message}`);
      }
    }
  };

  return (
    <Container>
      <TitleContainer>
        <StyledImage src={emojiImage} alt="Mobile App" />
        <Title>MyTrainer</Title>
        <StarImage src={starImage} alt="Star Image" />
      </TitleContainer>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', padding: '20px' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <Tagline>Your workout.</Tagline>
          <Tagline>Your way.</Tagline>
          <Subtitle>
            Get voice reminders for your specific workout routine and never worry about missing an exercise ever again!
          </Subtitle>
          <div style={{ textAlign: 'left' }}>
            <DownloadButton onClick={() => setShowModal(true)}>Join Waitlist</DownloadButton>
          </div>
          <AppInfo />
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <StyledImage2 src={mobileImage} alt="Mobile App" />
        </div>
      </div>
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
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default JoinWaitlistButton;
