import React, { useState } from 'react';
import styled from '@emotion/styled';

interface BurgerStyles {
  isOn?: boolean;
};

export const BurgerMenu = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(prev => !prev);
  }

  return (
    <Container onClick={handleClick}>
      <Section />
      <Section />
      <Section />
    </Container>
  );
};

const Container = styled.div<BurgerStyles>`
  position: relative;
  height: 100%;
  width: 4rem;
  display: flex;

  section:nth-child(1) {
    top: 1.8rem;
  }

  section:nth-child(2) {
    top: 50%;
    transform: translate(0, -50%);
  }

  section:nth-child(3) {
    bottom: 1.8rem;
  }
`;

const Section = styled.section`
  border-radius: 0.3rem;  
  position: absolute;
  height: 0.5rem;
  width: 4rem;

  background-color: blue;
`;