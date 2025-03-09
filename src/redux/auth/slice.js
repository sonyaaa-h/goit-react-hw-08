import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    refreshUser,
    registerThunk,
} from "./operations";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const slice = createSlice({
    name: "auth",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(registerThunk.pending, () => {
                console.log("Loading...");
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                console.log("Registration successful:", action.payload);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(registerThunk.rejected, (state, action) => {
                console.log("Error:", action.payload); // Додано лог помилки
            })
            .addCase(loginThunk.pending, () => {
                console.log("Loading...");
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                console.log("Registration successful:", action.payload);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                console.log("Error:", action.payload); // Додано лог помилки
            })
            .addCase(logoutThunk.fulfilled, () => initialState)
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            });
    },
});

export const authReducer = slice.reducer;
