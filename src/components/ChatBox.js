import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  bottom: 0;
  font-family: inherit;
  font-size: 1.8rem;
  margin: 10px;
  min-height: 35px;
  max-width: 100%;
  padding: 0;
  position: fixed;
  resize: none;
  width: calc(100% - 140px);
`;

const StyledButton = styled.button`
  background-color: #000;
  border: 2px outset ThreeDDarkShadow;
  bottom: 0;
  color: #fff;
  font-weight: bold;
  margin: 10px;
  min-height: 35px;
  position: fixed;
  right: 0;
  text-transform: uppercase;
  width: 115px;
`;

const ChatBox = (props) => {
  const [msg, setMsg] = useState('');

  function handleMsg(e) {
    setMsg(e.target.value);
  }

  function sendMsg(e) {
    e.preventDefault();
    props.callback(msg);
    setMsg('');
  }

  return (
    <>
      <form onSubmit={sendMsg}>
        <StyledInput value={msg} onChange={handleMsg} placeholder="Type message here..." />
        <StyledButton type="submit">Send</StyledButton>
      </form>
    </>
  )
}

export default ChatBox;
