import { ChatRoom } from './components/ChatRoom/ChatRoom';

import { auth } from './helpers/dataBase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { NavBar } from './components/NavBar/NavBar';
import { SendMessage } from './components/ChatRoom/SendMessage';

import styled from '@emotion/styled';
import { AuthPage } from './components/AuthPage/AuthPage';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Wrapper>
      <AppWrapper>
        <NavBar />
        {user ? <ChatRoom /> : <AuthPage />}
      </AppWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
  display: flex;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
`;

// const AppWrapper = styled.div`
//   position: relative;
//   width: 60rem;
//   height: 60rem;
//   display: flex;
//   border: 1px solid black;
//   box-sizing: border-box;
//   border-radius: 3rem;

//   @media only screen 
//   and (min-device-width: 320px) 
//   and (max-device-width: 568px)
//   and (-webkit-min-device-pixel-ratio: 2) {
//     width: 100vw;
//     height: 100vh;
//     border: none;
//   }
// `;

const AppWrapper = styled.div`
  position: relative;
  width: 60rem;
  height: 60rem;
  display: grid;
  grid-template-columns: auto;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 3rem;

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    height: 100vh;
    border: none;
  }
`;


//font-family: 'Press Start 2P', sans-serif;