import styled from "styled-components";
import { Tokens } from "../../tokens";

export const Wrapper = styled.div`
  @import url(${Tokens.font.family.src});

  font-family: ${Tokens.font.family.body};
  font-size: ${Tokens.font.size.base};
  line-height: ${Tokens.font.lineHeight.base};
  color: ${Tokens.color.blue};

  * {
    box-sizing: border-box;
  }

  a {
    color: ${Tokens.color.blue};
    text-decoration: none;
    transition: opacity 200ms linear;

    &:hover {
      opacity: 0.5;
      color: ${Tokens.color.blue};
    }
  }

  @supports (font-variation-settings: normal) {
    font-family: ${Tokens.font.family.var};
  }
`;
