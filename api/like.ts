const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const toggleLike = async (postId: number) => {
  const response = await fetch(`${API_URL}/v1/likes/${postId}`, {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Liked Failed");
  }
  return response.json();
};
