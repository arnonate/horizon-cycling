import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import Navbar from "../Navbar";
import useSiteMetadata from "../SiteMetadata";
import { withPrefix } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { Tokens } from "../../tokens";

const GlobalStyle = createGlobalStyle`
  @import url(${Tokens.font.family.inter.src});
  @import url(${Tokens.font.family.droid.src});

  body {
    font-family: ${Tokens.font.family.inter.body};
    font-size: ${Tokens.font.size.base};
    line-height: ${Tokens.font.lineHeight.base};
    color: ${Tokens.color.blue};
    margin: 0;

    @supports (font-variation-settings: normal) {
      font-family: ${Tokens.font.family.inter.var};
    }

    * {
      box-sizing: border-box;
    }

    p {
      padding-bottom: ${Tokens.rhythm};
    }

    a {
      color: ${Tokens.color.blue};
      transition: opacity 200ms linear;

      &:hover {
        opacity: 0.5;
        color: ${Tokens.color.blue};
      }
    }
  }
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyle />
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
    </>
  );
};

export default TemplateWrapper;
