import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import Navbar from "../Navbar";
import useSiteMetadata from "../SiteMetadata";
import { withPrefix } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { Tokens } from "../../tokens";

const GlobalStyle = createGlobalStyle`
  html { font-size: 62.5%; }
  body {
    font-family: ${Tokens.font.family.inter.body};
    font-size: ${Tokens.font.size.base};
    line-height: ${Tokens.font.lineHeight.base};
    color: ${Tokens.color.blue};
    margin: 0;

    @supports (font-variation-settings: normal) {
      font-family: ${Tokens.font.family.inter.var};
    }

    * { box-sizing: border-box; }
    p { margin: 0; }
    p + p { text-indent: 1em; }
    small { font-size: ${Tokens.font.size.sm}; }

    a {
      color: ${Tokens.color.blue};
      transition: opacity ${Tokens.transition.timing} ${Tokens.transition.type};

      &:hover {
        opacity: ${Tokens.opacity};
        color: ${Tokens.color.blue};
      }
    }

    h1, h2, h3, h4 { margin: 0 }
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
        <link rel="stylesheet" href={Tokens.font.family.inter.src} />
        <link rel="stylesheet" href={Tokens.font.family.droid.src} />
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
