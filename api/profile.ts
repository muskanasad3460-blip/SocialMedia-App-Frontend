const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string | null;
  avatar?: string | null;
  coverImage?: string | null;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
}

export async function getProfile() {
  const response = await fetch(`${API_URL}/v1/profile/me`, {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch profile");
  }

  return result as {
    success: boolean;
    data: UserProfile;
  };
}

export async function updateProfile(data: {
  name?: string;
  bio?: string;
  avatar?: File;
}) {
  const formData = new FormData();

  if (data.name) {
    formData.append("name", data.name);
  }

  if (data.bio) {
    formData.append("bio", data.bio);
  }

  if (data.avatar) {
    formData.append("avatar", data.avatar);
  }

  const response = await fetch(`${API_URL}/v1/profile/me`, {
    method: "PATCH",
    credentials: "include",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Profile update failed");
  }

  return result as {
    success: boolean;
    message: string;
    data: UserProfile;
  };
}
