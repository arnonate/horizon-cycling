import styled from "styled-components";
import { Tokens } from "../../tokens";

export const Main = styled.main``;

export const Wrap = styled.div`
  max-width: ${props =>
    props.narrow ? `${Tokens.wrap.narrow}` : `${Tokens.wrap.wide}`};
  margin: auto;
`;

export const SEOTitle = styled.h1`
  visibility: hidden;
  font-size: 0;
  margin: 0;
  padding: 0;
  line-height: 0;
`;

export const Section = styled.section`
  position: relative;
  background-color: ${props =>
    props.color ? `${Tokens.color[props.color]}` : `${Tokens.color.white}`};
  padding: ${Tokens.rhythm} 0;
  padding-bottom: ${props =>
    props.paddingBottom ? `calc(${Tokens.rhythm} * 2)` : `${Tokens.rhythm}`};
`;

export const Hero = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: top center;
  position: relative;
`;

export const Shout = styled.h2`
  background-color: ${Tokens.color.blue};
  padding: calc(${Tokens.gutter} * 2);
  color: ${Tokens.color.white};
  font-family: ${Tokens.font.family.droid.slab};
  font-size: ${Tokens.font.size.xl};
  line-height: ${Tokens.font.lineHeight.lg};
  text-transform: uppercase;
  width: 40%;
  position: absolute;
  right: 0;
  bottom: calc(${Tokens.gutter} * 2);
`;

export const Hill = styled.div`
  position: absolute;
  content: "";
  top: 45%;
  left: 50%;
  width: 200vw;
  height: 450px;
  background-color: ${Tokens.color.mute};
  transform: rotate(-8deg) translate(-50%, -50%);
`;

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${Tokens.rhythm};

  & > * {
    width: calc(50% - ${Tokens.gutter});
  }
`;

export const BorderedHeading = styled.h3`
  display: inline-block;
  padding: calc(${Tokens.rhythm} / 8) ${Tokens.gutter};
  margin: 0 0 ${Tokens.rhythm};
  font-family: ${Tokens.font.family.droid.slab};
  font-size: ${Tokens.font.size.base};
  border: ${Tokens.border.size} solid;
`;

export const Info = styled.div`
  h4 {
    width: 50%;
    margin: 0 0 calc(${Tokens.rhythm} / 4);
    line-height: ${Tokens.rhythm};
    font-size: ${Tokens.font.size.base};
  }

  p {
    width: 40%;
  }
`;

export const InfoImage = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: calc(${Tokens.rhythm} * 10);
  margin-bottom: ${Tokens.rhythm};
`;
