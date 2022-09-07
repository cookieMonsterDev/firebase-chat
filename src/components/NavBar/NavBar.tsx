import { auth } from '../../helpers/dataBase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import styled from '@emotion/styled';

export const NavBar = () => {
  const [user] = useAuthState(auth);

  const handleClick = () => {
    user ? signOut(auth) : console.log('nothing')
  }

    return (
      <Container>
        {user && <button onClick={handleClick}>Sign Out</button>}
      </Container>
    );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  margin: 0;
  background-color: purple;

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height: 8rem;
  }
`;