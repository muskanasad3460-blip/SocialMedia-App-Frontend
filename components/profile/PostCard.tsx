import { FaCircleCheck, FaEllipsis } from "react-icons/fa6";

export default function PostCard() {
  return (
    <div className="bg-white rounded-xl shadow mt-5">
      {/* Header */}
      <div className="p-5">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              src="https://scontent.fskt2-1.fna.fbcdn.net/v/t39.99422-6/726908600_1007261928833879_5598724386943254499_n.png?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_o4xpqIYszkQ7kNvwHyeTc8&_nc_oc=AdrsKnFPUojdK9vYndRXlfyDGN6HPOZqRsyvJr5ndbBHZxu6zU387wn-oH3BXjNnos0&_nc_zt=14&_nc_ht=scontent.fskt2-1.fna&_nc_gid=PhtAeokp3nfdDK0uXlL-ww&_nc_ss=7b2a8&oh=00_AQCjkIO9mLKx91BdPWa6oi4UQyZxGNUkDf7XLoQvoK-v3A&oe=6A5274C3"
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-xl">Shahid Afridi</h3>

                <FaCircleCheck className="text-blue-600" />
              </div>

              <p className="text-gray-500">13h • 🌍</p>
            </div>
          </div>

          <FaEllipsis className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Post Image */}
      <video
        src="/birds.mp4"
        controls
        className="w-full h-[500px] object-cover"
      >
        Your browser does not support video.
      </video>

      {/* Actions */}
      <div className="flex justify-around py-4 border-t">
        <button className="font-semibold hover:bg-gray-100 px-5 py-2 rounded-lg">
          👍 Like
        </button>

        <button className="font-semibold hover:bg-gray-100 px-5 py-2 rounded-lg">
          💬 Comment
        </button>

        <button className="font-semibold hover:bg-gray-100 px-5 py-2 rounded-lg">
          ↗ Share
        </button>
      </div>
    </div>
  );
}
