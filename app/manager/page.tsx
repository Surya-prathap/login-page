"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setUserId, setAccCreated } from "../../utils/storage";
import { fetchBasicProfile } from "../../api/profile";

export default function Manager() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("userID");

    if (!id) {
      router.replace("/login");
      return;
    }

    setUserId(id);

    fetchBasicProfile(id)
      .then((res) => {
        const acc = String(res?.accCreated ?? "0");

        if (acc === "1") {
          setAccCreated("1");
          router.replace("/dashboard");
        } else {
          setAccCreated("0");
          router.replace("/create-profile");
        }
      })
      .catch(() => {
        setAccCreated("0");
        router.replace("/create-profile");
      });
  }, [router]);

  return (
    <div className="page login-bg">
      <div className="container">
        <div className="title">Checking your account...</div>
      </div>
    </div>
  );
}
