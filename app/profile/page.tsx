import Cover from "@/components/profile/Cover";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";

import LinksCard from "@/components/profile/LinksCard";
import PhotosCard from "@/components/profile/PhotosCard";

import PostsHeader from "@/components/profile/PostsHeader";
import PostCard from "@/components/profile/PostCard";
import Navbar from "@/components/navbar/Navbar";

export default function ProfilePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Cover */}
      <Cover />

      {/* Profile Info */}
      <ProfileHeader />

      {/* Tabs */}
      <ProfileTabs />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-5">
        <div className="grid grid-cols-3 gap-5">
          {/* LEFT SIDE */}
          <div className="col-span-1">
            <LinksCard />

            <PhotosCard />
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-2">
            <PostsHeader />

            <PostCard />
          </div>
        </div>
      </main>
    </div>
  );
}
