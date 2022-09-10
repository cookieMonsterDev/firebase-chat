import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react';
import { useMenu } from './menuContext';

interface MenuProps {
  isOn: boolean | null;
};

export const Menu = () => {

  const menuState = useMenu();

  return (
    <Container isOn={menuState}>
      Menu
    </Container>
  )
};

const Container = styled.div<MenuProps>`
  position: absolute;
  z-index: 10;
  top: 6rem;
  width: 30rem;
  height: 40rem;
  border-radius: 0 0 3rem 0;
  transform: translateX(-100%);
  transition: all 700ms;

  background: linear-gradient(
    103deg, rgb(235, 225, 188) 
    7.2%, rgb(232, 188, 234) 
    57.5%, rgb(203, 209, 244) 
    90.7%);

  ${({isOn}) => isOn && css`
    transform: translateX(0);
  `}
`;