export const setUserId = (v: string) =>
  typeof window !== "undefined" && localStorage.setItem("userID", v);
export const getUserId = (): string | null =>
  typeof window !== "undefined" ? localStorage.getItem("userID") : null;
export const setAccCreated = (v: "0" | "1") =>
  typeof window !== "undefined" && localStorage.setItem("accCreated", v);
export const getAccCreated = (): "0" | "1" | null =>
  typeof window !== "undefined"
    ? (localStorage.getItem("accCreated") as "0" | "1" | null)
    : null;
export const clearAll = () =>
  typeof window !== "undefined" && localStorage.clear();
