// export default AxiosInstance;
import axios from "axios";
import { Cookies } from "react-cookie";

export const BaseURL = "http://127.0.0.1:8000";

const AxiosInstance = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
});

const cookies = new Cookies();

// ================= REQUEST INTERCEPTOR =================
AxiosInstance.interceptors.request.use(
  (config) => {
    // 1. Get token from cookies
    const token = cookies.get("token");

    // 2. Define routes that should NOT send a token
    // const isPublicUrl = 
    //   config.url?.includes("/login/") || 
    //   config.url?.includes("/register/") || 
    //   config.url?.includes("/verify-otp/");
    const PUBLIC_ROUTES = ["/login/", "/register/", "/verify-otp/"];

    const isPublicUrl = PUBLIC_ROUTES.some((route) =>
    config.url?.includes(route)
    );

    // 3. Attach token if available
    if (token && !isPublicUrl) {
      // Use this method to ensure you don't overwrite other important headers
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 4. Debug: Important for your troubleshooting
    console.log(`[Axios Request] ${config.method?.toUpperCase()} ${config.url} | Token Attached: ${!!token}`);

    return config;
  },
  (error) => Promise.reject(error)
);

// ================= RESPONSE INTERCEPTOR =================

// This handles the case where the token is invalid or expired (401)
AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      /* console.error("Unauthorized! Redirecting to login or clearing session..."); */
      // Optional: Clear cookie and redirect to login if a 401 occurs unexpectedly
      // cookies.remove("token", { path: "/" });
      // window.location.href = "/pages/auth/login";
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;