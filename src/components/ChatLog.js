import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 20px 30px 0;
`;

const StyledMsg = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  & p {
    border-radius: 5px;
    display: inline-block;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    margin: 5px;
    max-width: calc(50% - 20px);
    padding: 10px 30px 15px 20px;
    position: relative;
    width: auto;

    & span {
      display: inline-block;
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 2px;
    }
  }

  & .pd-own-msg {
    background-color: #bfecf6;
    border: 1px solid #00b5dd;

    & span {
      color: #0046dd;
      font-weight: bold;
    }

    &::before {
      background-color: #bfecf6;
      border-bottom: 1px solid #00b5dd;
      border-left: 1px solid #00b5dd;
      bottom: 12px;
      content: '';
      left: -6px;
      padding: 5px;
      position: absolute;
      transform: rotate(45deg);
    }
  }

  & .pd-oth-msg {
    background-color: #8cea60;
    border: 1px solid #246e00;
    margin-left: auto;

    & span {
      color: #1b5300;
    }

    &::before {
      background-color: #8cea60;
      border-right: 1px solid #246e00;
      border-top: 1px solid #246e00;
      bottom: 12px;
      content: '';
      padding: 5px;
      position: absolute;
      right: -6px;
      transform: rotate(45deg);
    }
  }
`;

const ChatLog = (props) => {
  return (
    <StyledContainer>
      {props.log && props.log.map((item) => (
        <React.Fragment key={item.id}>
          <StyledMsg>
            <p className={props.currentUser === item.user ? 'pd-own-msg' : 'pd-oth-msg'}>
              <span>{item.user}</span>
              <br />
              {item.msg}
            </p>
          </StyledMsg>
        </React.Fragment>
      ))}
    </StyledContainer>
  );
};

ChatLog.propTypes = {
  log: PropTypes.array.isRequired,
  currentUser: PropTypes.string.isRequired
};

export default ChatLog;