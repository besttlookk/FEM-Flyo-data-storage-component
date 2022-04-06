import React from "react";
import styled from "styled-components";
import { Box } from "../styles/shared";

const IconEl = styled(Box)`
  width: 6rem;
  height: 6rem;
  border-radius: 12px;
  background-color: var(--col-dark);
  border: 4px solid transparent;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: transparent;
    border-color: var(--col-dark);
  }

  img {
    transform: scale(1.3);
  }
`;
const Icon = ({ name }: { name: string }) => {
  return (
    <IconEl>
      <img alt={`${name} icon`} src={require(`../images/icon-${name}.svg`)} />
    </IconEl>
  );
};

export default Icon;
