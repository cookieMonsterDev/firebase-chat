import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import styled from '@emotion/styled';
import { auth } from '../../helpers/dataBase';

export const AuthPage = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <Container>
      <h1>Tap to login with Google</h1>
      <Button onClick={googleSignIn}>Sign In</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 54rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: Nunito;
    margin-bottom: 5rem;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
    h1 {
      font-size: 3.3rem;
      font-family: Nunito;
    }
  }
`;

const Button = styled.button`
  width: 15rem;
  height: 5rem;
  padding: 0;

  font-size: 2rem;
  font-family: Nunito;
  font-weight: 600;

  border: none;
  border-radius: 1rem;

  background: linear-gradient(
    109.6deg,
    rgb(229, 68, 121) 11.2%,
    rgb(157, 55, 206) 91.2%
  );
  color: white;

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 22rem;
    height: 8rem;
    font-size: 3.3rem;
  }
`;
