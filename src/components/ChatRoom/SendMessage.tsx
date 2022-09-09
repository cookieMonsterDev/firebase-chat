import { User } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useRef } from 'react';
import { db, auth } from '../../helpers/dataBase';
import styled from '@emotion/styled';

export const SendMessage = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const user = useRef<User | null>(auth.currentUser);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message) {
      await addDoc(collection(db, 'messages'), {
        text: message,
        name: user.current?.displayName,
        uid: user.current?.uid,
        timestamp: serverTimestamp(),
      });
      setMessage('');
    }
  };

  return (
    <SendMessageWrapper>
      <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange} 
        placeholder="message" 
        value={message}
        type='text'/>
      <button>Send</button>
    </form>  
    </SendMessageWrapper>
  );
};

const SendMessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 6rem;
  border-radius: 0 0 3rem 3rem;
  align-items: center;
  justify-content: space-around;


  background: linear-gradient(109.6deg, rgb(229, 68, 121) 11.2%, rgb(157, 55, 206) 91.2%);;

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    border-radius: 0;
    height: 8vh;
    width: 100vw;
  }
`;