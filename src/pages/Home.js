import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Marquee from '../components/Marquee';
import Login from '../components/Login';

const StyledHome = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = (props) => {
  return (
    <StyledHome id="pd-home">
      <Marquee />
      <Login setUsername={props.callback} username={props.username} />
    </StyledHome>
  );
};

Home.propTypes = {
  callback: PropTypes.func.isRequired
}

export default Home;
