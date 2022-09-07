import React from 'react'
import { GoogleAuthProvider, signInWithPopup,  } from 'firebase/auth'
import styled from '@emotion/styled'
import { auth } from '../../helpers/dataBase';

export const AuthPage = () => {
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  
  return (
    <Container>
      <Button onClick={googleSignIn}>Sign In</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; 
  justify-content: center;

`;

const Button = styled.button`
  width: 15rem;
  height: 5rem;

  font-size: 2rem;
`;