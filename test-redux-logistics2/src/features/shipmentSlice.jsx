import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ============================
   1. Async Thunk (API Call)
============================= */

// Fake API (using JSONPlaceholder)
export const fetchShipments = createAsyncThunk(
  "shipments/fetchShipments",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = await response.json();

    // Transform API data into shipment format
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      status: "Pending",
    }));
  }
);

/* ============================
   2. Slice
============================= */

const shipmentSlice = createSlice({
  name: "shipments",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    addShipment: (state, action) => {
      state.list.push(action.payload);
    },

    deleteShipment: (state, action) => {
      state.list = state.list.filter(
        (shipment) => shipment.id !== action.payload
      );
    },

    updateShipmentStatus: (state, action) => {
      const shipment = state.list.find(
        (s) => s.id === action.payload.id
      );
      if (shipment) {
        shipment.status = action.payload.status;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchShipments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShipments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchShipments.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to load shipments";
      });
  },
});

export const {
  addShipment,
  deleteShipment,
  updateShipmentStatus,
} = shipmentSlice.actions;

export default shipmentSlice.reducer;