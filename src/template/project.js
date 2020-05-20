import React, { useState, useEffect } from 'react';
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
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;
  margin: 5vw 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const ModalImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: #424242d9;
  backdrop-filter: blur(30px) contrast(180%);
  button {
    font-size: 2rem;
    background-size: contain;
    background-repeat: no-repeat;
    height: 90%;
    width: 10%;
    position: absolute;
    background-size: 40px;
    z-index: 1;
    background-color: transparent;

    &#close {
      position: absolute;
      height: 40px;
      width: 40px;
      top: 5px;
      left: 5px;
      z-index: 2;
      background-image: url("data:image/svg+xml,%3Csvg fill='%23ffffff' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'%3E%3C/path%3E%3Cpath fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
    }
    &#right {
      right: 0;
      background-position: center right;
      background-image: url("data:image/svg+xml,%3Csvg fill='%23ffffff' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
    }
    &#left {
      left: 0;
      background-position: center left;
      background-image: url("data:image/svg+xml,%3Csvg fill='%23ffffff' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
    }
    &:disabled {
      opacity: 0.2;
    }
  }
  .wrapper {
    height: 90%;
    width: 90%;
  }
  @media (max-width: 600px) {
    button {
      background-size: 30px;
    }
    .wrapper {
      width: 85%;
    }
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
          _id
          fluid(maxWidth: 2000) {
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

const Project = ({ data: { sanityPortfolio: project }, pageContext }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const handleDown = event => {
      switch (event.code) {
        case 'ArrowRight':
          event.preventDefault();
          if (currentImg < project.gallery.length)
            setCurrentImg(currentImg + 1);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (currentImg > 1) setCurrentImg(currentImg - 1);
          break;
        case 'Escape':
          event.preventDefault();
          setCurrentImg(0);
          break;
        default:
          break;
      }
    };
    if (currentImg) {
      window.addEventListener('keydown', handleDown);
    }
    return () => {
      window.removeEventListener('keydown', handleDown);
    };
  });

  const handleClick = index => {
    setCurrentImg(index + 1);
  };
  return (
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

      <GalleryWrapper>
        {project.gallery.map(({ asset }, index) => (
          <a key={asset._id} onClick={() => handleClick(index)}>
            <Image
              fluid={asset.fluid}
              placeholderStyle={{ filter: 'blur(50px)' }}></Image>
          </a>
        ))}
      </GalleryWrapper>

      {/* TODO:  can do better conditioning here ---- */}

      {currentImg > 0 && currentImg <= project.gallery.length && (
        <ModalImage>
          <button
            id="close"
            type="submit"
            onClick={() => setCurrentImg(0)}></button>
          <button
            id="left"
            type="button"
            disabled={!(currentImg > 1)}
            onClick={() => setCurrentImg(currentImg - 1)}></button>

          <div className="wrapper">
            <Image
              style={{ height: '100%' }}
              imgStyle={{ objectFit: 'contain' }}
              fluid={project.gallery[currentImg - 1].asset.fluid}></Image>
          </div>

          <button
            id="right"
            type="button"
            disabled={!(currentImg < project.gallery.length)}
            onClick={() => setCurrentImg(currentImg + 1)}></button>
        </ModalImage>
      )}

      <ProjectNav prev={pageContext.prev} next={pageContext.next} />
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Project;
