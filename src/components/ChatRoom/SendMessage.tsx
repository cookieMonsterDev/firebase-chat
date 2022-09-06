import { User } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useRef } from 'react';
import { db, auth } from '../../helpers/dataBase';
import styled from '@emotion/styled';

const Button = styled.button`
  color: red;
`;

export const SendMessage = () => {
  const user = useRef<User | null>(auth.currentUser);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const s = 12;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addDoc(collection(db, 'messages'), {
      text: message,
      name: user.current?.displayName,
      uid: user.current?.uid,
      timestamp: serverTimestamp(),
    });

    console.log(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} placeholder="message" />
      <button>Send</button>
    </form>
  );
};
