import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import styled from "styled-components";
import { Tokens } from "../tokens";

const Wrapper = styled.div`
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

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <Wrapper>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Wrapper>
  );
};

export default TemplateWrapper;
