import React from 'react';
// Styled components
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <div className="content-container">
        <p>
          A preconfigured React environment. With the following ready to go:
        </p>
        <ul>
          <li>Babel, Webpack</li>
          <li>ES Linting (Airbnb)</li>
          <li>Styled Components</li>
          <li>Redux and Redux Dev Tools</li>
          <li>React Router</li>
        </ul>
      </div>
    </StyledHome>
  );
};

// Styled components
const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;

  .content-container {
    width: 60%;
    border-radius: 2rem;
    background: rgba(256, 256, 256, 0.2);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    margin: 4rem 0rem;
  }

  p {
    font-size: 2rem;
    width: 80%;
    color: black;
    margin: 2rem;
  }

  ul {
    color: black;
    font-size: 1.5rem;
    list-style: circle;
    font-weight: 700;
  }
`;

export default Home;
