import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Events from "../../components/Events";
import BlogRoll from "../../components/BlogRoll";
import {
  Main,
  Section,
  Wrap,
  Flex,
  SEOTitle,
  BorderedHeading,
  ButtonLink
} from "../../common-styles";
import {
  Hill,
  Hero,
  HeroImage,
  Shout,
  Intro,
  Info,
  InfoImage,
  Riding,
  RidingHeading
} from "./styles";

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
        <Hero>
          <HeroImage
            style={{
              backgroundImage: `url(${
                !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image
              })`
            }}
          />
          <Shout>{heading}</Shout>
        </Hero>
      </Wrap>
    </Section>

    <Section color="mute" paddingBottom>
      <Wrap narrow>
        <p>{description}</p>
      </Wrap>
    </Section>

    <Section paddingBottom>
      <Wrap>
        <Intro>
          <Flex width={[50, 50]}>
            <Info>
              <BorderedHeading>Shop Info</BorderedHeading>
              <InfoImage
                style={{
                  backgroundImage: `url(${
                    !!intro.image.childImageSharp
                      ? intro.image.childImageSharp.fluid.src
                      : intro.image
                  })`
                }}
                alt="Horizon Cycling St Joseph, MO Bike Maintenance"
              ></InfoImage>
              <h4>
                {intro.address}
                <br />
                {intro.address_2}
                <br />
                <a href={`tel:${intro.phone}`}>{intro.phone}</a>
              </h4>
              <p>
                <small>
                  {intro.weekdayHours}
                  <br />
                  {intro.weekendHours}
                </small>
              </p>
              <a
                href="https://goo.gl/maps/oA7Xq5ykBLVpSFBm7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Get Directions!</small>
              </a>
            </Info>
            <div>
              <BorderedHeading>Events</BorderedHeading>

              <Events gridItems={intro.events} />
              <a
                href="https://www.facebook.com/pg/horizon.cycling/events/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Find more on Facebook!</small>
              </a>
            </div>
          </Flex>
        </Intro>
      </Wrap>
    </Section>

    <Section color="blue" paddingBottom>
      <Wrap>
        <Riding>
          <Flex width={[26, 74]}>
            <div>
              <RidingHeading>What We're Riding</RidingHeading>
              <p>
                <small>
                  We don’t just work on bikes, we enjoy riding them as well!
                  Check out the bikes we are digging right now..
                </small>
              </p>
              <ButtonLink href="/blog">View Them All</ButtonLink>
            </div>
            <div>
              <BlogRoll />
            </div>
          </Flex>
        </Riding>
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
    address_2: PropTypes.string,
    phone: PropTypes.string,
    weekdayHours: PropTypes.string,
    weekendHours: PropTypes.string,
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
              fluid(maxWidth: 600, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          address
          address_2
          phone
          weekdayHours
          weekendHours
          events {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            date
            link
            description
          }
        }
      }
    }
  }
`;
