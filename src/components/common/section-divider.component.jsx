const SectionDivider = ({ className = "" }) => {
  return (
    <div className={`w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent ${className}`} />
  )
}

export default SectionDivider
