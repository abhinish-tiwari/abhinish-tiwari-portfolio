import PropTypes from 'prop-types';

export const LoadingSpinner = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className={`animate-spin rounded-full border-t-2 border-b-2 border-indigo-500 ${sizeClasses[size]}`}></div>
    </div>
  );
};

export const LoadingOverlay = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center">
        <LoadingSpinner size="large" />
        <p className="mt-4 text-gray-600 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

LoadingOverlay.propTypes = {
  message: PropTypes.string
};