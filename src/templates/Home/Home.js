import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout";
import Events from "../../components/Events";
import BlogRoll from "../../components/BlogRoll";
import { Main, Wrap, SEOTitle, Hill, Hero, Section, Shout } from "./styles";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro
}) => (
  <Main>
    <SEOTitle>{title}</SEOTitle>

    <Section>
      <Hill />

      <Wrap>
        <Hero
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`
          }}
        >
          <Shout>{heading}</Shout>
        </Hero>
      </Wrap>
    </Section>

    <Section color="mute">
      <Wrap narrow>
        <p>{description}</p>
      </Wrap>
    </Section>

    <Section>
      <Wrap>
        <h3>Latest stories</h3>

        <Events gridItems={intro.events} />
        <Link
          to="https://www.facebook.com/pg/horizon.cycling/events/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find more on Facebook!
        </Link>
      </Wrap>
    </Section>

    <Section>
      <Wrap>
        <BlogRoll />

        <Link to="/blog">Read more</Link>
      </Wrap>
    </Section>
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
    markdownRemark(frontmatter: { templateKey: { eq: "Home" } }) {
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
