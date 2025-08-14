import { useEffect, useState } from 'react';

const CompTypewriter = () => {
  const words = ['developer web&desktop', 'react developer'];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // vitesse initiale

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const type = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      // changement d'état quand le mot est complètement tapé
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // pause avant suppression
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <>
      <span>{text}</span>
      <span className="cursor">|</span>
    </>
  );
};

export default CompTypewriter;
