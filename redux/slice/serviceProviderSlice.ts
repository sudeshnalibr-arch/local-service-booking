import AxiosInstance from "@/api/axios/axios";
import { PROVIDER_ENDPOINTS } from "@/api/endpoints/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type ServiceProvider = {
  id: number;
  name: string;
  description: string;
  image: string;

  service_type_name: string;
  service_type: number;

  fees: number;
  rating: string;

  location: string;
  experience: number;

  availability: string[];

  is_active: boolean;
  created_at: string;

  slug?: string;
};

type ServicesState = {
  data: ServiceProvider[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  isFiltered: boolean; // 👈 KEY
};


const initialState: ServicesState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
  isFiltered: false,
};


type FetchParams = {
  service_type?: number;
  location?: string;
  min_fee?: number;
  max_fee?: number;
  availability?: string[];
  page?: number;
};


export const fetchProviders = createAsyncThunk<
  ServiceProvider[],
  FetchParams,
  { rejectValue: string }
>(
  "providers/fetchProviders",
  async (params, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.get(
        PROVIDER_ENDPOINTS.LIST,
        {params,}
      );

      console.log("API RESPONSE 👉", res.data); // DEBUG
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const filterProviders = createAsyncThunk<
  ServiceProvider[],
  FetchParams,
  { rejectValue: string }
>("providers/filterProviders", async (params, { rejectWithValue }) => {
  try {
    const res = await AxiosInstance.get(PROVIDER_ENDPOINTS.FILTER, {
      params,
    });

    // ✅ SAFELY extract array
    const providers =
      Array.isArray(res.data)
        ? res.data
        : res.data.providers || [];

    return providers;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || err.message
    );
  }
});


const handleFulfilled = (
  state: ServicesState,
  action: any
) => {
  state.loading = false;

  if (state.page > 1) {
    state.data.push(...action.payload);
  } else {
    state.data = action.payload;
  }

  state.hasMore = action.payload.length > 0;
};

const providerSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
  resetProviders(state) {
    state.data = [];
    state.page = 1;
    state.hasMore = true;
    state.error = null;
    state.isFiltered = false;
  },
  setFiltered(state, action) {
    state.isFiltered = action.payload;
    state.page = 1;
    state.data = [];
    state.hasMore = true;
  },
  nextPage(state) {
    state.page += 1;
  },
},

  extraReducers: (builder) => {
  builder
    .addCase(fetchProviders.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProviders.fulfilled, handleFulfilled)
    .addCase(fetchProviders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Error";
    })

    .addCase(filterProviders.pending, (state) => {
      state.loading = true;
    })
    .addCase(filterProviders.fulfilled, handleFulfilled)
    .addCase(filterProviders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Error";
    });
}

  });

  export const { setFiltered, resetProviders, nextPage } = providerSlice.actions;
  export default providerSlice.reducer;

  // const filters = [
//   { id:"1", key: "plumber", label: "Plumber", icon: "/images/teamservice/icons/map_plumber.png" },
//   { id:"2", key: "electrician", label: "Electrician", icon: "/images/teamservice/icons/map_electrician.png" },
//   { id:"3", key: "cleaner", label: "Cleaner", icon: "/images/teamservice/icons/mdi_vacuum-cleaner.png" },
//   { id:"4", key: "carpenter", label: "Carpenter", icon: "/images/teamservice/icons/material-symbols-light_carpenter.png" },
//   { id:"5", key: "mechanic", label: "Mechanic", icon: "/images/teamservice/icons/Vector (1).png" },
//   { id:"6", key: "gardener", label: "Gardener", icon: "/images/teamservice/icons/Gardener.png" },
//   { id:"7", key: "ac-technician", label: "AC Technician", icon: "/images/teamservice/icons/hugeicons_smart-ac.png" },
//   { id:"8", key: "beauty-spa", label: "Beauty & Spa", icon: "/images/teamservice/icons/map_electrician.png" },
//   { id:"9", key: "painter", label: "Painter", icon: "/images/teamservice/icons/map_painter.png" },
// ];