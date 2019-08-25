import React, { useState, useEffect, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: #888;
  font-size: 1.8rem;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  display: block;
  left: 50%;
  margin-bottom: 15px;
  max-width: 100%;
  padding: 5px;
  position: relative;
  transform: translateX(-50%);
  width: 300px;
`;

const StyledButton = styled.button`
  background-color: #00b5dd;
  border: 2px solid #00b5dd;
  box-shadow: 2px 4px 5px #777;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 10px;
  padding: 5px 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #00b5dd;
    transform: scale(1.1);
  }
`;

const Login = withRouter(({ history, setUsername }) => {

  const [nameCache, setNameCache] = useState('');
  const input = createRef()

  useEffect(() => {
    input.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameCache.length > 50) {
      return;
    }

    setUsername(nameCache);
    history.push('/chat');
  };

  return (
    <StyledDiv id="pd-login">
      <p>Enter your username below.</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <StyledInput
          id="username"
          name="username"
          ref={input}
          type="text"
          onChange={(e) => setNameCache(e.target.value)}
        />
        <StyledButton type="submit">Enter</StyledButton>
      </form>
    </StyledDiv>
  )
});

Login.propTypes = {
  setUsername: PropTypes.func.isRequired
};

export default Login;
