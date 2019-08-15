import React from 'react'
import styled from 'styled-components';
import AppRouter from './AppRouter';

const StyledMain = styled.main`
  background-color: #fff;
`;

const App = () => {
  return (
    <StyledMain className="main">
      <AppRouter />
    </StyledMain>
  )
}

export default App;