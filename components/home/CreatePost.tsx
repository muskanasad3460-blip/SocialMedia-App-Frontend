"use client";

import { useState } from "react";

export default function CreatePost() {
  const [text, setText] = useState("");

  const handlePost = () => {
    console.log(text);

    setText("");
  };

  return (
    <div
      className="
bg-white
rounded-2xl
shadow
p-5
mb-6
"
    >
      <div className="flex gap-4">
        <div
          className="
w-12
h-12
rounded-full
bg-gray-300
"
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="
flex-1
bg-gray-100
rounded-xl
p-3
outline-none
h-24
resize-none
"
        />
      </div>

      <button
        onClick={handlePost}
        className="
mt-4
w-full
bg-blue-600
text-white
py-3
rounded-xl
font-semibold
hover:bg-blue-700
"
      >
        Post
      </button>
    </div>
  );
}
