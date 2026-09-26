import { FaDownload } from 'react-icons/fa';
import { RESUME_CONFIG } from '../../../constants/resume';
import { handleDownload } from '../../../utils/file-download';

const getButtonStyle = (variant) => {
  const btnStyle = 'w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200';

  const variants = {
    default:
      "text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    mobile:
      "text-base font-medium",
  };
  return `${btnStyle} ${variants[variant]}`;
}

const ResumeButton = ({
   btnName,
   icon: Icon = FaDownload,
   variant = "default"
   }) => {

  return (
    <button 
      onClick={() => handleDownload(RESUME_CONFIG.filePath, RESUME_CONFIG.fileName)}
      className={getButtonStyle(variant)}
      aria-label="Download Resume"
    >
      <Icon className={variant === "mobile" ? "w-5 h-5" : "w-4 h-4"} />
      <span>{btnName || 'Resume'}</span>
    </button>
  );
};

export default ResumeButton;