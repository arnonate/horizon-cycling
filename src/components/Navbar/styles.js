import styled from "styled-components";
import { Tokens } from "../../tokens";

export const Nav = styled.nav`
  max-width: ${Tokens.wrap.wide};
  margin: auto;
  padding: ${Tokens.rhythm} ${Tokens.gutter} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 300px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  & > * {
    font-size: ${Tokens.font.size.sm};
    padding: 0 ${Tokens.gutter};

    &.active {
      border: ${Tokens.border.size} solid;
    }
  }

  a {
    text-decoration: none;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0;

  & > * {
    line-height: ${Tokens.font.size.sm};
  }

  & > * + * {
    margin-left: ${Tokens.gutter};
  }

  img {
    width: ${Tokens.font.size.sm};
    height: ${Tokens.font.size.sm};
  }
`;
