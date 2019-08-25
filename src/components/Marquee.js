import React from 'react';
import styled from 'styled-components';

const StyledMarquee = styled.div`
  margin-bottom: 40px;

  & h1 {
    font-family: 'Exo', Arial, sans-serif;
    font-size: 5rem;
    font-weight: 900;
    margin-bottom: 10px;
  }

  & p {
    font-size: 1.8rem;
    margin: 0;
  }
`;

const BlueSpan = styled.span`
  color: #00b5dd;
`;

const RedSpan = styled.span`
  color: #dd0047;
`;

const Marquee = () => {
  return (
    <StyledMarquee id="pd-marquee">
      <h1>
        <BlueSpan>P</BlueSpan>ing<RedSpan>d</RedSpan>ing
      </h1>
      <p>The web-based chat app for everybody.</p>
    </StyledMarquee>
  );
};

export default Marquee;
