import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import img from '../assets/images/not_found.svg';

const Style = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  img {
    display: block;
    margin: 2rem auto;
    width: 80%;
    max-height: 500px;
  }
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }
`;
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Style>
      <h2>Crikey...</h2>
      <img src={img} alt="not found" />
      <p>You just hit the blank canvas.. the sadness.</p>
    </Style>
  </Layout>
);

export default NotFoundPage;
