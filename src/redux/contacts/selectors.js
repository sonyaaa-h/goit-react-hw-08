import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/slice";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) =>
        contacts.filter(
            (contact) =>
                contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                contact.number.includes(filter) // Додаємо перевірку номера
        )
);
