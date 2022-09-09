import { useRef } from 'react';
import { User } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import { auth } from '../../helpers/dataBase';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface MessageProps {
  message: DocumentData;
};

interface Sth {
  isUser?: boolean;
};

interface Sth1 {
  urls: string;
}

export const Message = (props: MessageProps) => {

  const user = useRef<User | null>(auth.currentUser);

  const { text, uid, photoURL } = props.message;

  const handleUser = (): boolean => {
    return (
      uid === user.current?.uid
      ? true
      : false
    )
  };

  return (
    <Container isUser={uid === user.current?.uid
      ? true
      : false}>
      <Sth urls={photoURL}/>
      <p>{text}</p>
    </Container>
  );
};

const Container = styled.div<Sth>`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0 0.5rem 0.5rem;
  gap: 0.2rem;

  > p {
    text-align: left;
    vertical-align: middle;
    margin: 0;
    max-width: 40rem;
    padding: 0.8rem;
    border-radius: 1rem;
    background: radial-gradient(circle at 10% 20%, rgb(163, 175, 243) 0%, rgb(220, 182, 232) 100.2%);
  }

  ${({isUser}) => isUser && css`
    flex-direction: row-reverse;
    margin: 0.5rem 0.5rem 0.5rem 0;

    > p {
      background: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    }
  `}
`;

const Sth = styled.div<Sth1>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-image: url(${(props => props.urls)});
`;