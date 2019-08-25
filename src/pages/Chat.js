import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import openSocket from 'socket.io-client';
import uuid from 'uuid';
import styled from 'styled-components';
import ChatLog from '../components/ChatLog';
import ChatBox from '../components/ChatBox';
import settings from '../static/settings';

/* eslint-disable-next-line */
const socket = openSocket(settings.chat_uri);

const StyledDiv = styled.div`
  display: inline-block;
  margin-bottom: 55px;
  width: 100%;
`;

const Chat = (props) => {
  const [msg, setMsg] = useState('');
  const [log, setLog] = useState([]);

  function addToLog(id, user, msg) {
    setLog([...log, { id, user, msg }]);
  }

  useEffect(() => {
    if (!socket.username) {
      socket.emit('add user', props.username);
    }

    if (msg) {
      const id = uuid.v4();
      socket.emit('chat message', { id, msg });
    }
  }, [props.username, msg]);

  socket.on('new message', ({id, username, message}) => {
    addToLog(id, username, message);
  });

  return (
    <div id="pd-chat">
      <StyledDiv>
        <ChatLog log={log} currentUser={props.username} />
      </StyledDiv>
      <ChatBox callback={setMsg} />
    </div>
  );
};

Chat.propTypes = {
  username: PropTypes.string
};

export default Chat;
