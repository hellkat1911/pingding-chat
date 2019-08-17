import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.div`
  padding: 20px;
`;

const Home = () => {
  return (
    <StyledHome id="pd-home">
      <p>This is Pingding home</p>
      <Link to="/chat">Enter Pingding chat</Link>
    </StyledHome>
  );
};

export default Home;
