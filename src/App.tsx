import React from "react";
import styled from "styled-components";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Marque from "./components/Marque";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#F8F4EA",
          minHeight: "100vh",
        }}
        className="app-container"
      >
        <Nav />
        <Body />
        <Bottom />
        <StyledMarquee>
          <Marque />
        </StyledMarquee>
      </div>
    </div>
  );
};

const StyledMarquee = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
export default App;
