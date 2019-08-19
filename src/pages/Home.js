import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Login from '../components/Login';

const StyledHome = styled.div`
  padding: 20px;
  text-align: center;

  & #pd-marquee {
    margin-bottom: 40px;

    & h1 {
      font-size: 5rem;
      margin-bottom: 10px;
    }

    & p {
      font-size: 1.8rem;
      margin: 0;
    }
  }
`;

const Home = (props) => {
  return (
    <StyledHome id="pd-home">
      <div id="pd-marquee">
        <h1>PingDing</h1>
        <p>The web-based chat app for everybody.</p>
      </div>
      <Login setUsername={props.callback} />
    </StyledHome>
  );
};

Home.propTypes = {
  callback: PropTypes.func.isRequired
}

export default Home;
