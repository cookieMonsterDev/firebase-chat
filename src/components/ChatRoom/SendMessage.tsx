import { User } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db, auth } from '../../helpers/dataBase';

interface MessageProps extends User {
  uid: string;
  displayName: string;
};

export const SendMessage = () => {

  const [user] = useState<User | null>(auth.currentUser);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addDoc(collection(db, 'messages'), {
      text: message,
      name: user?.displayName,
      uid: user?.uid,
      timestamp: serverTimestamp()
    });

    console.log(message)
  }

  return (
    <form onSubmit={handleSubmit}> 
      <input
        onChange={handleChange} 
        placeholder='message'/>
      <button>Send</button>
    </form>
  )
}
