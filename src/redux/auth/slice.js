import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./operations";

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
            });
    },
});

export const authReducer = slice.reducer;
