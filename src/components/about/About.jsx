import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import HeaderSection from "../common/herder-section/HeaderSection";
import ResumeButton from "../common/resume-button/ResumeButton";
import TimelineSection from "../common/timeline-section/TimelineSection";
import { experiences, educations, stats } from "../../data/about";
import { SocialLink } from "../common/social-links/SocialLinks";
import { socialLinks } from "../../data/socialLinks";
import User from "../../data/user";
import profileImage from '@/assets/images/profile/logo.jpg';

const About = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderSection headerName="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

              {/* Profile Content */}
              <div className="px-6 pb-6">
                {/* Profile Image */}
                <div className="relative -mt-16 mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                    <img
                      src={profileImage}
                      alt="Abhinish Tiwari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {User?.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                    {User?.desgnation}
                  </p>

                  {/* Location & Contact */}
                  <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-indigo-500" />
                      <span>{User?.address}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEnvelope className="text-indigo-500" />
                      <span>{User?.email}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {
                      /* Stats */
                      stats.map((stat) => {
                        return (
                          <div
                            key={stat.id}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3"
                          >
                            <div className="text-2xl font-bold text-indigo-500">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {stat.label}
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>

                  {
                    /* Social Links */
                    <div className="flex gap-3 pb-4 sm:gap-4 justify-center">
                      {socialLinks.map((link) => (
                        <SocialLink key={link.name} {...link} isShowTooltip={false} />
                      ))}
                    </div>
                  }
                  <ResumeButton btnName="Download CV" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience and Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            {/* Experience 
             */}
            <TimelineSection timeline={experiences} />

            {/* Education Section */}
            <TimelineSection timeline={educations} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
