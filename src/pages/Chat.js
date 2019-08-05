import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import ChatLog from '../components/ChatLog';
import ChatBox from '../components/ChatBox';

/* eslint-disable-next-line */
const socket = openSocket('http://localhost:4000');

const StyledDiv = styled.div`
  display: inline-block;
  width: 100%;
`;

const Chat = () => {
  const [msg, setMsg] = useState('');
  const [log, setLog] = useState([]);

  useEffect(() => {
    if (msg) {
      socket.emit('chat message', msg);
    }
  }, [msg]);

  socket.on('chat message', (newMsg) => {
    setLog([...log, { value: newMsg }]);
  });

  return (
    <div className="chat-wrap">
      <StyledDiv>
        <ChatLog log={log} />
      </StyledDiv>
      <ChatBox callback={setMsg} />
    </div>
  )
}

export default Chat;
