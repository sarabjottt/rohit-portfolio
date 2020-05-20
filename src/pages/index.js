import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Gallery from '../components/Gallery';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="" />

    <Gallery data={data}></Gallery>
  </Layout>
);
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
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};
export default IndexPage;
