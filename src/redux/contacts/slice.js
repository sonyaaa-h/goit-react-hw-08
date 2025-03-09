import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, editContact, fetchContacts } from "./operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const handlePending = (state) => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (contact) => contact.id !== action.payload
                );
            })
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(editContact.fulfilled, (state, action) => {
                const contact = state.items.find(
                    (contact) => contact.id === action.payload.id
                );
                contact.name = action.payload.name;
                contact.phone = action.payload.phone;
            })
            .addCase(editContact.pending, handlePending)
            .addCase(editContact.rejected, handleRejected);
    },
});

export const contactsReducer = contactsSlice.reducer;