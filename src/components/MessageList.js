import React from 'react';
import Message from './Message';
import { Container } from './MessageList.style';

const MessageList = ({ messages, me }) => (
  <Container data-user={me}>
    {messages.map(({ sender, text, timestamp }) => {
      const isMe = sender === me;
      const key = `${isMe ? 'me' : 'user'}-${sender}-${timestamp}`;
      return <Message isMe={isMe} key={key} text={text} sender={sender} />;
    })}
  </Container>
);

export default MessageList;
