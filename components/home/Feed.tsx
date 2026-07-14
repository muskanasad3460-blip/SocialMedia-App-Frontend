import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    user: {
      name: "Muskan Asad",
      avatar: "",
    },
    content: "Building my first social media app 🚀",
    image: "",
    likes: 12,
    comments: 3,
    createdAt: "2 hours ago",
  },

  {
    id: 2,
    user: {
      name: "Ali Ahmed",
      avatar: "",
    },
    content: "Learning Next.js and Prisma 🔥",
    image: "",
    likes: 20,
    comments: 5,
    createdAt: "5 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Ali Ahmed",
      avatar: "",
    },
    content: "Learning Next.js and Prisma 🔥",
    image: "",
    likes: 20,
    comments: 5,
    createdAt: "5 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Ali Ahmed",
      avatar: "",
    },
    content: "Learning Next.js and Prisma 🔥",
    image: "",
    likes: 20,
    comments: 5,
    createdAt: "5 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Ali Ahmed",
      avatar: "",
    },
    content: "Learning Next.js and Prisma 🔥",
    image: "",
    likes: 20,
    comments: 5,
    createdAt: "5 hours ago",
  },
];

export default function Feed() {
  return (
    <div className="space-y-5">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
