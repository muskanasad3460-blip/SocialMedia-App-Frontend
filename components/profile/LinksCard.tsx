import { FaFacebookMessenger, FaLink, FaEnvelope } from "react-icons/fa6";

export default function LinksCard() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      {/* Links */}
      <h2 className="text-[20px] font-bold mb-3">Links</h2>

      <div className="flex items-center gap-4 mb-5">
        <FaLink className="text-2xl" />

        <a
          href="#"
          className="text-blue-600 text-base font-medium hover:underline"
        >
          shahidafridifoundation.org
        </a>
      </div>

      {/* Contact */}
      <h2 className="text-[20px] font-bold mb-3">Contact info</h2>

      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-2xl" />

          <p className="text-blue-600 text-base">
            shahidafridi@half-fullstudio.com
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FaFacebookMessenger className="text-2xl" />

          <p className="text-base font-medium">Shahid Afridi</p>
        </div>
      </div>
    </div>
  );
}
