"use client";

import { createPost } from "@/api/post";
import { ImagePlus, Video, X } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function CreatePost() {
  const [text, setText] = useState("");
  const [media, setMedia] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setMedia(Array.from(e.target.files));
  };

  const removeFile = (index: number) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePost = async () => {
    if (!text.trim() && media.length === 0) {
      return toast.error("Write something or select media.");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("caption", text);

      media.forEach((file) => {
        formData.append("media", file);
      });

      const response = await createPost(formData);

      console.log("SUCCESS:", response);

      toast.success("Post created successfully");

      setText("");
      setMedia([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full bg-gray-100 rounded-xl p-4 resize-none outline-none h-28"
      />

      {/* Preview */}

      {media.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mt-4">
          {media.map((file, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden border"
            >
              {file.type.startsWith("image") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <video
                  src={URL.createObjectURL(file)}
                  controls
                  className="w-full h-48 object-cover"
                />
              )}

              <button
                onClick={() => removeFile(index)}
                className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Bottom */}

      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-3">
          <button
            onClick={() => inputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <ImagePlus className="text-green-600" size={20} />
            <span>Photo</span>
          </button>

          <button
            onClick={() => inputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <Video className="text-red-500" size={20} />
            <span>Video</span>
          </button>
        </div>

        <button
          onClick={handlePost}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg disabled:bg-blue-300"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        multiple
        hidden
        accept="image/*,video/*"
        onChange={handleFiles}
      />
    </div>
  );
}
