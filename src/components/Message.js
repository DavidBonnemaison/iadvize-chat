import React from 'react';
import { Container, Bubble } from './Message.style';

const Message = ({ sender, isMe, text, timestamp }) => (
  <Container isMe={isMe}>
    <Bubble isMe={isMe}>{text}</Bubble>
  </Container>
);

export default Message;
