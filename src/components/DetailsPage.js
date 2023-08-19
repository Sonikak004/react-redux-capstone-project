import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function findCountryByCca3(filteredCountries, cca3) {
  return filteredCountries.find((country) => country.cca3 === cca3);
}

function Details() {
  const { countryId } = useParams();
  const filteredCountries = useSelector((state) => state.countries.filteredCountries);
  const country = findCountryByCca3(filteredCountries, countryId);

  if (!country) {
    return <div className="error">Country not found.</div>;
  }

  const {
    capital, population, flags, languages, currencies,
  } = country;

  return (
    <div className="country-details">
      <Link to="/" className="back-link">
        &lt; Back
      </Link>
      <div className="details-top-div">
        <h2 data-testid="country-name">{country.name.common}</h2>
        <img src={flags.png} alt={`Flag of ${country.name.common}`} className="country-flag" data-testid="country-flag" />
      </div>
      <div className="details-grid">
        <p className="details-p">
          Capital:
          {' '}
          {capital}
        </p>
        <p className="details-p">
          Population:
          {' '}
          {population}
        </p>
        <p className="details-p">
          Languages:
          {' '}
          {Object.values(languages).join(', ')}
        </p>
        <p className="details-span">
          Currencies:
          {' '}
          {' '}
          {Object.values(currencies).map((currency) => (
            <span key={currency.code}>{currency.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Details;
