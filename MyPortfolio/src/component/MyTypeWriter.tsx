import { useEffect, useState } from 'react';
import { translations, Language } from './i18n';

type TypewriterProps = { lang: Language };

const CompTypewriter = ({ lang }: TypewriterProps) => {
  const words = translations[lang].typewriterWords;
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(95);

  // Réinitialiser l'animation quand la langue change
  useEffect(() => {
    setText('');
    setIsDeleting(false);
    setWordIndex(0);
  }, [lang]);

  useEffect(() => {
    if (words.length === 0) return;
    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(38);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(90);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(p => p + 1);
      }
    };

    const t = setTimeout(tick, speed);
    return () => clearTimeout(t);
  }, [text, isDeleting, wordIndex, words, speed]);

  return (
    <span
      style={{
        fontFamily: 'var(--mono)',
        fontSize: '13px',
        letterSpacing: '2px',
        color: 'var(--text-2)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
      }}
    >
      {/* Prompt */}
      <span style={{ color: 'rgba(180,20,20,0.45)', fontSize: '11px' }}>$&nbsp;</span>
      {text}
      {/* Curseur bloc clignotant */}
      <span
        style={{
          display: 'inline-block',
          width: '8px',
          height: '15px',
          background: 'var(--red)',
          verticalAlign: 'middle',
          animation: 'blink-cursor 1s step-end infinite',
          flexShrink: 0,
        }}
      />
    </span>
  );
};

export default CompTypewriter;
