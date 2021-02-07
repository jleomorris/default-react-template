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
        <h1>Ready to React</h1>
        <div className="content-container">
          <p>
            A preconfigured React environment. Babel, Webpack, Styled
            Components, ES Linting (Airbnb), Redux and Redux Dev Tools all set
            up and ready to go. A simple form is setup to demo Redux.
          </p>
          <StyledTable>
            <h2>Demo Redux data</h2>
            <table order="1">
              <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Delete</td>
              </tr>
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
                      X
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          </StyledTable>
          <StyledSubmitListing>
            <SubmitListing />
          </StyledSubmitListing>
        </div>
      </StyledApp>
    </div>
  );
};

// Components
const SubmitListing = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addListing(name, age));
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Age"
        onChange={({ target }) => setAge(target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// Styled components
const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;

  .content-container {
    width: 70%;
    border-radius: 2rem;
    /* background: rgba(256, 256, 256, 0.1); */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    margin: 4rem 0rem;
  }

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
    /* position: absolute;
    left: 0;
    top: 0; */
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    font-family: sans-serif;
    font-weight: 100;
  }

  p {
    font-size: 2rem;
    width: 80%;
    color: #5a5a5a;
    margin: 2rem;
  }
`;

const StyledTable = styled.div`
  h2 {
    color: #5a5a5a;
    text-align: center;
    margin: 2rem 0rem;
  }

  table {
    color: white;
    background: rgba(0, 0, 0, 0.4);
    font-size: 1.5rem;
    margin: 1rem 0rem;
  }

  td {
    border: 1px solid white;
    padding: 1rem;
    text-align: center;
  }
`;

const StyledSubmitListing = styled.div`
  form {
    input {
      border-radius: 0.5rem;
      padding: 1rem 0.5rem;
      border: none;
      margin: 1rem 0.5rem;
    }

    button {
      padding: 0.5rem 1rem;
    }
  }
`;

export default App;
