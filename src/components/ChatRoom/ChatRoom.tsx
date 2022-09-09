import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../helpers/dataBase';
import { Message } from './Message';
import { SendMessage } from './SendMessage';
import styled from '@emotion/styled';

export const ChatRoom = () => {
  const [messages, setMessages] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscibe = onSnapshot(q, (QuerySnapshot) => {
      let messages: DocumentData[] = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscibe();
  }, []);

  return (
    <Container>
      <MessagesWrapper>
        {messages && messages.map((item: DocumentData) => (
          <Message key={item.id} message={item} />
        ))}
      </MessagesWrapper>
      <SendMessage />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 54rem;
  display: grid;

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height: 94vh;
  }
`;

const MessagesWrapper = styled.div`
  height: 48rem;

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height: 86vh;
  }
`;