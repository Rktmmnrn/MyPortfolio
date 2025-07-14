import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] bg-gray-200 z-20">
      <div
        className="h-full bg-[#800000] transition-all duration-200"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
