import { socialLinks } from '../../../data/socialLinks'

const SocialLinks = () => {
  return (
    <div className="mt-8 sm:mt-12 relative">
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-bold relative inline-block
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
          Connect with me
        </h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-600/20 to-transparent 
                      dark:from-indigo-400/20" />
      </div>
      
      <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
        {socialLinks.map((link) => (
          <SocialLink key={link.name} {...link} />
        ))}
      </div>
    </div>
  )
}

const SocialLink = ({ name, url, icon: Icon, hoverColor, isShowTooltip = true }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 sm:p-4 rounded-lg transition-all duration-300 
                transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg
                ${hoverColor} hover:text-white
                bg-white dark:bg-gray-800 
                text-gray-600 dark:text-gray-300
                shadow-md hover:shadow-indigo-500/20
                group relative`}
      aria-label={name}
    >
      <div className="relative z-10">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      {isShowTooltip &&
        <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                     bg-gray-800 text-white px-2 py-1 rounded-md text-xs sm:text-sm
                     opacity-0 group-hover:opacity-100 transition-all duration-300
                     whitespace-nowrap shadow-lg pointer-events-none">
          {name}
        </span>
      }
    </a>
  )
}

export { SocialLinks, SocialLink };



