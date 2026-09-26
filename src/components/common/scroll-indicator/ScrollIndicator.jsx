import { RedirectButton } from "../buttons/Button";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer">
      <RedirectButton
        redirectTo="/about"
        ariaLabel="Scroll down to about section"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </RedirectButton>
    </div>
  );
};

export default ScrollIndicator;
