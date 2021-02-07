import React, { useEffect, useState } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  initListings,
  addListing,
  deleteListing,
} from './redux/listingsReducer';
// Images
import demo from './demo.jpg';
// Components
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);

  useEffect(() => {
    dispatch(initListings());
  }, [dispatch]);

  const removeListing = (listingName) => {
    dispatch(deleteListing(listingName));
  };

  return (
    <div className="app">
      <GlobalStyle />
      <StyledApp>
        <img src={demo} alt="background" />
        <h1>Preconfigured React</h1>
        <p>
          A preconfigured React environment. Babel, Webpack, Styled Components,
          ES Linting (Airbnb), Redux and Redux Dev Tools all set up and ready to
          go. A simple form is setup to demo Redux.
        </p>
        <StyledTable>
          <h2>Demo Redux data</h2>
          <table>
            {listings.map((listing) => (
              <tr>
                <td>{listing.name}</td>
                <td>{listing.age}</td>
                <td>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={() => removeListing(listing.name)}
                    onKeyDown={() => {}}
                  >
                    (X)
                  </span>
                </td>
              </tr>
            ))}
          </table>
        </StyledTable>
        <SubmitListing />
      </StyledApp>
    </div>
  );
};

// Styled components
const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
    margin: 2rem;
  }
`;

const StyledTable = styled.div`
  table {
    color: white;
    background: rgba(0, 0, 0, 0.2);
    font-size: 2rem;
  }

  td {
    border: 1px solid white;
    padding: 1rem;
  }
`;

// Components
const SubmitListing = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addListing(name, age));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={({ target }) => setAge(target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
