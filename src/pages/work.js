import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Gallery from '../components/Gallery';

export default function Work({ data }) {
  return (
    <Layout>
      <SEO title="Work" />
      <Gallery data={data} />
    </Layout>
  );
}
export const query = graphql`
  {
    allSanityPortfolio(sort: { fields: _createdAt, order: DESC }) {
      totalCount
      edges {
        node {
          title
          slug {
            current
          }
          discription
          gallery {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
Work.propTypes = {
  data: PropTypes.object.isRequired,
};
