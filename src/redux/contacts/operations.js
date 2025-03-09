import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async ({signal}, thunkAPI) => {
        try {
            const { data } = await api.get("/contacts", {signal});
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const { data } = await api.post("/contacts", contact);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            await api.delete(`/contacts/${id}`);
            return id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const editContact = createAsyncThunk(
    "contacts/editContact",
    async (body, thunkAPI) => {
        try {
            console.log(body);
            
            const { data } = await api.patch(`/contacts/${body.id}`, body);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);