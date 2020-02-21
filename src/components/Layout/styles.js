import styled from "styled-components";
import { Tokens } from "../../tokens";

export const Wrapper = styled.div`
  @import url(${Tokens.font.family.inter.src});
  @import url(${Tokens.font.family.droid.src});

  font-family: ${Tokens.font.family.inter.body};
  font-size: ${Tokens.font.size.base};
  line-height: ${Tokens.font.lineHeight.base};
  color: ${Tokens.color.blue};

  * {
    box-sizing: border-box;
  }

  a {
    color: ${Tokens.color.blue};
    transition: opacity 200ms linear;

    &:hover {
      opacity: 0.5;
      color: ${Tokens.color.blue};
    }
  }

  @supports (font-variation-settings: normal) {
    font-family: ${Tokens.font.family.inter.var};
  }
`;
