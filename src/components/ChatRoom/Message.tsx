import React from 'react'
import { DocumentData } from 'firebase/firestore';

interface MessageProps {
  message: DocumentData;
}

export const Message = (props: MessageProps) => {
  return (
    <div>
      <p>{props.message.text}</p>
    </div>
  )
}
