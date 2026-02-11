import AxiosInstance, { BaseURL } from "@/api/axios/axios";
import { PROVIDER_ENDPOINTS } from "@/api/endpoints/endPoints";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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
};

type ProvidersState = {
  data: ServiceProvider[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  searchMode: boolean;
};

const initialState: ProvidersState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
  searchMode: false,
};

type FilterParams = {
  service_type: number;
  location: string;
  page: number;
};

export const filterProviders = createAsyncThunk<
  ServiceProvider[],
  FilterParams,
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
        : res.data.results || res.data.providers || [];

    return providers;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || err.message
    );
  }
});


//   search

const normalize = (res: any): ServiceProvider[] => {
  if (!res || !res.data) return [];
  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res.data.results)) return res.data.results;
  if (Array.isArray(res.data.providers)) return res.data.providers;
  return [];
};



export const searchProviders = createAsyncThunk(
  "providers/searchProviders",
  async ({
    service_type,
    minFee,
    maxFee,
    date,
  }: {
    service_type: number;
    minFee?: number;
    maxFee?: number;
    date?: string;
  }) => {
    console.log("SEARCH PARAMS:", date);
    let providers: ServiceProvider[] = [];

    // ---------------- 1️⃣ Availability Search ----------------
    // ---------------- 1️⃣ Availability Search ----------------
if (date) {
  const response = await axios.get(
    `http://localhost:8000/serviceProviders-api/by-availability/`,
    {
      params: {
        service_type,
        time: date, // still sent to backend
      },
    }
  );

  const normalizeTime = (time: string) =>
    time
      .replace(/\s+/g, "") // remove spaces
      .replace(/(:)(AM|PM)$/i, "$1$2"); // normalize AM/PM

  const formattedTime = normalizeTime(date);
  const allProviders = normalize(response);

  providers = allProviders.filter((p) =>
    p.availability?.some(
      (slot) => normalizeTime(slot) === formattedTime
    )
  );
}


    // ---------------- 2️⃣ Fees Search ----------------
    if (minFee !== undefined || maxFee !== undefined) {
      const response = await axios.get(
        `http://localhost:8000/serviceProviders-api/filter-fees/`,
        {
          params: {
            min_fees: minFee,
            max_fees: maxFee,
          },
        }
      );

      const feeProviders = normalize(response);

      // 🔁 INTERSECTION if availability already applied
      if (providers.length > 0) {
        const feeIds = new Set(feeProviders.map((p) => p.id));
        providers = providers.filter((p) => feeIds.has(p.id));
      } else {
        providers = feeProviders;
      }
    }

    console.log("Availability providers:", providers);
    return providers;
  }
);


const providerSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
    resetProviders(state) {
      state.data = [];
      state.page = 1;
      state.hasMore = true;
      state.error = null;
       state.searchMode = false;
    },
    nextPage(state) {
      state.page += 1;
    },

     clearSearchMode: (state) => {
      state.searchMode = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterProviders.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        filterProviders.fulfilled,
        (state, action: PayloadAction<ServiceProvider[]>) => {
          state.loading = false;

          if (state.page > 1) {
            state.data.push(...action.payload);
          } else {
            state.data = action.payload;
          }

          state.hasMore = action.payload.length > 0;
        }
      )
      .addCase(filterProviders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      })

//  search

      .addCase(searchProviders.pending, (state) => {
        state.loading = true;
        state.searchMode = true; // 🔒 lock browsing
        state.data = [];
        state.error = null;
      })
      .addCase(searchProviders.fulfilled, (state, action) => {
        state.loading = false;
        state.data = Array.isArray(action.payload)
        ? action.payload
        : [];
        state.searchMode = true;
        state.page = 1;
        state.hasMore = false;
      })
      .addCase(searchProviders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {clearSearchMode ,resetProviders, nextPage } = providerSlice.actions;
export default providerSlice.reducer;


// export type Provider = {
//   id: string;
//   name: string;
//   service_type_name: string;
//   image?: string;
//   description: string;
//   fees: number;
//   location: string;
// };

// type ProvidersState = {
//   data: Provider[];
//   loading: boolean;
//   error: string | null;
//   page: number;
//   hasMore: boolean;
// };

// const initialState: ProvidersState = {
//   data: [],
//   loading: false,
//   error: null,
//   page: 1,
//   hasMore: true,
// };

// // =================== ASYNC THUNK ===================
// export const filterProviders = createAsyncThunk(
//   "providers/filterProviders",
//   async ({
//     service_type,
//     location,
//     page,
//   }: {
//     service_type: number;
//     location: string;
//     page: number;
//   }) => {
//     const response = await axios.get(
//       `${BaseURL}/providers?service_type=${service_type}&location=${location}&page=${page}`
//     );

//     // Assuming API returns: { providers: [], totalCount: number }
//     return {
//       providers: response.data.providers,
//       totalCount: response.data.totalCount,
//     };
//   }
// );

// // =================== SLICE ===================
// const providerSlice = createSlice({
//   name: "providers",
//   initialState,
//   reducers: {
//     nextPage: (state) => {
//       state.page += 1;
//     },
//     resetProviders: (state) => {
//       state.data = [];
//       state.page = 1;
//       state.hasMore = true;
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(filterProviders.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(filterProviders.fulfilled, (state, action) => {
//         state.loading = false;
//         // Append new providers to existing data
//         state.data = [...state.data, ...action.payload.providers];

//         // ✅ Correctly calculate hasMore
//         state.hasMore =
//           state.data.length < (action.payload.totalCount ?? Infinity);
//       })
//       .addCase(filterProviders.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Something went wrong";
//       });
//   },
// });

// export const { nextPage, resetProviders } = providerSlice.actions;
// export default providerSlice.reducer;
