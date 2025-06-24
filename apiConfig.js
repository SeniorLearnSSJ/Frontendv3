export const API_URL = "http://owl.grassplot.xyz:3001";

export const apiConfig = {
  baseURL: `${API_URL}`,
  endpoints: {
    login: "/api/auth/sign-in",
    register: "/api/auth/register",
    profile: "/api/profile",
    settings: "/api/profile/settings",
    member: "/api/bulletins/member",
    official: "/api/bulletins/official",
  },
};
