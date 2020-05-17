import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageContent from '../components/styled/PageContent';

const Content = styled.div`
  display: inherit;
  .profile-image {
    display: inline-block;
    width: 30%;
    height: 550px;
    margin: 5rem 0 0 5rem;
    position: absolute;
    right: 10vw;
    top: 10rem;
  }
  @media (max-width: 1300px) {
    .profile-image {
      display: inline-block;
      width: 100%;
      height: 550px;
      margin: 5rem auto;
      position: unset;
    }
  }
  h3 {
    font-weight: 400;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.6;
  }
  .section {
    margin-top: 5rem;
  }
  ul {
    display: inline-block;
    margin-right: 10rem;
    font-size: 1.4rem;
    line-height: 1.7;
  }
  li {
    font-size: 1rem;
  }
`;

export default function About() {
  const data = useStaticQuery(graphql`
    {
      sanityAboutMe {
        name
        shortDiscription
        longDiscription
        services
        clients
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="About" />
      <PageContent className="container">
        <Content>
          <div className="about">
            <h3>{data.sanityAboutMe.shortDiscription}</h3>
            <p>{data.sanityAboutMe.longDiscription}</p>
            <div className="section">
              <ul id="services">
                <h4>Services</h4>
                {data.sanityAboutMe.services.map(service => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <ul id="clients">
                <h4>Clients</h4>
                {data.sanityAboutMe.clients.map(client => (
                  <li key={client}>{client}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="profile-image">
            <Image
              placeholderStyle={{ filter: 'blur(50px)' }}
              fluid={data.sanityAboutMe.image.asset.fluid}
              style={{ height: '100%' }}></Image>
          </div>
        </Content>
      </PageContent>
    </Layout>
  );
}
