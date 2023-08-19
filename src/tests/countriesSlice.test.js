import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CountryFilter from '../components/CountryFilter'; // Import the actual path
import { setSelectedContinent } from '../redux/countriesSlice';

describe('CountryFilter component', () => {
  it('should dispatch setSelectedContinent action when selecting a continent', () => {
    const initialState = {
      countries: {
        selectedContinent: '',
      },
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <CountryFilter />
      </Provider>,
    );

    const continentSelect = getByTestId('continent-select'); // Use getByTestId with a unique identifier
    fireEvent.change(continentSelect, { target: { value: 'Europe' } });

    const actions = store.getActions();
    expect(actions).toContainEqual(setSelectedContinent('Europe'));
  });
});
