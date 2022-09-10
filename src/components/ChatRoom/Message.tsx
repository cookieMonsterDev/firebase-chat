import { useRef } from 'react';
import { User } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import { auth } from '../../helpers/dataBase';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface MessageProps {
  message: DocumentData;
}

interface ContainerProps {
  isUser?: boolean;
  photoURL?: string;
}

export const Message = (props: MessageProps) => {
  const user = useRef<User | null>(auth.currentUser);

  const { text, uid, photoURL } = props.message;

  const handleUser = (): boolean => {
    return uid === user.current?.uid ? true : false;
  };

  return (
    <Container isUser={handleUser()}>
      <UserIcon photoURL={photoURL} />
      <p>{text}</p>
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0 0.5rem 0.5rem;
  gap: 0.2rem;

  font-family: Nunito;
  color: rgba(255, 255, 255, 1);

  > p {
    text-align: justify;
    vertical-align: middle;
    margin: 0;
    max-width: 40rem;
    padding: 0.8rem;
    border-radius: 1rem;
    background: radial-gradient(
      circle at 10% 20%,
      rgb(163, 175, 243) 0%,
      rgb(220, 182, 232) 100.2%
    );
  }

  ${({ isUser }) =>
    isUser &&
    css`
      flex-direction: row-reverse;
      margin: 0.5rem 0.5rem 0.5rem 0;

      > p {
        background: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
      }
    `}
`;

const UserIcon = styled.div<ContainerProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.2);
  background-image: url(${(props) => props.photoURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
