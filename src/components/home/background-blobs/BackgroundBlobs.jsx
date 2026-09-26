const BackgroundBlobs = () => {
  return (
    <div className="absolute inset-0 opacity-30 dark:opacity-20">
      <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default BackgroundBlobs;
