import React from "react";

import Layout from "../../components/Layout";
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

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Section>
          <Wrap>
            <SEOTitle>
              Horizon Cycling - What We're Riding - St. Joseph, MO
            </SEOTitle>
            <BorderedHeading>What We're Riding</BorderedHeading>

            <BlogRoll />
          </Wrap>
        </Section>
      </Layout>
    );
  }
}
