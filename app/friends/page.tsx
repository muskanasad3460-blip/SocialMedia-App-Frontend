"use client";

import {
  acceptFriendRequest,
  getFriendRequest,
  getFriends,
  getSuggestions,
  rejectFriendRequest,
  sendFriendRequest,
} from "@/api/friend";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Friendspage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [friends, setFriends] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const req = await getFriendRequest();
      const fr = await getFriends();
      const sug = await getSuggestions();

      setRequests(req);
      setFriends(fr);
      setSuggestions(sug);
    } catch {
      toast.error("Failed to load friends");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAccept = async (id: number) => {
    try {
      await acceptFriendRequest(id);

      toast.success("Friend request accepted");

      fetchData();
    } catch {
      toast.error("Failed to accept");
    }
  };

  const handleReject = async (id: number) => {
    try {
      await rejectFriendRequest(id);

      toast.success("Friend request rejected");

      fetchData();
    } catch {
      toast.error("Failed to reject");
    }
  };

  const handleAdd = async (userId: number) => {
    try {
      await sendFriendRequest(userId);

      toast.success("Friend request sent");

      setSuggestions((prev) => prev.filter((user: any) => user.id !== userId));
    } catch {
      toast.error("Failed to send request");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      {/* Friend Requests */}

      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-xl font-bold mb-5">Friend Requests</h2>

        <div className="space-y-4">
          {requests.length === 0 ? (
            <p className="text-gray-500">No requests</p>
          ) : (
            requests.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  {item.sender.avatar ? (
                    <img
                      src={item.sender.avatar}
                      alt={item.sender.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      {item.sender.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <h3 className="font-semibold">{item.sender.name}</h3>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAccept(item.id)}
                    className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => handleReject(item.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Friends */}

      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-xl font-bold mb-5">Friends</h2>

        <div className="space-y-4">
          {friends.length === 0 ? (
            <p className="text-gray-500">No friends yet</p>
          ) : (
            friends.map((friend: any) => (
              <div
                key={friend.id}
                className="flex items-center gap-3 border rounded-lg p-3"
              >
                {friend.avatar ? (
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    {friend.name.charAt(0).toUpperCase()}
                  </div>
                )}

                <div>
                  <h3 className="font-semibold">{friend.name}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Suggestions */}

      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-xl font-bold mb-5">People You May Know</h2>

        <div className="space-y-4">
          {suggestions.length === 0 ? (
            <p className="text-gray-500">No suggestions available</p>
          ) : (
            suggestions.map((user: any) => (
              <div
                key={user.id}
                className="flex items-center justify-between border rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-500">Suggested for you</p>
                  </div>
                </div>

                <button
                  onClick={() => handleAdd(user.id)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Add
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
