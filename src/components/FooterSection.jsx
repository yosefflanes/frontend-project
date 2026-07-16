import { FaGlobeAsia } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineSound } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const FooterSection = () => {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <footer className="w-full bg-[#CBDBF5] py-8 px-4 md:py-12 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
        <div className="max-w-7xl w-full md:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">EduPro</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              © 2026 EduPro Learning Management System. All rights reserved.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold text-gray-700 mb-4">
            COMPANY
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold text-gray-700 mb-4">
            SUPPORT
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#contact" className="hover:underline">
                Contact Support
              </a>
            </li>
            <li>
              <a href="#academic" className="hover:underline">
                Academic Integrity
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold text-gray-700 mb-4">
            SOCIAL
          </h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#globe" className="hover:text-black">
              <FaGlobeAsia size={20} />
            </a>
            <a href="#share" className="hover:text-black">
              <IoShareSocialOutline size={20} />
            </a>
            <a href="#announcement" className="hover:text-black">
              <AiOutlineSound size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
