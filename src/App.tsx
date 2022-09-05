import React from 'react';
import './App.css';
import { ChatRoom } from './components/ChatRoom/ChatRoom';

import { auth } from './helpers/dataBase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { NavBar } from './components/NavBar/NavBar';
import { SendMessage } from './components/ChatRoom/SendMessage';

const App = () => {

  const [user] = useAuthState(auth);

  // console.log(auth.currentUser)

  return (
    <div className="App">
      <NavBar />
      {user && <ChatRoom />}
      {user && <SendMessage />}
    </div>
  );
}

export default App;



