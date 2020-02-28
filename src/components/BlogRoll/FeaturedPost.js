import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { ButtonLink, Flex } from "../../common-styles";
import { PostPreview, PostImage, HoverContent } from "./styles";

class FeaturedPost extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Flex width={[100]}>
        {posts &&
          posts.map(({ node: post }) => {
            return (
              post.frontmatter.featuredpost && (
                <div key={post.id}>
                  {post.frontmatter.featuredimage ? (
                    <PostPreview single>
                      <PostImage
                        className="animateOpacity"
                        style={{
                          backgroundImage: `url(${
                            !!post.frontmatter.featuredimage.childImageSharp
                              ? post.frontmatter.featuredimage.childImageSharp
                                  .fluid.src
                              : post.frontmatter.featuredimage
                          })`
                        }}
                      ></PostImage>
                      <HoverContent className="animateVisibility">
                        <h2>{post.frontmatter.title}</h2>
                        <ButtonLink href={post.fields.slug}>
                          Check it Out !!
                        </ButtonLink>
                      </HoverContent>
                    </PostPreview>
                  ) : null}
                </div>
              )
            );
          })}
      </Flex>
    );
  }
}

FeaturedPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedPostQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "Post" }
              featuredpost: { eq: true }
            }
          }
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
    render={(data, count) => <FeaturedPost data={data} count={count} />}
  />
);
