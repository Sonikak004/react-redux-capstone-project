import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  filteredCountries: [],
  selectedContinent: '',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
      state.filteredCountries = action.payload;
    },
    setSelectedContinent: (state, action) => {
      state.selectedContinent = action.payload;
      if (action.payload === '') {
        state.filteredCountries = state.countries;
      } else {
        state.filteredCountries = state.countries.filter(
          (country) => country.region === action.payload,
        );
      }
    },
  },
});

export const { setCountries, setSelectedContinent } = countriesSlice.actions;

export default countriesSlice.reducer;
