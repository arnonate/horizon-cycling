import styled from "styled-components";
import { Tokens } from "../../tokens";

export const Hero = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: top center;
  position: relative;

  @media (min-width: ${Tokens.break}) {
    padding-bottom: calc(${Tokens.rhythm} * 4);
  }
`;

export const Shout = styled.h2`
  background-color: ${Tokens.color.blue};
  padding: ${Tokens.gutter} calc(${Tokens.gutter} * 2);
  color: ${Tokens.color.white};
  font-family: ${Tokens.font.family.droid.slab};
  font-size: ${Tokens.font.size.lg};
  line-height: ${Tokens.font.lineHeight.lg};
  text-transform: uppercase;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: ${Tokens.break}) {
    width: 40%;
    left: auto;
    right: 0;
    bottom: calc(${Tokens.gutter} * 2);
    font-size: ${Tokens.font.size.xl};
    line-height: ${Tokens.font.lineHeight.lg};
  }
`;

export const Hill = styled.div`
  position: absolute;
  content: "";
  top: 55%;
  left: 50%;
  width: 200vw;
  height: 600px;
  background-color: ${Tokens.color.mute};
  transform: rotate(-8deg) translate(-50%, -50%);
`;

export const Intro = styled.div`
  padding-top: ${Tokens.rhythm};
`;

export const Info = styled.div`
  h4 {
    margin: 0 0 calc(${Tokens.rhythm} / 4);
    line-height: ${Tokens.rhythm};
    font-size: ${Tokens.font.size.base};
  }

  p {
    padding-bottom: ${Tokens.rhythm};
  }
`;

export const InfoImage = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: calc(${Tokens.rhythm} * 10);
  margin-bottom: ${Tokens.rhythm};
`;

export const Riding = styled.div`
  padding-top: calc(${Tokens.rhythm} * 2);
`;

export const RidingHeading = styled.h2`
  padding: ${Tokens.rhythm} ${Tokens.gutter};
  margin: 0 0 ${Tokens.rhythm};
  font-family: ${Tokens.font.family.droid.slab};
  font-size: ${Tokens.font.size.xl};
  line-height: calc(${Tokens.rhythm} * 2);
  text-transform: uppercase;
  border: calc(${Tokens.border.size} * 2) solid;
`;
