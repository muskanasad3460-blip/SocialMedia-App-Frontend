const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getComments = async (postId: number) => {
  const response = await fetch(`${API_URL}/v1/comments/${postId}`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
};

export const createComment = async (postId: number, text: string) => {
  const response = await fetch(`${API_URL}/v1/comments/${postId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) {
    throw new Error("Failed to create comment");
  }
  return response.json();
};
