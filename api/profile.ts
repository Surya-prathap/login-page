type BasicProfile = {
  contactNumber?: string;
  dob?: string;
  role?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  languages?: string;
  accCreated?: number;
};
const BASE = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
export async function fetchBasicProfile(id: string): Promise<BasicProfile> {
  const r = await fetch(`${BASE}/manager/getBasicProfile/${id}`);
  if (!r.ok) return {};
  return r.json();
}
export async function patchCreateProfile(
  id: string,
  data: BasicProfile
): Promise<any> {
  const r = await fetch(`${BASE}/manager/createManagerProfile/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return r.json();
}
