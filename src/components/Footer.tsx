import styled from "styled-components";
import media from "../styles/media";

const FooterEl = styled.footer`
  color: var(--col-light);
  width: 90vw;
  max-width: 1280px;
  margin-top: 10rem;
  text-align: center;
  font-size: 1.6rem;

  a {
    color: var(--grad-stop);
    font-weight: 700;
  }

  ${media.tablet} {
    display: none;
  }
`;

const Footer = () => {
  return (
    <FooterEl>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/besttlookk"
        target="_blank"
        rel="noreferrer"
      >
        Prabhash Ranjan
      </a>
      .
    </FooterEl>
  );
};

export default Footer;
