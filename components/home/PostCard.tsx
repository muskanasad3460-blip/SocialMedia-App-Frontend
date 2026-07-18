"use client";

import { createComment, getComments } from "@/api/comment";
import { toggleLike } from "@/api/like";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

interface PostCardProps {
  post: any;
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [comments, setComments] = useState<any[]>([]);
  const [showComments, setShowComments] = useState(false);

  const [text, setText] = useState("");

  const [index, setIndex] = useState(-1);

  const fetchComments = async () => {
    try {
      const data = await getComments(post.id);
      setComments(data);
    } catch {
      toast.error("Failed to load comments");
    }
  };

  const handleComment = async () => {
    if (!text.trim()) return;

    try {
      await createComment(post.id, text);
      setText("");
      fetchComments();
    } catch {
      toast.error("Comment failed");
    }
  };

  const handleLike = async () => {
    try {
      setLoading(true);

      const response = await toggleLike(post.id);

      setLiked(response.liked);
    } catch {
      toast.error("Like failed");
    } finally {
      setLoading(false);
    }
  };

  const images =
    post.media
      ?.filter((m: any) => m.type === "IMAGE")
      .map((img: any) => ({
        src: img.url,
        width: 1200,
        height: 900,
      })) || [];

  const videos = post.media?.filter((m: any) => m.type === "VIDEO") || [];

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Header */}

      <div className="flex items-center gap-3 p-5">
        {post.user.avatar ? (
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white font-semibold">
            {post.user.name.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h3 className="font-semibold">{post.user.name}</h3>

          <p className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Caption */}

      {post.caption && (
        <div className="px-5 pb-4">
          <p>{post.caption}</p>
        </div>
      )}

      {/* Images */}

      {images.length > 0 && (
        <div className="px-2">
          <PhotoAlbum
            layout="rows"
            photos={images}
            spacing={4}
            targetRowHeight={320}
            onClick={({ index }) => setIndex(index)}
          />

          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            slides={images}
          />
        </div>
      )}

      {/* Videos */}

      {videos.map((video: any) => (
        <div key={video.id} className="bg-black mt-2">
          <video controls className="w-full max-h-[600px] object-contain">
            <source src={video.url} />
          </video>
        </div>
      ))}

      {/* Actions */}

      <div className="border-t flex justify-around py-3">
        <button
          onClick={handleLike}
          disabled={loading}
          className={`flex items-center gap-2 ${
            liked ? "text-red-500" : "hover:text-red-500"
          }`}
        >
          <Heart size={20} fill={liked ? "red" : "none"} />
          {liked ? "Liked" : "Like"}
        </button>

        <button
          onClick={() => {
            setShowComments(!showComments);

            if (!showComments) {
              fetchComments();
            }
          }}
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <MessageCircle size={20} />
          Comment
        </button>

        <button className="flex items-center gap-2 hover:text-green-600">
          <Share2 size={20} />
          Share
        </button>
      </div>

      {/* Comments */}

      {showComments && (
        <div className="border-t bg-gray-50 p-4">
          {/* Add Comment */}

          <div className="flex items-center gap-3 mb-5">
            {post.user.avatar ? (
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                {post.user.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="flex flex-1 gap-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a public comment..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleComment}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-full font-medium transition"
              >
                Post
              </button>
            </div>
          </div>

          {/* Comments */}

          <div className="max-h-96 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {" "}
            {comments.length === 0 ? (
              <p className="text-center text-sm text-gray-500">
                No comments yet.
              </p>
            ) : (
              comments.map((comment: any) => (
                <div key={comment.id} className="flex gap-3">
                  {/* Avatar */}

                  {comment.user.avatar ? (
                    <img
                      src={comment.user.avatar}
                      alt={comment.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white font-semibold shrink-0">
                      {comment.user.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  {/* Bubble */}

                  <div className="flex-1">
                    <div className="inline-block bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-200 max-w-full">
                      <h4 className="font-semibold text-sm text-gray-900">
                        {comment.user.name}
                      </h4>

                      <p className="text-gray-700 break-words">
                        {comment.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-1 ml-2 text-xs text-gray-500">
                      <span>
                        {new Date(comment.createdAt).toLocaleString()}
                      </span>

                      <button className="hover:text-blue-600 font-medium">
                        Like
                      </button>

                      <button className="hover:text-blue-600 font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
