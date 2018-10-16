import styled from 'styled-components';

export const Container = styled.div`
  text-align: ${p => (p.isMe ? 'right' : 'left')};
`;

export const Bubble = styled.div`
  text-align: left;
  max-width: 90%;
  display: inline-block;
  background-color: ${p => (p.isMe ? '#3498db' : '#27ae60')};
  color: white;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 20px;
`;
