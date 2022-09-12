import { User } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useRef } from 'react';
import { db, auth } from '../../helpers/dataBase';
import styled from '@emotion/styled';

export const SendMessage = () => {
  const user = useRef<User | null>(auth.currentUser);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        photoURL: user.current?.photoURL,
      });
      setMessage('');
    }
  };

  return (
    <SendMessageWrapper>
      <Form onSubmit={handleSubmit}>
        <Textarea
          onChange={handleChange}
          placeholder="message"
          value={message}
        />
        <Button>Send</Button>
      </Form>
    </SendMessageWrapper>
  );
};

const SendMessageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 6rem;
  border-radius: 0 0 3rem 3rem;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(
    109.6deg,
    rgb(229, 68, 121) 11.2%,
    rgb(157, 55, 206) 91.2%
  );

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
    border-radius: 0;
    height: 8vh;
    width: 100vw;
  }
`;

const Form = styled.form`
  width: 55rem;
  display: grid;
  grid-template-columns: 48rem 7rem;
`;

const Textarea = styled.textarea`
  display: flex;
  width: 48rem;
  min-height: 2.5rem;
  max-height: 10rem;
  border: none;
  outline: none;
  border-radius: 1rem 0 0 1rem;
  padding: 0.5rem;
  font-family: Nunito;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0;

  font-size: 1.5rem;
  font-family: Nunito;
  font-weight: 600;

  border: none;
  border-radius: 0 1rem 1rem 0;

  color: white;
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
`;
