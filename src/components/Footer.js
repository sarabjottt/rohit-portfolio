import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: var(--lightGrey);
  height: 300px;
  margin-top: 10rem;
  .grid {
    align-items: center;
    display: grid;
    font-size: 1rem;
    padding: 3rem 3rem;
    height: 100%;
  }
  .footer-logo {
    font-size: 2em;
  }
  .social-links {
    justify-self: start;
  }
  .social-links a {
    margin-right: 3rem;
  }
  p {
    margin: 0;
  }
  span {
    display: block;
    margin-top: 1rem;
    color: grey;
    font-size: 0.8em;
  }
  @media (max-width: 600px) {
    .grid {
      gap: 2rem;
      padding: 3rem 2rem;
    }
    .social-links a:not(:last-child) {
      margin-bottom: 1rem;
      display: block;
    }
  }
  @media (min-width: 1300px) {
    .grid {
      padding: 3rem 5rem;
    }
    .social-links {
      justify-self: end;
    }
  }
`;

function Footer({ data }) {
  return (
    <FooterStyle>
      <div className="container grid">
        <div className="footer-logo">{data.sanitySiteData.title}</div>

        <div className="social-links">
          <a
            href={data.sanityContact.social.instagram}
            target="_blank"
            rel="noopener noreferrer">
            Follow on <u>Instagram</u>
          </a>
          <a href={`mailto:${data.sanityContact.email}`}>
            {data.sanityContact.email}
          </a>
        </div>

        <p>
          {data.sanitySiteData.title} \ Copyright © {new Date().getFullYear()}
          <span>
            <a
              href="https://dev.sujjon.in"
              target="_blank"
              rel="noopener noreferrer">
              Design by Sarabjot
            </a>
          </span>
        </p>
      </div>
    </FooterStyle>
  );
}

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Footer;
