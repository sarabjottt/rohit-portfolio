import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import instaLogo from '../assets/images/instagram.svg';

const NavBar = styled.header`
  width: 100%;
  margin-bottom: 3rem !important;
  padding: 1.45rem 5%;
  font-size: 0.6em;
  display: flex;
  align-items: center;
  /* ----- Experimental ----- */
  /* position: sticky;
  top: 0;
  backdrop-filter: blur(30px) saturate(180%);
  z-index: 1;
  background-color: #ffffff8c; */
  .site-logo {
    font-weight: 400;
    letter-spacing: 2px;
  }
  nav {
    text-align: right;
    margin-left: auto;
  }
  ul {
    display: inline-flex;
    align-items: center;
  }
  li {
    margin-left: 3vw;
  }
  a.active {
    border-bottom: 1px solid var(--black);
  }
  @media (max-width: 900px) {
    nav {
      display: flex;
      width: 100%;
      font-size: 1.5rem;
      height: 100vh;
      position: fixed;
      background: #ffffff99;
      top: 0;
      left: 0;
      justify-content: center;
      z-index: 1;
      visibility: hidden;
      opacity: 0;
      transition: all 0.2s ease-in;
      &.active {
        visibility: visible;
        opacity: 1;
        backdrop-filter: blur(30px) saturate(180%);
      }
      ul {
        justify-content: center;
        flex-direction: column;
      }
      li {
        margin: 0;
        opacity: 0;
        transform: translateY(20px);
      }
      li:not(:first-child) {
        margin: 8vh 0 0 0;
      }
      &.active {
        li {
          opacity: 1;
          transform: translateY(0px);
          transition: opacity 0.5s, transform 0.5s cubic-bezier(0, 0, 0.2, 1);
          &:nth-child(1) {
            transition-delay: 0.1s;
          }
          &:nth-child(2) {
            transition-delay: 0.2s;
          }
          &:nth-child(3) {
            transition-delay: 0.3s;
          }
          &:nth-child(4) {
            transition-delay: 0.4s;
          }
        }
      }
    }
  }
`;

const Button = styled.button`
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: absolute;
    right: 0;
    padding: 20px;
    z-index: 3;
    span {
      display: block;
      transform: translateZ(0);
      transition: all 0.4s ease;
      margin-bottom: 6px;
      background: var(--grey);
      height: 2px;
      width: 25px;
    }
    &.active {
      position: fixed;
      span {
        &:first-child {
          transform: rotate(45deg) translate3d(3px, 8px, 0);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          transform: rotate(-45deg) translate3d(3px, -8px, 0);
        }
      }
    }
  }
`;

const Header = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavBar className="container">
      <div className="site-logo">
        <Link to="/">{data.sanitySiteData.title}</Link>
      </div>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        type="button"
        className={isOpen ? 'burger active' : 'burger'}>
        <span />
        <span />
        <span />
      </Button>
      <nav className={isOpen ? 'nav-header active' : 'nav-header'}>
        <ul>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/work" activeClassName="active">
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
          <li>
            <a
              href={data.sanityContact.social.instagram}
              target="_blank"
              rel="noopener noreferrer">
              <img width="30px" src={instaLogo} alt="instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </NavBar>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

Header.defaultProps = {
  data: ``,
};

export default Header;
