import React from 'react';
import { auth } from '../../helpers/dataBase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  if (!user) {
    return (
      <div>
        <button onClick={googleSignIn}>Sign in</button>
      </div>
    );
  } else
    return (
      <div>
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    );
};
