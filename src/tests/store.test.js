import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../redux/countriesSlice';
import store from '../redux/store';

describe('Redux store configuration', () => {
  it('should create a store with the correct reducer', () => {
    const testStore = configureStore({
      reducer: {
        countries: countriesReducer,
      },
    });

    expect(store.getState()).toEqual(testStore.getState());
  });
});
