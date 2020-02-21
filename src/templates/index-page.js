import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { Tokens } from "../tokens";

import Layout from "../components/Layout";
import Events from "../components/Events";
import BlogRoll from "../components/BlogRoll";

const Main = styled.main`
  width: ${Tokens.wrap.wide};
  margin: auto;
  padding: ${Tokens.gutter};
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro
}) => (
  <Main>
    <h1>{title}</h1>
    {/* <h3>{subheading}</h3> */}
    <section>
      <div
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          width: "100%",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1>{title}</h1>
      </div>

      <h3>{heading}</h3>
      <p>{description}</p>

      <Events gridItems={intro.events} />

      <Link to="/products">Find more on Facebook!</Link>

      <h3>Latest stories</h3>

      <BlogRoll />

      <Link to="/blog">Read more</Link>
    </section>
  </Main>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    address: PropTypes.string,
    phone: PropTypes.string,
    hours: PropTypes.string,
    events: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          address
          phone
          hours
          events {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;
