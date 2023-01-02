import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
//*redux import
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { decrement, increment } from "../redux/reducers/appSlice";

const Bottom = () => {
  const item = useAppSelector((state) => state.appSlice.item);
  const dispatch = useAppDispatch();

  return (
    <StyledBottomContainer className="bottom-container">
      <StyledBottomDetails className="bottom-details">
        <StyledDetailWrapper>
          <motion.div
            key={item.title}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex-col flex items-start justify-center"
          >
            <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
            <h1 className="text-xl lg:text-2xl">{item.shadowTitle}</h1>
          </motion.div>
        </StyledDetailWrapper>
      </StyledBottomDetails>
      <StyledBottomNav id="back-nav">
        <div className="flex h-full w-full items-center justify-center">
          <HiOutlineArrowLeft
            className="cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out"
            size={32}
            color={"#f9f9f9"}
            onClick={() => {
              dispatch(decrement());
            }}
          />
        </div>
      </StyledBottomNav>
      <StyledBottomNav id="next-nav">
        <div className="flex h-full w-full items-center justify-center">
          <HiOutlineArrowRight
            className="cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out"
            size={32}
            color={"#f9f9f9"}
            onClick={() => {
              dispatch(increment());
            }}
          />
        </div>
      </StyledBottomNav>
    </StyledBottomContainer>
  );
};

const StyledDetailWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 10rem;
  pointer-events: none;
  color: #f9f9f9;
`;

const StyledBottomContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 12.9rem;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledBottomDetails = styled.div`
  border: solid 1px #f9f9f9;
  border-top: 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledBottomNav = styled.div`
  border-right: 1px solid #f9f9f9;
  border-bottom: 1px solid #f9f9f9;
  min-height: 5rem;

  @media only screen and (max-width: 768px) {
    width: 50%;
    &#back-nav {
      border-left: 1px solid #f9f9f9;
    }
  }
`;

export default Bottom;
