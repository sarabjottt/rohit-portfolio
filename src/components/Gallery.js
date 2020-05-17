import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryStyle = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 100px;
    padding: 0;
  }
  p {
    font-size: 1rem;
    margin: 10px 0 0;
    text-align: left;
    font-weight: 400;
    letter-spacing: 1px;
  }
  @media (max-width: 600px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Gallery({ data }) {
  return (
    <GalleryStyle className="container">
      <ul>
        {data.allSanityPortfolio.edges.map(({ node: project }) => (
          <li key={project.slug.current}>
            <Link to={`projects/${project.slug.current}`}>
              <Image
                placeholderStyle={{ filter: 'blur(50px)' }}
                style={{ height: '550px' }}
                fluid={project.gallery[0].asset.fluid}></Image>
              <p>{project.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </GalleryStyle>
  );
}
Gallery.propTypes = {
  data: PropTypes.object.isRequired,
};
