import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { ButtonLink, Flex } from "../../common-styles";
import { PostPreview, PostImage, BlogRollHeading } from "./styles";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Flex width={[50, 50]} wrap="wrap">
        {posts &&
          posts.map(({ node: post }) => {
            return (
              <article key={post.id}>
                <BlogRollHeading>
                  <a href={post.fields.slug}>{post.frontmatter.title}</a>
                </BlogRollHeading>

                {post.frontmatter.featuredimage ? (
                  <PostPreview>
                    <PostImage
                      style={{
                        backgroundImage: `url(${
                          !!post.frontmatter.featuredimage.childImageSharp
                            ? post.frontmatter.featuredimage.childImageSharp
                                .fluid.src
                            : post.frontmatter.featuredimage
                        })`
                      }}
                    ></PostImage>
                  </PostPreview>
                ) : null}

                <p>
                  <small>{post.excerpt}</small>
                </p>

                <ButtonLink href={post.fields.slug}>Read More</ButtonLink>
              </article>
            );
          })}
      </Flex>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "Post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
