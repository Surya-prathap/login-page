"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import { getUserId, setAccCreated } from "../../utils/storage";
import { patchCreateProfile } from "../../api/profile";
export default function CreateProfile() {
  const r = useRouter();
  const [form, setForm] = useState({
    contactNumber: "",
    dob: "",
    role: "Manager",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    pincode: "",
    languages: "English",
  });
  const update = (k: keyof typeof form, v: any) =>
    setForm((prev) => ({ ...prev, [k]: v }));
  async function submit(e: any) {
    e.preventDefault();
    const id = getUserId();
    if (!id) return r.replace("/login");
    await patchCreateProfile(id, form);
    setAccCreated("1");
    r.replace("/dashboard");
  }
  return (
    <div className="page profile-bg">
      <div className="container" style={{ width: 640, maxWidth: "94%" }}>
        <Header />
        <div className="title">Create Profile</div>
        <div className="lead">Provide complete details to manage the gym</div>
        <form onSubmit={submit}>
          <div className="grid">
            <div>
              <div className="field">
                <div className="label">Contact Number</div>
                <input
                  className="input"
                  value={form.contactNumber}
                  onChange={(e) => update("contactNumber", e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <div className="label">Role</div>
                <select
                  className="select"
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                  required
                >
                  <option>Manager</option>
                  <option>Trainer</option>
                  <option>Reception</option>
                </select>
              </div>
              <div className="field">
                <div className="label">City</div>
                <select
                  className="select"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  required
                >
                  <option>Bengaluru</option>
                  <option>Hyderabad</option>
                  <option>Mumbai</option>
                </select>
              </div>
              <div className="field">
                <div className="label">Pincode</div>
                <input
                  className="input"
                  value={form.pincode}
                  onChange={(e) => update("pincode", e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="field">
                <div className="label">Date of Birth</div>
                <input
                  className="input"
                  type="date"
                  value={form.dob}
                  onChange={(e) => update("dob", e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <div className="label">State</div>
                <select
                  className="select"
                  value={form.state}
                  onChange={(e) => update("state", e.target.value)}
                  required
                >
                  <option>Karnataka</option>
                  <option>Telangana</option>
                  <option>Maharashtra</option>
                </select>
              </div>
              <div className="field">
                <div className="label">Country</div>
                <select
                  className="select"
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  required
                >
                  <option>India</option>
                  <option>UAE</option>
                  <option>USA</option>
                </select>
              </div>
              <div className="field">
                <div className="label">Languages Known</div>
                <select
                  className="select"
                  value={form.languages}
                  onChange={(e) => update("languages", e.target.value)}
                  required
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Kannada</option>
                  <option>Telugu</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <button className="button" type="submit">
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
