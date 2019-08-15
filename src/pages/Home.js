import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>This is Pingding home</p>
      <Link to="/chat">Enter Pingding chat {`:)`}</Link>
    </div>
  );
};

export default Home;
