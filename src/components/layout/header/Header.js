import React, { useState, useEffect, createRef } from 'react';
function Header({ children, sticky = false, className, ...rest }) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = createRef();

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      );

    observer.observe(cachedRef);

    // unmount
    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <header1 className={isSticky ? ' isSticky' : ''} ref={ref} {...rest}>
      {children}
      <style>{`
          .isSticky{
            position: sticky;
            top:0;
            background:white;
            z-index:2;
          }
          `}</style>
    </header1>
  );
}

export default Header;
