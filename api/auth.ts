const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getGoogleAuthUrl = () => `${BASE}/auth/google/manager`;
