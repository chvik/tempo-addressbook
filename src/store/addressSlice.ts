import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Address, AddressState } from "../types/address";

const initialState: AddressState = {
  addresses: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "555-0123",
      address: "123 Main St, City, Country",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "555-0124",
      address: "456 Oak Ave, Town, Country",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-0125",
      address: "789 Pine Rd, Village, Country",
    },
  ],
};

const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<Omit<Address, "id">>) => {
      state.addresses.push({
        ...action.payload,
        id: state.addresses.length + 1,
      });
    },
    updateAddress: (state, action: PayloadAction<Address>) => {
      const index = state.addresses.findIndex((addr) => addr.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    deleteAddress: (state, action: PayloadAction<number>) => {
      state.addresses = state.addresses.filter((addr) => addr.id !== action.payload);
    },
  },
});

export const { addAddress, updateAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
