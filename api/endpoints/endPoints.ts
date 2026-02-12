export const PROVIDER_ENDPOINTS = {
  LIST: "/serviceProviders-api/list/",
  FILTER: "/serviceProviders-api/filter/",
  BY_AVAILABILITY: "/serviceProviders-api/by-availability/",
  UPDATE: (id: number | string) => `/serviceProviders-api/update/${id}/`,
};

export const CONTACT_ENDPOINTS = {
  CONTACT: "/contact-api/send-message/",
}

export const BOOKING_ENDPOINTS = {
  BOOKING: "/bookings-api/"
}
export const endpoints ={
auth:{
    registration : "/users-api/register/",
    signIn : "/users-api/login/",
    otp:"/users-api/register/verify-otp/",
    
},

}
export const endpoint = [
    endpoints.auth.registration,
    endpoints.auth.signIn,
    endpoints.auth.otp,
    
]