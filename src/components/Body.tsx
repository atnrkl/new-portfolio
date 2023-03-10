import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { AnimatePresence, motion } from "framer-motion";

const Body = () => {
  const item = useAppSelector((state) => state.appSlice.item);

  return (
    <StyledBodyContainer className="body-container">
      <StyledImageContainer className="body-image">
        <AnimatePresence>
          <motion.div
            key={item.title}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center p-0 border-none justify-center"
          >
            <a className="w-full h-full" target="_blank" href={item.link}>
              {item.img.split(".")[1] == "mp4" ? (
                <video
                  muted
                  autoPlay={true}
                  loop={true}
                  controls
                  className="w-full h-full object-cover object-top p-0 border-none"
                  src={item?.img}
                />
              ) : (
                <img
                  className="w-full h-full object-cover object-top p-0 border-none"
                  src={item?.img}
                  alt=""
                />
              )}
            </a>
          </motion.div>
        </AnimatePresence>
      </StyledImageContainer>
      <StyledTextContainer className="body-text">
        <AnimatePresence>
          <motion.div
            key={item.title}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col p-1 items-start justify-end"
          >
            <h2>{item.description}</h2>
          </motion.div>
        </AnimatePresence>
      </StyledTextContainer>
    </StyledBodyContainer>
  );
};

const StyledBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  color: #f9f9f9;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  }
`;
const StyledImageContainer = styled.div`
  height: 30rem;

  border: 1px solid #f9f9f9;
  @media only screen and (max-width: 768px) {
    height: 12rem;
  }
`;

const StyledTextContainer = styled.div`
  height: 30rem;
  border: 1px solid #f9f9f9;
  border-left: 0;
  @media only screen and (max-width: 768px) {
    height: 8rem;
    border-left: 1px solid #f9f9f9;
    border-top: 0;
  }
`;

export default Body;
