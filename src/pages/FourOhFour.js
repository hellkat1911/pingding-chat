import React from 'react';
import { Link } from 'react-router-dom';
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
      <StyledH1>404: The requested page is non-existant, non-functional, or imaginary :(</StyledH1>
      <Link to="/">Go to a real page (Home)</Link>
    </StyledDiv>
  );
};

export default FourOhFour;
