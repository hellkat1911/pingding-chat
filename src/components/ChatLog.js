import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUl = styled.ul`
  margin: 0;
  padding-left: 0;

  & li {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    list-style-type: none;
    padding: 10px 20px;
    width: 100%;
  }

  & .pd-own-msg {
    color: red;
    text-align: left;
  }

  & .pd-oth-msg {
    color: blue;
    text-align: right;
  }
`;

const ChatLog = (props) => {
  return (
    <StyledUl>
      {props.log && props.log.map((item) => (
        <li key={item.id} className={props.currentUser === item.user ? 'pd-own-msg' : 'pd-oth-msg'}>
          {item.user}: {item.msg}
        </li>
      ))}
    </StyledUl>
  );
};

ChatLog.propTypes = {
  log: PropTypes.array.isRequired,
  currentUser: PropTypes.string.isRequired
};

export default ChatLog;