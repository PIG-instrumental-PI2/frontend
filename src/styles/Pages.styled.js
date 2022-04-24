import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 72px;
`;

export const Container = styled.div`
  width: 80vw;
  max-width: 920px;
  min-width: 260px;
  margin: auto;
  margin-top: 2em;

  @media screen and (max-width: 920px) {
    ${Heading} {
      font-size: 48px;
    }
  }
`; 