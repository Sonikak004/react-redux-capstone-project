import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CountryList from './components/CountryList';
import Header from './components/head';
import { setCountries } from './redux/countriesSlice';
import Details from './components/DetailsPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCountries(data));
      })
      .catch(() => {
        // Handle error here if needed
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        {/* Move the Header component outside of Routes */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <CountryList />
              </>
            )}
          />
          <Route path="/details/:countryId" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
