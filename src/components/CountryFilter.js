import { useDispatch } from 'react-redux';
import { setSelectedContinent } from '../redux/countriesSlice';

function CountryFilter() {
  const dispatch = useDispatch();

  const handleContinentChange = (event) => {
    dispatch(setSelectedContinent(event.target.value));
  };

  return (
    <div className="country-filter">
      <select id="continent" onChange={handleContinentChange} data-testid="continent-select">
        <option value="">Continent</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default CountryFilter;
