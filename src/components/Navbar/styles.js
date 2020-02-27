import styled from "styled-components";
import { Tokens } from "../../tokens";

export const Header = styled.header`
  background-color: ${Tokens.color.blue};
`;

export const Nav = styled.nav`
  padding: ${Tokens.rhythm} 0;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  & > * {
    color: ${Tokens.color.white};
    font-size: ${Tokens.font.size.sm};
    padding: 0 calc(${Tokens.gutter} / 2);

    &.active {
      border: ${Tokens.border.size} solid;
    }
  }

  a {
    color: ${Tokens.color.white};
    text-decoration: none;

    &:hover {
      color: ${Tokens.color.white};
    }

    &.active:hover {
      opacity: 1;
    }
  }

  @media (max-width: ${Tokens.break}) {
    display: none;
  }
`;
