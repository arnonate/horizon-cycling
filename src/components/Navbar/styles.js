import styled from "styled-components";
import { Tokens } from "../../tokens";

export const Nav = styled.nav`
  padding-top: ${Tokens.rhythm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  & > * {
    font-size: ${Tokens.font.size.sm};
    padding: 0 calc(${Tokens.gutter} / 2);

    &.active {
      border: ${Tokens.border.size} solid;
    }
  }

  a {
    text-decoration: none;
  }
`;
