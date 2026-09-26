import ActionsButtons from "../action-buttons/ActionButtons";
import home from "@/data/home.js";

export default function IntroSection() {
  return (
    <div>
      <span
        className="inline-block px-4 py-2 mb-4 text-sm font-medium text-indigo-600 dark:text-indigo-400
                       bg-indigo-50 dark:bg-indigo-900/10 rounded-full w-fit
                       transform hover:scale-105 transition-all duration-300"
      >
        {home.tagline}
      </span>

      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4
                             animate-slideUp leading-tight"
      >
        {home.title}
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600
                                animate-gradient bg-300% hover:animate-none hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-500
                                transition-all duration-300"
        >
          {home.name}
        </span>
      </h1>

      <p
        className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6
                            animate-slideUp animation-delay-200"
      >
        {home.designation}
      </p>
      <p
        className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-6 max-w-3xl
                            animate-slideUp animation-delay-400
                            leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: home.description }}
      ></p>
      <ActionsButtons />
    </div>
  );
}
