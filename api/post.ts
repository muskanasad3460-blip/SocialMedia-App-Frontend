const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createPost(formData: FormData) {
  const response = await fetch(`${API_URL}/v1/posts`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to create post");
  }

  return result;
}

export async function getPosts() {
  const response = await fetch(`${API_URL}/v1/posts`, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch posts");
  }

  return result;
}
