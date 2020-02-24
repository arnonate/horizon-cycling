import styled from "styled-components";
import { Tokens } from "../../tokens";

export const Event = styled.div``;

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

export const ButtonLink = styled.a`
  display: inline-block;
  align-items: center;
  padding: calc(${Tokens.rhythm} / 4) ${Tokens.gutter};
  background-color: ${Tokens.color.gold};
  line-height: 1;
  margin: calc(${Tokens.rhythm} / 2) 0 ${Tokens.rhythm};
  text-transform: uppercase;
  color: ${Tokens.color.white};
  text-decoration: none;

  svg {
    width: ${Tokens.font.size.small};
    height: ${Tokens.font.size.small};
  }

  &:hover {
    color: ${Tokens.color.white};
  }
`;
