import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMenu, useUpdateMenu } from './menuContext';
import { auth } from '../../../helpers/dataBase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

interface MenuProps {
  isOn?: boolean | null;
  photoURL?: string | null;
}

export const Menu = () => {
  const [user] = useAuthState(auth);
  const menuState = useMenu();
  const upadeMenu = useUpdateMenu();

  const handleClick = () => {
    signOut(auth);
    upadeMenu();
  };

  return (
    <Container isOn={menuState}>
      <UserPhoto photoURL={user?.photoURL} />
      <label>{user && user.displayName}</label>
      <Button onClick={handleClick}>Sign Out</Button>
    </Container>
  );
};

const Container = styled.div<MenuProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  z-index: 10;
  top: 6rem;
  width: 30rem;
  height: 40rem;
  border-radius: 0 0 3rem 0;
  transform: translateX(-100%);
  transition: all 700ms;

  background: linear-gradient(
    103deg,
    rgb(235, 225, 188) 7.2%,
    rgb(232, 188, 234) 57.5%,
    rgb(203, 209, 244) 90.7%
  );

  ${({ isOn }) =>
    isOn &&
    css`
      transform: translateX(0);
    `}

  label {
    font-size: 2rem;
    font-weight: 800;
    font-family: Nunito;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;

const UserPhoto = styled.div<MenuProps>`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.2);
  background-image: url(${(props) => props.photoURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  padding: 0;

  font-size: 1.3rem;
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
