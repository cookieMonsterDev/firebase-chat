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

export const Message = (props: MessageProps) => {

  const user = useRef<User | null>(auth.currentUser);

  const handleUser = (): boolean => {
    return (
      props.message.uid === user.current?.uid
      ? true
      : false
    )
  }

  return (
    <Container isUser={props.message.uid === user.current?.uid
      ? true
      : false}>
      <a>{props.message.text}</a>
    </Container>
  );
};

const Container = styled.div<Sth>`
  height: 10rem;
  text-align: left;
  > a {
    margin: 0;
  }

  ${({isUser}) => isUser && css`
    text-align: right;
  `}
`