interface PostCardProps {
  post: any;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      {/* Header */}

      <div className="flex items-center gap-3">
        <div
          className="w-12
h-12
rounded-full
bg-gray-300
flex
items-center
justify-center
"
        >
          👤
        </div>

        <div>
          <h3 className="font-semibold">{post.user.name}</h3>

          <p className="text-sm text-gray-500">{post.createdAt}</p>
        </div>
      </div>

      {/* Content */}

      <p
        className="
mt-5
text-gray-800
text-lg
"
      >
        {post.content}
      </p>

      {/* Image */}

      {post.image && (
        <img
          src={post.image}
          className="
mt-4
rounded-xl
w-full
"
        />
      )}

      {/* Actions */}

      <div
        className="
border-t
mt-5
pt-4
flex
justify-between
text-gray-600
"
      >
        <button
          className="
hover:text-blue-600
"
        >
          👍 Like ({post.likes})
        </button>

        <button
          className="
hover:text-blue-600
"
        >
          💬 Comment ({post.comments})
        </button>

        <button
          className="
hover:text-blue-600
"
        >
          ↗ Share
        </button>
      </div>
    </div>
  );
}
