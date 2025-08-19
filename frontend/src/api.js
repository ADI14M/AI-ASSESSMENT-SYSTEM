// frontend/src/api.js
export const API_URL = "http://localhost:5000";

export async function getHealth() {
  try {
    const res = await fetch(`${API_URL}/api/health`);
    if (!res.ok) throw new Error("Failed to fetch backend");
    return await res.json();
  } catch (err) {
    return { message: "❌ Backend not reachable" };
  }
}
