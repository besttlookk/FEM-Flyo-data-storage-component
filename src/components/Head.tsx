import styled from "styled-components";
import LogoIcon from "../images/logo.svg";
import media from "../styles/media";
import Icon from "./Icon";

const HeadEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: var(--col-blue);
  border-radius: 8px 100px 8px 8px;
  padding: 5rem;
  width: 100%;

  ${media.tablet} {
    width: 40%;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 2rem;
`;

const Logo = styled.div`
  height: 5rem;

  img {
    height: 100%;
  }
`;
const Head = () => {
  return (
    <HeadEl>
      <Logo>
        <img alt="logo" src={LogoIcon} />
      </Logo>

      <Icons>
        <Icon name="document" />
        <Icon name="folder" />
        <Icon name="upload" />
      </Icons>
    </HeadEl>
  );
};

export default Head;
