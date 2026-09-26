import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import User from "../../../data/user";

const contactInfo = [
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    label: "Email",
    value: User.email,
    link: `mailto:${User.email}`,
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    label: "Phone",
    value: User.phoneNumber,
    link: `tel:${User?.phoneNumber?.replace(/\D/g, "")}`,
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    label: "Location",
    value: User.address,
    link: User.locationLink,
  },
];

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="lg:col-span-1 space-y-8"
  >
    {contactInfo.map((info, index) => (
      <a
        key={index}
        href={info.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg 
                   hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="text-indigo-500">{info.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {info.label}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
          </div>
        </div>
      </a>
    ))}
  </motion.div>
);

export default ContactInfo;
