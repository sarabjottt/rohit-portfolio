import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageContent from '../components/styled/PageContent';
import ProjectNav from '../components/ProjectNav';

const PageMeta = styled(PageContent)`
  span {
    position: absolute;
    z-index: -1;
    right: 3%;
    top: 25%;
    font-size: 20vw;
    opacity: 0.2;
    line-height: 1;
    user-select: none;
  }
  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;
  margin: 5vw 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const query = graphql`
  query($slug: String) {
    sanityPortfolio(slug: { current: { eq: $slug } }) {
      title
      discription
      year
      keywords
      gallery {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
          metadata {
            palette {
              lightMuted {
                background
              }
            }
          }
        }
      }
    }
  }
`;
const Project = ({ data: { sanityPortfolio: project }, pageContext }) => (
  <Layout>
    <SEO
      title={project.title}
      keywords={project.keywords}
      description={project.discription}
    />
    <PageMeta>
      <h2>{project.title}</h2>
      <span
        style={{
          color: `${project.gallery[0].asset.metadata.palette.lightMuted.background}`,
        }}>
        {project.year}
      </span>
      <p>{project.discription}</p>
    </PageMeta>
    <Gallery>
      {project.gallery.map(({ asset }) => (
        <Image
          fluid={asset.fluid}
          placeholderStyle={{ filter: 'blur(50px)' }}></Image>
      ))}
    </Gallery>
    <ProjectNav prev={pageContext.prev} next={pageContext.next} />
  </Layout>
);

Project.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Project;
