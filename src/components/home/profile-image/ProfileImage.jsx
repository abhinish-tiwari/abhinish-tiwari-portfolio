import profileImage from '@/assets/images/profile/logo.jpg';

const ProfileImage = () => {
  return (
    <div className="flex justify-center items-center relative z-0">
      <div className="relative group">
        {/* Main Profile Image */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem]
                       rounded-full overflow-hidden border-4 border-white dark:border-gray-800
                       shadow-2xl transform transition-transform duration-300 group-hover:scale-105 relative z-0">
          <img
            src={profileImage}
            alt="Abhinish Tiwari"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Enhanced gradient background effect */}
        <div className="absolute -z-10 -inset-6 blur-3xl opacity-30
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500
                       rounded-full animate-pulse" />

        {/* Decorative ring */}
        <div className="absolute -inset-3 rounded-full border-2 border-indigo-500/30 dark:border-indigo-400/30
                       animate-spin-slow" />

        {/* Inner decorative ring */}
        <div className="absolute -inset-1 rounded-full border border-white/50 dark:border-gray-700/50" />
      </div>
    </div>
  )
}

export default ProfileImage



