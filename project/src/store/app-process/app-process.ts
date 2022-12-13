import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE, NameSpace } from '../../const';
import { AppProcess } from '../../types/state';

const initialState: AppProcess = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<{ city: string }>) => {
      const { city } = action.payload;

      state.city = city;
    },
    setSortType: (state, action: PayloadAction<{ sortType: string }>) => {
      const { sortType } = action.payload;

      state.sortType = sortType;
    },
  },
});

export const { setCity, setSortType } = appProcess.actions;
