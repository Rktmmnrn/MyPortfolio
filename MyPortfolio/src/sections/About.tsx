import { motion } from 'framer-motion';
import { translations, Language } from '../data/i18n';

type AboutProps = { lang: Language };

const About = ({ lang }: AboutProps) => {
  return (
    <section id="Abt" className="flex-col lg:flex-row">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {translations[lang].aboutTitle}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          width: '100%',
          maxWidth: '700px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '3px',
          padding: '28px 32px',
          position: 'relative',
        }}
      >
        {/* Coins décoratifs */}
        <span style={{
          position: 'absolute', top: '-1px', left: '-1px',
          width: '12px', height: '12px',
          borderTop: '2px solid var(--red)', borderLeft: '2px solid var(--red)',
        }} />
        <span style={{
          position: 'absolute', bottom: '-1px', right: '-1px',
          width: '12px', height: '12px',
          borderBottom: '2px solid var(--red)', borderRight: '2px solid var(--red)',
        }} />

        {/* En-tête terminal */}
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '3px',
          color: 'rgba(180,20,20,0.45)',
          marginBottom: '16px',
          paddingBottom: '10px',
          borderBottom: '1px solid var(--border)',
        }}>
          // about.txt
        </p>

        <p style={{ color: 'var(--text-2)', lineHeight: '1.85', marginBottom: '12px' }}>
          {translations[lang].aboutPara1}
        </p>

        <p style={{ color: 'var(--text-2)', lineHeight: '1.85', marginBottom: '12px' }}>
          {translations[lang].aboutPara2}
        </p>
        
        <p style={{ color: 'var(--text-2)', lineHeight: '1.85' }}>
          {translations[lang].aboutPara3}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
