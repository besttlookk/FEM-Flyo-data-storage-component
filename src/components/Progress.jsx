import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--col-dark);
    opacity: 0.5;
    border-radius: 100px;
  }
`;

const FillBar = styled.div`
  position: absolute;
  inset: 5px;
  /* margin: 5px; */
  background-image: linear-gradient(
    120deg,
    hsl(6, 100%, 80%),
    hsl(335, 100%, 65%)
  );
  border-radius: 100px;
  z-index: 10;
  width: 81.5%;

  &::after {
    content: "";
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: var(--col-light);
  }
`;

const Limit = styled.span`
  position: absolute;
  bottom: -35px;
  color: var(--col-light);
  font-weight: 700;
  font-size: 1.8rem;
`;

const Min = styled(Limit)`
  left: 0;
`;

const Max = styled(Limit)`
  right: 0;
`;

const Progress = () => {
  return (
    <Wrapper>
      <FillBar />
      <Min>0 GB</Min>
      <Max>1000 GB</Max>
    </Wrapper>
  );
};

export default Progress;
