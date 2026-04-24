"use client";

import { useEffect, useState } from "react";
import { getHealth } from "@/lib/api";

export default function DashboardPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getHealth()
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend connection failed"));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">AI SaaS Dashboard</h1>

      <p className="mt-4 text-lg">
        Backend says: {message}
      </p>
    </main>
  );
}