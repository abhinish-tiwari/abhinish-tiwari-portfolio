import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Something went wrong
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {error?.message || 'An unexpected error occurred'}
      </p>
      <button
        onClick={() => {
          resetErrorBoundary();
          window?.location?.reload();
        }}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 
                 transition-colors duration-200"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

const ErrorBoundary = ({ children }) => (
  <ReactErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, errorInfo) => {
      console.error('Error caught by boundary:', error, errorInfo);
      // TODO: Add error reporting service integration
    }}
  >
    {children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;



