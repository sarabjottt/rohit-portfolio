import styled from 'styled-components';

const PageContent = styled.section`
  padding: 0 2.5rem;
  width: 100%;
  display: inline-block;
  max-width: var(--maxWidth);
  margin: 0 auto;
  @media (min-width: 1300px) {
    padding: 0 5rem;
    width: 50%;
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
export default PageContent;
