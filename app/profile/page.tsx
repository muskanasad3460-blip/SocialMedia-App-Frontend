"use client";

import { useEffect, useState } from "react";
import { UserProfile, getProfile } from "@/api/profile";

import Cover from "@/components/profile/Cover";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import LinksCard from "@/components/profile/LinksCard";
import PhotosCard from "@/components/profile/PhotosCard";
import PostsHeader from "@/components/profile/PostsHeader";
import PostCard from "@/components/profile/PostCard";
// import Navbar from "@/components/navbar/Navbar";

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getProfile();

        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar /> */}

      <Cover user={profile} />

      <ProfileHeader user={profile} />

      <ProfileTabs />

      <main className="max-w-6xl mx-auto py-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <LinksCard />
            <PhotosCard />
          </div>

          <div className="col-span-2">
            <PostsHeader />
            <PostCard />
          </div>
        </div>
      </main>
    </div>
  );
}
