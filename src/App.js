import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import demo from './demo.jpg';
// Components
import GlobalStyle from './components/GlobalStyle';

const App = () => (
  <div className="app">
    <GlobalStyle />
    <StyledApp>
      <img src={demo} alt="background" />
      <h1>Default React</h1>
      <p>
        A preconfigured React environment. Babel, Webpack, Styled Components and
        ES Linting (Airbnb) all set up and ready to go.
      </p>
    </StyledApp>
  </div>
);

// Styled components
const StyledApp = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    filter: brightness(0.8);
    z-index: -1;
  }

  h1 {
    color: white;
    font-size: 2rem;
    position: absolute;
    left: 0;
    top: 0;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    font-family: sans-serif;
    font-weight: 100;
  }

  p {
    text-align: center;
    font-size: 2rem;
    width: 60%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2rem;
    color: white;
    padding: 6rem;
  }
`;

export default App;
