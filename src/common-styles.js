import styled from "styled-components";
import { Tokens } from "./tokens";

export const Main = styled.main`
  overflow: hidden;
`;

export const Section = styled.section`
  position: relative;
  background-color: ${props =>
    props.color ? `${Tokens.color[props.color]}` : `${Tokens.color.white}`};
  color: ${props =>
    props.color && props.color === "blue"
      ? `${Tokens.color.white}`
      : `${Tokens.color.blue}`};
  padding: ${Tokens.rhythm} 0;
  padding-bottom: ${props =>
    props.paddingBottom ? `calc(${Tokens.rhythm} * 2)` : `${Tokens.rhythm}`};

  a {
    color: ${props =>
      props.color && props.color === "blue" ? `${Tokens.color.white}` : null};

    &:hover {
      color: ${props =>
        props.color && props.color === "blue" ? `${Tokens.color.white}` : null};
    }
  }
`;

export const Wrap = styled.div`
  max-width: ${props =>
    props.narrow ? `${Tokens.wrap.narrow}` : `${Tokens.wrap.wide}`};
  margin: auto;
  padding: 0 ${Tokens.gutter};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.align ? props.align : `initial`)};

  & > *:first-child {
    width: ${props =>
      props.width ? `calc(${props.width[0]}% - ${Tokens.gutter})` : `auto`};
  }

  & > *:last-child {
    width: ${props =>
      props.width ? `calc(${props.width[1]}% - ${Tokens.gutter})` : `auto`};
  }
`;

export const Logo = styled.img`
  width: 300px;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0;

  & > * {
    line-height: ${Tokens.font.size.sm};
  }

  & > * + * {
    margin-left: calc(${Tokens.gutter} / 2);
  }

  img {
    width: ${Tokens.font.size.sm};
    height: ${Tokens.font.size.sm};
  }
`;

export const SEOTitle = styled.h1`
  visibility: hidden;
  font-size: 0;
  margin: 0;
  padding: 0;
  line-height: 0;
`;

export const BorderedHeading = styled.h3`
  display: inline-block;
  padding: calc(${Tokens.rhythm} / 8) ${Tokens.gutter};
  margin: 0 0 ${Tokens.rhythm};
  font-family: ${Tokens.font.family.droid.slab};
  font-size: ${Tokens.font.size.base};
  border: ${Tokens.border.size} solid;
`;

export const ButtonLink = styled.a`
  display: inline-block;
  align-items: center;
  padding: calc(${Tokens.rhythm} / 3) calc(${Tokens.gutter} / 2);
  background-color: ${Tokens.color.gold};
  line-height: ${Tokens.font.size.sm};
  margin: calc(${Tokens.rhythm} / 2) 0 ${Tokens.rhythm};
  font-size: ${Tokens.font.size.sm};
  text-transform: uppercase;
  color: ${Tokens.color.white};
  text-decoration: none;
  border-radius: 2px;

  svg {
    width: ${Tokens.font.size.small};
    height: ${Tokens.font.size.small};
  }

  &:hover {
    color: ${Tokens.color.white};
  }
`;
