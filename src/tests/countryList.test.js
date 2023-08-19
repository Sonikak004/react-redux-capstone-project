import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import CountryList from '../components/CountryList';

describe('CountryList', () => {
  const mockStore = configureStore([]);
  const initialState = {
    countries: {
      filteredCountries: [
        { cca3: 'USA', name: { common: 'United States' }, flags: { png: 'usa.png' } },
        { cca3: 'CAN', name: { common: 'Canada' }, flags: { png: 'canada.png' } },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders the list of countries', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CountryList />
        </MemoryRouter>
      </Provider>,
    );

    const searchInput = screen.getByPlaceholderText('Search by country name');
    const usaCountry = screen.getByText('United States');
    const canadaCountry = screen.getByText('Canada');

    expect(usaCountry).toBeInTheDocument();
    expect(canadaCountry).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'United' } });

    expect(screen.queryByText('Canada')).not.toBeInTheDocument();
    expect(usaCountry).toBeInTheDocument();
  });
});
