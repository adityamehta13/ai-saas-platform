const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getHealth() {
  try {
    console.log("API_URL:", API_URL);
    const res = await fetch(`${API_URL}/`);
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return { message: "Backend connection failed" };
  }
}

export async function generateStory(topic: string) {
  const res = await fetch(`${API_URL}/story_video`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic }),
  });

  if (!res.ok) {
    throw new Error("Failed to generate story");
  }

  return res.json();
}