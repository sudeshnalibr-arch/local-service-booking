
// import axios from "axios";
// import { Cookies } from "react-cookie";

// export const BaseURL = "http://127.0.0.1:8000";

// const AxiosInstance = axios.create({
//   baseURL: BaseURL,
//   withCredentials: true,
// });

// const cookies = new Cookies();

// // ================= REQUEST INTERCEPTOR =================
// AxiosInstance.interceptors.request.use(
//   (config) => {
//     // 1. Get token from cookies
//     const token = cookies.get("token");

//     // 2. Define routes that should NOT send a token

//     const PUBLIC_ROUTES = ["/login/", "/register/", "/verify-otp/"];

//     const isPublicUrl = PUBLIC_ROUTES.some((route) =>
//     config.url?.includes(route)
//     );

//     // 3. Attach token if available
//     if (token && !isPublicUrl) {
//       // Use this method to ensure you don't overwrite other important headers
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     // 4. Debug: Important for your troubleshooting
//     console.log(`[Axios Request] ${config.method?.toUpperCase()} ${config.url} | Token Attached: ${!!token}`);

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ================= RESPONSE INTERCEPTOR =================

// // This handles the case where the token is invalid or expired (401)
// AxiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
     
//     }
//     return Promise.reject(error);
//   }
// );

// export default AxiosInstance;




import axios from "axios";
import { Cookies } from "react-cookie";

/* ================= BASE CONFIG ================= */

export const baseURL = "http://127.0.0.1:8000";

const AxiosInstance = axios.create({
baseURL,
withCredentials: true,
});

const cookies = new Cookies();

/* ================= PUBLIC ROUTES ================= */
/* Routes that should NOT send auth token */

const PUBLIC_ROUTES = [
"/login/",
"/register/",
"/verify-otp/",
];

/* ================= REQUEST INTERCEPTOR ================= */

AxiosInstance.interceptors.request.use(
(config) => {
const token = cookies.get("token");


const isPublicUrl = PUBLIC_ROUTES.some((route) =>
  config.url?.includes(route)
);

if (token && !isPublicUrl) {
  config.headers = config.headers || {};

  //  Primary auth header (standard)
  config.headers["Authorization"] = `Bearer ${token}`;

  //  Optional legacy header (if backend needs it)
  config.headers["x-access-token"] = token;
}

console.log(
  `[Axios] ${config.method?.toUpperCase()} ${config.url} | Token: ${
    token ? "Attached" : "None"
  }`
);

return config;


},
(error) => Promise.reject(error)
);

/* ================= RESPONSE INTERCEPTOR ================= */

AxiosInstance.interceptors.response.use(
(response) => response,
(error) => {
if (error.response?.status === 401) {
console.warn("Unauthorized request — token may be expired");


  // Optional: auto logout or redirect
  // cookies.remove("token");
  // window.location.href = "/auth/login";
}

return Promise.reject(error);

}
);

export default AxiosInstance;
