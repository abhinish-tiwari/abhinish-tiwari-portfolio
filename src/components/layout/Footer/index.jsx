import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="inline-block text-red-500 mx-1" />{" "}
              by
              <span className="font-medium ml-1">Abhinish Tiwari</span>
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
