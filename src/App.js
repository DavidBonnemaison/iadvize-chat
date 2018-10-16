import React from 'react';
import { Store } from './context';
import Chat from './components/Chat';
import { Container } from './App.style';

const users = ['Jane', 'John'];

class App extends React.Component {
  state = {
    messages: [
      {
        sender: 'Jane',
        text: 'Coucou John',
        timestamp: Date.now()
      },
      {
        sender: 'John',
        text: 'Salut Jane',
        timestamp: Date.now()
      }
    ],
    writing: {}
  };

  dispatch = {
    submitMessage: ({ sender, text, timestamp }) =>
      this.setState(prevState => ({
        ...prevState,
        messages: prevState.messages.concat({ sender, text, timestamp })
      })),
    isWriting: ({ user }) =>
      this.setState(prevState => ({
        ...prevState,
        writing: { ...prevState.writing, [user]: true }
      })),
    stoppedWriting: ({ user }) =>
      this.setState(prevState => ({
        ...prevState,
        writing: { ...prevState.writing, [user]: false }
      }))
  };

  render() {
    return (
      <Store.Provider value={{ ...this.state, dispatch: this.dispatch }}>
        <Container>
          {users.map(user => (
            <Chat key={`user-${user}`} fromUser={users.find(u => u !== user)} user={user} />
          ))}
        </Container>
      </Store.Provider>
    );
  }
}

export default App;
