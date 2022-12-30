import React from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
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
            <img
              className="w-full h-full object-cover object-top p-0 border-none"
              src={item?.img}
              alt=""
            />
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
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  }
`;
const StyledImageContainer = styled.div`
  min-height: 20rem;

  border: 1px solid #2b3a55;
  @media only screen and (max-width: 768px) {
    min-height: 15rem;
  }
`;

const StyledTextContainer = styled.div`
  min-height: 20rem;
  border: 1px solid #2b3a55;
  border-left: 0;
  @media only screen and (max-width: 768px) {
    min-height: 10rem;
    border-left: 1px solid #2b3a55;
    border-top: 0;
  }
`;

export default Body;
