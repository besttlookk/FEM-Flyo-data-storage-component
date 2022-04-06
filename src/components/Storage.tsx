import styled from "styled-components";
import media from "../styles/media";
import { Box } from "../styles/shared";
import Progress from "./Progress";

const StorageEl = styled(Box)`
  position: relative;
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
  background-color: var(--col-blue);
  border-radius: 8px;
  padding: 4rem 4rem 10rem;

  p {
    font-size: 1.5rem;
    color: var(--col-light);

    span {
      font-weight: 700;
      color: var(--col-light);
    }

    ${media.tablet} {
      font-size: 1.8rem;
    }
  }

  ${media.tablet} {
    flex: 1;
    padding: 4rem 4rem 7.2rem;
    height: fit-content;
    align-items: flex-start;
  }
`;

const StorageLeft = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transform: translate(-50%, 50%);
  border-radius: 16px;
  background-color: var(--col-light);
  padding: 1.6rem 3rem;
  font-weight: 700;
  width: max-content;
  z-index: 50;

  .number {
    font-size: 5rem;
    color: var(--col-dark);
    align-items: start;
  }

  .text {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: var(--col-gray);
  }

  ${media.tablet} {
    left: initial;
    bottom: initial;
    top: 0;
    right: 8%;
    transform: translateY(-50%);

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateY(50%);
      border-right: 16px solid var(--col-light);
      border-top: 16px solid transparent;
      border-bottom: 16px solid transparent;
      z-index: 60;
    }
  }
`;

const Storage = () => {
  return (
    <StorageEl>
      <p>
        You've used <span>815 GB</span> of your storage
      </p>
      <Progress />

      <StorageLeft>
        <span className="number">185</span>{" "}
        <span className="text">GB LEFT</span>
      </StorageLeft>
    </StorageEl>
  );
};

export default Storage;
