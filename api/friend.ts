const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendFriendRequest = async (userId: number) => {
  const response = await fetch(`${API_URL}/v1/friends/request/${userId}`, {
    method: "POST",
    credentials: "include",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const getFriendRequest = async () => {
  const response = await fetch(`${API_URL}/v1/friends/request`, {
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const acceptFriendRequest = async (requestId: number) => {
  const response = await fetch(`${API_URL}v1/friends/accept/${requestId}`, {
    method: "PATCH",
    credentials: "include",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
export const getSuggestions = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/friends/suggestions`,
    {
      credentials: "include",
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const getFriends = async () => {
  const response = await fetch(`${API_URL}/v1/friends`, {
    credentials: "include",
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
};

export const rejectFriendRequest = async (id: number) => {
  const res = await fetch(`${API_URL}/v1/friends/reject/${id}`, {
    method: "PATCH",
    credentials: "include",
  });
  return res.json();
};
