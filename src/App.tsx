import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { DocumentData, limit, Query} from 'firebase/firestore';
import { serverTimestamp, collection, addDoc, orderBy, query} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyD2gLGdZ4N9-tBp7CMo7Xwf3Ailpa92hwU",
  authDomain: "real-time-chat-1-35616.firebaseapp.com",
  projectId: "real-time-chat-1-35616",
  storageBucket: "real-time-chat-1-35616.appspot.com",
  messagingSenderId: "855933973771",
  appId: "1:855933973771:web:a6254789bb5682273c5e0e",
  measurementId: "G-YCZCXW2K6Q"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {

  const [user] = useAuthState(auth as any);

  return (
    <div className="App">
      <header>
        <SignOut />
      </header>

      <section>
        { user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;

//////////////

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with google</button>
  );
};

///////

const SignOut = () => {

  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

//////

const ChatRoom = () => {

  // const messagesRef = collection(firestore, 'messages');
  // const queryMess = query(messagesRef, orderBy('createdAt'), limit(25));

  const messagesRef = collection(firestore, 'test');
  const queryMess = query(messagesRef);

  const [messages, loadingMessages, error] = useCollectionData(queryMess);

  console.log(messages);

  return (
    <>
      <div>
        { messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <div></div>

    </>
  )
};

interface ChatMessageProsp {
  message: DocumentData;
}

const ChatMessage = (props: ChatMessageProsp) => {

  const { text, uid } = props.message 

  return (
    <>
    <h1> test </h1>
    <p>{text}</p>
    </>
  )
}
