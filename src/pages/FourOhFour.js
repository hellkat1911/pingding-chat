import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 10px 15px;
`;

const StyledH1 = styled.h1`
  font-size: 5rem;
`;

const FourOhFour = () => {
  return (
    <StyledDiv>
      <StyledH1>404: The requested page is non-existant or imaginary :(</StyledH1>
      <Link to="/">Go to your home</Link>
    </StyledDiv>
  );
};

export default FourOhFour;
