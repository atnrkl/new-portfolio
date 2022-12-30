import React from "react";
import styled from "styled-components";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Marquee from "react-fast-marquee";
//*import logos
import tsLogo from "../assets/logos/ts.png";
import jsLogo from "../assets/logos/js.png";
import blockchainLogo from "../assets/logos/blockchain.png";
import cssLogo from "../assets/logos/css.png";
import gitLogo from "../assets/logos/git.png";
import htmlLogo from "../assets/logos/html.png";
import linuxLogo from "../assets/logos/linux.png";
import mongodbLogo from "../assets/logos/mongodb.png";
import nftLogo from "../assets/logos/nft.png";
import nodejsLogo from "../assets/logos/nodejs.png";
import pythonLogo from "../assets/logos/python.png";
import reactLogo from "../assets/logos/react.png";
import redisLogo from "../assets/logos/redis.png";
import sassLogo from "../assets/logos/sass.png";
import styledLogo from "../assets/logos/styled-components.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import reduxLogo from "../assets/logos/redux.png";
import Marque from "./Marque";

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
          <span id="egg">/</span>
          <span id="back-end">Back-end</span>
        </div>
      </StyledNavItem>
      <StyledNavItem {...defaultNavItemProps}>
        <div className="flex h-full w-full items-center justify-center space-x-3 lg:space-x-5">
          <FiLinkedin />
          <FiGithub />
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
    transform: translateX(-20%);
  }
  #surname {
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
  border: 1px solid #2b3a55;
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
    transition: all 0.2s ease-in-out;
    &:hover {
      font-weight: 900;
    }
  }

  @media only screen and (max-width: 768px) {
    display: ${(props) => props.hiddenInMobile && "none"};
    &#first {
      border-left: 1px solid #2b3a55;
    }
  }
`;

export default Nav;