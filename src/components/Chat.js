import React from 'react';
import debounce from '../utils/debounce';
import MessageList from './MessageList';
import { withStore } from '../context';
import { Container, Title, Form, Input, Button, Send, IsWriting } from './Chat.style';
import send from '../img/send.png';

class Chat extends React.Component {
  state = {
    text: '',
    correspondantWriting: false
  };

  static getDerivedStateFromProps(props, state) {
    const { fromUser, store } = props;
    if (store.writing[fromUser]) {
      return { correspondantWriting: true };
    }
    return state;
  }

  componentDidMount() {
    this._scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    const { fromUser, store } = this.props;
    if (prevProps.store.writing[fromUser] === true && store.writing[fromUser] === false) {
      this.setState({ correspondantWriting: false });
    }
    this.historyChanged = prevProps.store.messages.length !== store.messages.length;
    if (this.historyChanged) {
      this._scrollToBottom();
    }
  }

  _scrollToBottom = () => {
    const element = document.querySelector(`[data-user="${this.props.user}"]`);
    element.scrollTop = element.scrollHeight;
  };

  _notWriting = () => {
    const { store, user } = this.props;
    store.dispatch.stoppedWriting({ user });
  };

  _debounceNotWriting = debounce(this._notWriting, 1000);

  _setText = e => {
    const { store, user } = this.props;
    this.setState({ text: e.target.value });
    store.dispatch.isWriting({ user });
    this._debounceNotWriting();
  };

  _onSubmit = e => {
    e.preventDefault();
    const { user, store } = this.props;
    const { text } = this.state;
    const timestamp = Date.now();
    store.dispatch.submitMessage({ sender: user, text, timestamp });
    this.setState({ text: '' });
    this._notWriting();
  };

  render() {
    const { user, fromUser, store } = this.props;
    const { messages } = store;
    const { text, correspondantWriting } = this.state;
    const disabled = text === '';
    return (
      <Container>
        <Title>Conversation with {fromUser}</Title>
        <MessageList messages={messages} me={user} />
        <IsWriting isWriting={correspondantWriting}>{fromUser} is writing...</IsWriting>
        <Form onSubmit={this._onSubmit}>
          <Input type="text" onChange={this._setText} value={text} />
          <Button disabled={disabled}>
            <Send src={send} alt="Send" disabled={disabled} />
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withStore(Chat);
