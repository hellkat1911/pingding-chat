import React from 'react';
import styled from 'styled-components';

// Component code based on
// https://jonsuh.com/hamburgers/

const StyledHamburger = styled.button`
  &::-moz-focus-inner {
    border: none;
  }
  &.hamburger {
    background-color: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    font: inherit;
    display: inline-block;
    margin: 0;
    margin-top: -17px;
    overflow: visible;
    padding: 15px 15px;
    text-transform: none;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
  }
  &.hamburger:hover {
    opacity: 0.7;
  }
  &.hamburger.is-active:hover {
    opacity: 0.7;
  }
  &.hamburger.is-active .hamburger-inner,
  &.hamburger.is-active .hamburger-inner::before,
  &.hamburger.is-active .hamburger-inner::after {
    background-color: #fff;
  }
  & .hamburger-box {
    display: inline-block;
    height: 24px;
    position: relative;
    width: 35px;
  }
  & .hamburger-inner {
    display: block;
    margin-top: -2px;
    top: 50%;
  }
  & .hamburger-inner,
  & .hamburger-inner::before,
  & .hamburger-inner::after {
    background-color: #fff;
    border-radius: 4px;
    height: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    width: 35px;
  }
  & .hamburger-inner::before,
  & .hamburger-inner::after {
    content: "";
    display: block;
  }
  & .hamburger-inner::before {
    top: -10px;
  }
  & .hamburger-inner::after {
    bottom: -10px;
  }
  &.hamburger--spin .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  &.hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  &.hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  &.hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &.hamburger--spin.is-active .hamburger-inner::before {
    opacity: 0;
    top: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  &.hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const Hamburger = (props) => {

  const handleClick = () => {
    const burger = document.getElementById('pd-burger');

    if (burger.classList.contains('is-active')) {
      burger.classList.remove('is-active');
    } else {
      burger.classList.add('is-active');
    }
  };

  return (
    <StyledHamburger id="pd-burger" className="hamburger hamburger--spin" type="button" onClick={handleClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </StyledHamburger>
  );
};

export default Hamburger;
