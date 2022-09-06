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
    <div>
      {messages &&
        messages.map((item: DocumentData) => (
          <Message key={item.id} message={item} />
        ))}
    </div>
  );
};
