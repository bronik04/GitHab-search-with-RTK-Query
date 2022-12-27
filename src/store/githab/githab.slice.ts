import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GithabState {
  favorites: string[];
}

const initialState: GithabState = {
  favorites: JSON.parse(localStorage.getItem('rfk') ?? '[]')
};

export const githabSlice = createSlice({
  name: "githab",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
      localStorage.setItem('rfk', JSON.stringify(state.favorites));
    },
    removeFromFavorite(state, action: PayloadAction<string>) {
        state.favorites = state.favorites.filter(f => f !== action.payload);
        localStorage.setItem('rfk', JSON.stringify(state.favorites));
    },
  },
});

export const githabActions = githabSlice.actions
export const githabReducer = githabSlice.reducer
