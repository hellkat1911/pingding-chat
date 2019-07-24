import React from 'react'
import styled from 'styled-components';
import ChatPage from '../pages/ChatPage';

const StyledMain = styled.main`
  background-color: #ccc;
  min-height: 100vh;
  width: 100%;
`;

const Page = () => {
  return (
    <StyledMain className="main">
      <ChatPage />
    </StyledMain>
  )
}

export default Page;
