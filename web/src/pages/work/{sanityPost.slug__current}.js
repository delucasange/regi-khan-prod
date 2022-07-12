import { graphql } from "gatsby";
import BlogPost from "../../components/blog-post";
import React from "react";
import GraphQLErrorList from "../../components/graphql-error-list";
import Layout from "../../containers/layout";
import Container from "../../components/container";
import Seo from "../../components/seo";
import { toPlainText } from "../../lib/helpers";
import Next from "../../components/next";

export const query = graphql`
  query BlogPost($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      client
      slug {
        current
      }
      videos {
        url
        title
      }
      stories {
        url
        title
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;
const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;

  return (
    <Layout>
      {errors && <Seo title="GraphQL Error" />}
      {post && (
        <Seo
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
            
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}

    <Next />
    </Layout>
  );
};

export default BlogPostTemplate;
