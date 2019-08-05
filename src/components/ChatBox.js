import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #ccc;
  bottom: 0;
  display: flex;
  position: fixed;
  width: 100%;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.8rem;
  margin: 10px;
  min-height: 35px;
  max-width: calc(100% - 140px);
  padding: 0;
  resize: none;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #000;
  border: 2px outset ThreeDDarkShadow;
  color: #fff;
  font-weight: bold;
  margin: 10px;
  min-height: 35px;
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
      <StyledForm onSubmit={sendMsg}>
        <StyledInput value={msg} onChange={handleMsg} placeholder="Type message here..." />
        <StyledButton type="submit">Send</StyledButton>
      </StyledForm>
    </>
  )
}

export default ChatBox;
