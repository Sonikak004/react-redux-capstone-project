import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryFilter from './CountryFilter';
import '../App.css';

function CountryList() {
  const countries = useSelector((state) => state.countries.filteredCountries);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(
    (country) => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="country-div">
      <div className="con-div">
        <div className="input-div">
          <input
            type="text"
            placeholder="Search by country name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <CountryFilter />
      </div>
      <ul className="country-list">
        {filteredCountries.map((country) => (
          <li key={country.cca3} className="country-item">
            <Link to={`/details/${country.cca3}`} className="country-card">
              <img
                src={country.flags.png}
                alt={`${country.name.common} Flag`}
                className="country-flag"
              />
              {country.name.common}
              <div className="arrow">
                <i className="fas fa-arrow-right forward-icon" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
