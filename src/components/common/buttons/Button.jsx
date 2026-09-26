export function RedirectButton({ redirectTo, ariaLabel, btnClass, children, onClick }) {
    const handleClick = () => {
      if (onClick) {
        onClick();
      } else if (redirectTo) {
        // For section navigation, scroll to the section
        if (redirectTo.startsWith('#')) {
          const sectionId = redirectTo.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            // Update URL hash
            window.history.pushState(null, null, `#${sectionId}`);

            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        } else {
          // For external links
          window.open(redirectTo, '_blank');
        }
      }
    };

    return (
      <button className={btnClass} onClick={handleClick} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }