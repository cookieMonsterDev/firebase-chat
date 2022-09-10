import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { auth } from '../../../helpers/dataBase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUpdateMenu } from './menuContext';

interface BurgerStyles {
  isOn?: boolean;
  isDisabled?: boolean;
};

export const BurgerMenu = () => {

  const [user] =  useAuthState(auth);
  const [checked, setChecked] = useState(false);
  const updateMenuState = useUpdateMenu();

  const handleClick = () => {
    setChecked(prev => !prev);
    updateMenuState();
  }

  return (
    <Container 
      onClick={handleClick} 
      isOn={checked}
      isDisabled={user ? false : true}>
      <Section />
      <Section />
      <Section />
    </Container>
  );
};

const Container = styled.div<BurgerStyles>`
  display: block;
  height: 2.4rem;
  width: 3rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section:nth-child(1) {
    transform-origin: 0 50%;
    transition: transform 0.4s ease-in-out;
  }

  section:nth-child(2) {
    transition: transform 0.2s ease-in-out;
  }

  section:nth-child(3) {
    transform-origin: 0 50%;
    transition: transform 0.4s ease-in-out;
  }

  ${({isOn}) => isOn && css`
    section:nth-child(1) {
      transform: rotate(40deg)
    }

    section:nth-child(2) {
      transform: scaleY(0);
    }

    section:nth-child(3) {
      transform: rotate(-40deg);
    }
  `}

  ${({isDisabled}) => isDisabled && css`
    touch-action: none;
    pointer-events: none;
  `}
`;

const Section = styled.section`
  display: block;
  height: 0.5rem;
  width: 100%;
  border-radius: 0.2rem;
  background: rgba(255, 255, 255, 1);
`;
