"use client";

import { useState } from "react";
import { generateStory } from "@/lib/api";

export default function StoryPage() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");

    try {
      const data = await generateStory(topic);
      setResult(data.script);
    } catch (err) {
      setResult("Error generating story");
    }

    setLoading(false);
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Story Video Generator 🎬
      </h1>

      <input
        className="w-full p-3 border rounded"
        placeholder="Enter your story idea..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate Story"}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          {result}
        </div>
      )}
    </div>
  );
}