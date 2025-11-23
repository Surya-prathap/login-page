"use client";
import Header from "../../components/Header";
import { clearAll, getUserId } from "../../utils/storage";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const r = useRouter();
  const id = getUserId();
  if (!id) {
    r.replace("/login");
    return null;
  }
  return (
    <div className="page dashboard-bg">
      <div className="container" style={{ width: 640, maxWidth: "94%" }}>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div>
            <div className="title">Welcome Back</div>
            <div className="lead">
              You are one step closer to managing your gym
            </div>
          </div>
          <div
            style={{ textAlign: "right", fontSize: 13, color: "var(--muted)" }}
          >
            {id}
          </div>
        </div>
        <div style={{ marginTop: 16 }} className="metric-grid">
          <div className="metric">🏋️ Members: 124</div>
          <div className="metric">💪 Trainers: 8</div>
          <div className="metric">📅 Check-ins: 56</div>
          <div className="metric">❗ Enquiries: 12</div>
        </div>
        <button
          className="logout"
          onClick={() => {
            clearAll();
            r.replace("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
