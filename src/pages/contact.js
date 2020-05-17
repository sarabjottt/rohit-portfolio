import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageContent from '../components/styled/PageContent';

const Content = styled.div`
  form {
    font-size: 1rem;
    max-width: 700px;
    fieldset {
      border: none;
      padding: 0;
      margin: 0 0 2rem;
      legend {
        margin-bottom: 1rem;
        padding: 0;
      }
      label {
        width: 48%;
        float: left;
        margin-right: 2%;
        font-size: 0.8em;
      }
      input {
        margin: 0 0 1rem;
      }
    }
    input,
    textarea,
    button {
      font: inherit;
      width: 100%;
      height: 40px;
      background: #efefef;
      border: 1px solid var(--lightGrey);
      margin-bottom: 2rem;
      margin-top: 1rem;
      padding: 12px;
      font-size: 1rem;
    }
    textarea {
      resize: vertical;
      min-height: 100px;
    }
    button {
    width: 140px;
    padding: 10px 0;
    box-sizing: content-box;
    background: var(--white);
    color: var(--black);
    border: 2px solid var(--black);

    cursor: pointer;
    &:hover{
      background: var(--black);
    color: var(--white);
    }
}
    }
  }
  .section {
    margin-top: 5rem;
  }
  ul {
    display: inline-block;
    margin-right: 10rem;
    font-size: 1.4rem;
    line-height: 2;
  }
  li {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

export default function Contact() {
  const {
    sanityContact: {
      email,
      phone,
      shortDiscription,
      social: { instagram, facebook },
    },
  } = useStaticQuery(graphql`
    {
      sanityContact {
        email
        phone
        shortDiscription
        social {
          instagram
          facebook
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Contact" />
      <PageContent>
        <Content>
          <h3>{shortDiscription}</h3>
          <div className="email-form">
            <form
              name="contact"
              method="post"
              data-netlify-honeypot="bot-field"
              data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <fieldset>
                <legend>Name</legend>
                <label htmlFor="firstName">
                  <input
                    type="text"
                    required
                    name="First Name"
                    id="firstName"
                  />
                  <span>First Name</span>
                </label>
                <label htmlFor="lastName">
                  <input type="text" required name="Last Name" id="lastName" />
                  <span>Last Name</span>
                </label>
              </fieldset>
              <br />
              <label htmlFor="email">
                Your Email
                <input type="email" required name="Email" id="email" />
              </label>
              <br />
              <label htmlFor="content">
                Message
                <textarea name="Message" required id="content"></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="section">
            <ul id="contact">
              <h4>Contact</h4>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
            </ul>
            <ul id="follow">
              <h4>Follow</h4>
              <li>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </Content>
      </PageContent>
    </Layout>
  );
}
