import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => { // Charge chaque donnée (image, etc...)
    const images = Array.from(document.images);
    if (images.length === 0) {
      setProgress(100);
      setTimeout(() => setLoading(false), 1000);
      return;
    }

    let loaded = 0;

    const updateProgress = () => {
      loaded += 1;
      const percent = Math.round((loaded / images.length) * 100);
      setProgress(percent);
      if (percent === 100) {
        setTimeout(() => setLoading(false), 500);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress);
        img.addEventListener('error', updateProgress);
      }
    });

    // Nettoyage des listeners
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', updateProgress);
        img.removeEventListener('error', updateProgress);
      });
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col justify-center items-center">
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_usmfx6bp.json"
        style={{ height: '400px', width: '400px' }}
      />
      <div className="text-2xl font-bold text-[#800000]">
        {progress}%
      </div>
    </div>
  );
};

export default Loader;