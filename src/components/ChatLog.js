import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 20px 30px 0;
`;

const StyledMsg = styled.div`
  min-height: 85px;
  position:relative;

  & p {
    border-radius: 5px;
    display: inline-block;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    max-width: 50%;
    padding: 15px 30px 20px;
    position: absolute;
    width: auto;

    & span {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }

  & .pd-own-msg {
    background-color: #96baf0;
    left: 0;
    text-align: left;

    & span {
      color: #0022ad;
    }

    &::before {
      background-color: #96baf0;
      bottom: 12px;
      content: '';
      left: -5px;
      padding: 5px;
      position: absolute;
      transform: rotate(45deg);
    }
  }

  & .pd-oth-msg {
    background-color: #77ff59;
    right: 0;
    text-align: right;

    & span {
      color: #028106;
    }

    &::before {
      background-color: #77ff59;
      bottom: 12px;
      content: '';
      padding: 5px;
      position: absolute;
      right: -5px;
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