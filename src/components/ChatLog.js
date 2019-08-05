import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  margin: 0;
  padding-left: 0;

  & li {
    background-color: #000656;
    color: #fff;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    list-style-type: none;
    padding: 10px 20px;
    width: 100%;
  }
  & li:nth-of-type(2n) {
    background-color: #858585;
    color: #000;
  }
`;

const ChatLog = (props) => {

  return (
    <StyledUl>
      {props.log && props.log.map((item, index) => (
        <li key={`msg-${index}`}>
          {item.value}
        </li>
      ))}
    </StyledUl>
  );
};

export default ChatLog;