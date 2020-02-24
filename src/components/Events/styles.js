import styled from "styled-components";
import { Tokens } from "../../tokens";

export const EventImage = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: calc(${Tokens.rhythm} * 10);
  margin-bottom: ${Tokens.rhythm};
`;

export const Date = styled.div`
  color: ${Tokens.color.gold};
  font-weight: ${Tokens.font.weight.bold};
  text-transform: uppercase;
`;

export const EventHeading = styled.h4`
  line-height: ${Tokens.font.lineHeight.base};
  margin: 0;
`;
