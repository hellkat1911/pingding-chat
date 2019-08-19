import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: #00b5dd;
  box-shadow: 0px 2px 5px #666;
  color: #fff;
  height: 70px;
  padding: 20px;
  position: sticky;
  width: 100%;
  z-index: 2;

  & a {
    color: #fff;
    display: inline-block;
    text-decoration: none;

    &:visited {
      color: #fff;
    }
  }

  & h2 {
    margin: 0;
  }
`;

const TopNav = (props) => {
  return (
    <StyledNav id="pd-nav">
      <Link to="/">
        <h2>PingDing</h2>
      </Link>
    </StyledNav>
  );
};

export default TopNav;
