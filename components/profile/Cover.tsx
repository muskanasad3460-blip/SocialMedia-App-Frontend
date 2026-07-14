import { UserProfile } from "@/api/profile";

interface CoverProps {
  user: UserProfile;
}

export default function Cover({ user }: CoverProps) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-b-xl shadow">
      <img
        src={user.coverImage || "/profile.jpg"}
        alt="Cover"
        className="w-full h-[400px] object-cover rounded-b-xl"
      />
    </div>
  );
}
