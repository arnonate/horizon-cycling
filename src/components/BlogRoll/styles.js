import styled from "styled-components";
import { Tokens } from "../../tokens";

export const BlogRollHeading = styled.h2`
  padding-bottom: ${Tokens.rhythm};
`;

export const PostPreview = styled.article`
  position: relative;
  width: 100%;
  height: ${props =>
    props.single
      ? `calc(${Tokens.rhythm} * 14)`
      : `calc(${Tokens.rhythm} * 10)`};
  margin-bottom: ${Tokens.rhythm};
  transition: visibility ${Tokens.transition.timing} ${Tokens.transition.type};

  &:hover > div.animateVisibility {
    visibility: visible;
  }

  &:hover > div.animateOpacity {
    opacity: ${Tokens.opacity};
  }
`;

export const PostImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: opacity ${Tokens.transition.timing} ${Tokens.transition.type};
`;

export const HoverContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  visibility: hidden;
  transform: translate(-50%, -50%);
  text-align: center;
`;
