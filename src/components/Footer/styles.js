import styled from "styled-components";
import { Tokens } from "../../tokens";

export const StyledFooter = styled.footer`
  @media (max-width: ${Tokens.break}) {
    text-align: center;
  }
`;

export const Divider = styled.div`
  padding-top: ${Tokens.rhythm};
  border-top: 3px solid ${Tokens.color.white};
`;

export const Copyright = styled.p`
  padding-top: ${Tokens.rhythm};
  text-align: center;
`;
