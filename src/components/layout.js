import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import GlobalStyle from './styled/GlobalStyles';
import Footer from './Footer';

const Main = styled.main`
  padding: 0 5rem;
  @media (max-width: 600px) {
    padding: 0 1.5rem;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      sanitySiteData {
        title
      }
      sanityContact {
        shortDiscription
        email
        phone
        social {
          facebook
          instagram
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header data={data} />
      <Main className="container">{children}</Main>
      <Footer data={data} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
