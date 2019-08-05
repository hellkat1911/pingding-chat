import React from 'react'
import styled from 'styled-components';
import Router from './ChatRouter';

const StyledMain = styled.main`
  background-color: #fff;
`;

const Page = () => {
  return (
    <StyledMain className="main">
      <Router />
    </StyledMain>
  )
}

export default Page;
