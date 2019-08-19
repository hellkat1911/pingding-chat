import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: #888;
  font-size: 1.8rem;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  max-width: 100%;
  padding: 5px;
  width: 300px;
`;

const StyledButton = styled.button`
  font-size: 1.8rem;
  margin-left: 10px;
`;

const Login = withRouter(({ history, setUsername }) => {

  const [nameCache, setNameCache] = useState('');

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
