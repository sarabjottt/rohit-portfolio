import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  a {
    border: none;
    &:hover {
      border: none;
    }
  }
  h5 {
    border-bottom: 2px solid var(--lightGrey);
    margin: 2rem;
    &:hover {
      border-color: var(--black);
    }
  }
  @media (max-width: 900px) {
    justify-content: space-evenly;
  }
`;
export default function ProjectNav({ prev, next }) {
  return (
    <NavStyle>
      {prev && (
        <Link to={`projects/${prev.node.slug.current}`}>
          <h5>&lt; {prev.node.title}</h5>
        </Link>
      )}
      {next && (
        <Link to={`projects/${next.node.slug.current}`}>
          <h5>{next.node.title} &gt;</h5>
        </Link>
      )}
    </NavStyle>
  );
}
