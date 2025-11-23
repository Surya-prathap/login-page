"use client";
import { getGoogleAuthUrl } from "../../api/auth";
export default function Login() {
  return (
    <div className="page login-bg">
      <div className="container">
        <div className="header">
          <div className="logo">Gym Manager</div>
        </div>
        <div className="title">
          Manage Your{" "}
          <span style={{ color: "var(--accent)" }}>Fitness Centre</span>
        </div>
        <div className="lead">
          All your business operations in one place, ready for you to take
          charge.
        </div>
        <button
          className="button"
          onClick={() => (window.location.href = getGoogleAuthUrl())}
        >
          <img
            src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png"
            width="25"
            alt="g"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
