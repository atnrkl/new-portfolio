import React from "react";
import styled from "styled-components";
import { FiLinkedin, FiGithub } from "react-icons/fi";

import Marque from "./Marque";
import { motion } from "framer-motion";

const defaultNavItemProps = {
  hiddenInMobile: false,
};

const Nav = () => {
  return (
    <StyledNavContainer className="nav">
      <StyledNavItem id="first" {...defaultNavItemProps}>
        <NameWrapper>
          <span id="name">ahmet</span>
          <span id="surname">tanrıkulu</span>
        </NameWrapper>
      </StyledNavItem>
      <StyledNavItem hiddenInMobile={true}>
        <Marque />
      </StyledNavItem>
      <StyledNavItem hiddenInMobile={true}>
        <div className="flex w-full h-full items-center justify-center flex-col">
          <span id="front-end">Front-end</span>
          <motion.span
            whileHover={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            id="egg"
            style={{ color: "#f9f9f9" }}
          >
            /
          </motion.span>
          <span id="back-end">Back-end</span>
        </div>
      </StyledNavItem>
      <StyledNavItem {...defaultNavItemProps}>
        <div className="flex h-full w-full items-center justify-center space-x-3 lg:space-x-5">
          <a href="https://tr.linkedin.com/in/atnrkl-cse" target="_blank">
            <FiLinkedin color="#f9f9f9" />
          </a>
          <a href="https://github.com/atnrkl" target="_blank">
            <FiGithub color="#f9f9f9" />
          </a>
        </div>
      </StyledNavItem>
    </StyledNavContainer>
  );
};

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    font-size: 1.4rem;
    text-shadow: 1px 1px 0px #fb4443, -1px -1px 0px #49abce;
  }
  #name {
    color: #f9f9f9;
    transform: translateX(-20%);
  }
  #surname {
    color: #f9f9f9;

    transform: translateX(20%);
  }
`;

const StyledNavContainer = styled.nav`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const StyledNavItem = styled.div<{ hiddenInMobile: boolean }>`
  height: 5rem;
  border: 1px solid #f9f9f9;
  border-bottom: 0;
  border-left: 0;

  #front-end {
    background: linear-gradient(to right, #40e0d0, #ff8c00, #ff0080);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.2s ease-in-out;
    border-radius: 2px;
    padding: 2px;
    &:hover {
      color: #f9f9f9;
      background-clip: unset;
      -webkit-text-fill-color: unset;
      -webkit-background-clip: unset;
    }
  }
  #back-end {
    color: #f9f9f9;
    transition: all 0.2s ease-in-out;
    &:hover {
      font-weight: 900;
    }
  }

  @media only screen and (max-width: 768px) {
    display: ${(props) => props.hiddenInMobile && "none"};
    &#first {
      border-left: 1px solid #f9f9f9;
    }
  }
`;

export default Nav;
