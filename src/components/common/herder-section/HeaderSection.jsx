import { motion } from 'framer-motion';

export default function HeaderSection({ headerName, icon: Icon, children }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
          {Icon && <Icon className="text-indigo-500" />}
          {headerName}
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        {children}
      </motion.div>
    );
}