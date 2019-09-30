import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #dff6fb;
  border-top: 1px solid #00b5dd;
  bottom: 0;
  display: flex;
  position: fixed;
  width: 100%;
`;

const StyledInput = styled.input`
  border: 1px solid #00b5dd;
  font-family: inherit;
  font-size: 1.8rem;
  margin: 10px;
  min-height: 35px;
  max-width: calc(100% - 140px);
  padding: 5px;
  resize: none;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #dd0047;
  border: none;
  color: #fff;
  font-weight: bold;
  margin: 10px;
  min-height: 35px;
  text-transform: uppercase;
  width: 115px;
`;

const ChatBox = (props) => {
  const [text, setText] = useState('');
  const input = createRef();

  useEffect(() => {
    input.current.focus();
  }, [input]);

  function handleMsg(event) {
    setText(event.target.value);
  }

  function sendMsg(event) {
    event.preventDefault();
    
    props.callback(text);
    setText('');
  }

  return (
    <StyledForm onSubmit={sendMsg}>
      <StyledInput value={text} ref={input} onChange={handleMsg} placeholder="Type your ping here..." />
      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
};

ChatBox.propTypes = {
  callback: PropTypes.func.isRequired
};

export default ChatBox;
