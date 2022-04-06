const customMediaQuery = (minWidth: number) =>
  `@media(min-width: ${minWidth}px)`;

const media = {
  tablet: customMediaQuery(900),
};

export default media;
