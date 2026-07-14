import CreatePost from "@/components/home/CreatePost";
import Feed from "@/components/home/Feed";
import LeftSidebar from "@/components/home/LeftSidebar";
import RightSideBar from "@/components/home/RightSideBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className=" max-w-7xl mx-auto grid grid-cols-12 gap-6 px-5">
        {/* Left Sidebar */}

        <aside className=" hidden lg:block col-span-3">
          <LeftSidebar />
        </aside>

        {/* Main Feed */}

        <main className=" col-span-12 lg:col-span-6 ">
          <CreatePost />

          <Feed />
        </main>

        {/* Right Sidebar */}

        <aside className=" hidden lg:block col-span-3">
          <RightSideBar />
        </aside>
      </div>
    </div>
  );
}
