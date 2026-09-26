
import BackgroundBlobs from "./background-blobs/BackgroundBlobs";
import IntroSection from "./intro-section/IntroSection";
import ProfileImage from "./profile-image/ProfileImage";
import {SocialLinks} from "../common/social-links/SocialLinks";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative
                   bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50
                   dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                   overflow-hidden pt-16">
      <BackgroundBlobs />
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20 min-h-[calc(100vh-8rem)]">
          {/* Content Section */}
          <div className="flex-1 max-w-3xl text-center lg:text-left animate-fadeIn order-2 lg:order-1">
            <IntroSection />
            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <ProfileImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
