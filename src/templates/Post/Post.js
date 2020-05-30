import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
// import styled from "styled-components";

// import { Tokens } from "../../tokens";
import Layout from "../../components/Layout";
import Content, { HTMLContent } from "../../components/Content";
import { Wrap, Section, SEOTitle, BorderedHeading } from "../../common-styles";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <img
        alt={title}
        src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
        style={{ width: "100%", height: "auto" }}
      />

      <Section>
        {helmet || ""}

        <Wrap narrow>
          <SEOTitle>{title}</SEOTitle>
          <BorderedHeading>{title}</BorderedHeading>

          <PostContent className="content" content={content} />
        </Wrap>
      </Section>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.excerpt}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 240)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
