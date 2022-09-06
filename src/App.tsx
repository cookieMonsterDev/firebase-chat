import { ChatRoom } from './components/ChatRoom/ChatRoom';

import { auth } from './helpers/dataBase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { NavBar } from './components/NavBar/NavBar';
import { SendMessage } from './components/ChatRoom/SendMessage';

import styled from '@emotion/styled';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Wrapper>
      <NavBar />
      {user && <ChatRoom />}
      {user && <SendMessage />}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  font-family: 'Press Start 2P', sans-serif;

  background-color: red;
`;
