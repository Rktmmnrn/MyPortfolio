import { motion } from 'framer-motion';
import { translations, Language } from '../component/i18n';

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
          width: 'min(66%, 600px)',
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
          // cat about.txt
        </p>

        <p style={{ color: 'var(--text-2)', lineHeight: '1.85', marginBottom: '12px' }}>
          {lang === 'en' ? (
            <>
              Passionate about technology, I am a computer science student at the{' '}
              <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>
                École Nationale Informatique de Madagascar (ENI)
              </strong>
              . I enjoy building applications — web and desktop — and constantly push my skills forward.
            </>
          ) : lang === 'fr' ? (
            <>
              Passionné par la technologie, je suis étudiant en informatique à l'{' '}
              <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>
                École Nationale d'Informatique de Madagascar (ENI)
              </strong>
              . J'aime concevoir des applications — web et desktop — et je cherche constamment à faire progresser mes compétences.
            </>
          ) : (
            <>
              Mpankafy teknolojia, mpianatra ho an'ny informatika ao amin'ny{' '}
              <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>
                École Nationale d'Informatique de Madagascar (ENI)
              </strong>
              . Tiako ny manoratra rindrankajy — tranonkala & desktop — ary miezaka hatrany manatsara ny fahaizako.
            </>
          )}
        </p>

        <p style={{ color: 'var(--text-2)', lineHeight: '1.85' }}>
          {lang === 'en' ? (
            <>
              I have worked on various projects involving{' '}
              <span style={{ color: 'var(--red)' }}>front-end development</span>,{' '}
              <span style={{ color: 'var(--red)' }}>databases</span>, and{' '}
              <span style={{ color: 'var(--red)' }}>system programming</span>. Particularly
              interested in network security, design systems, and efficient collaboration.
            </>
          ) : lang === 'fr' ? (
            <>
              J'ai travaillé sur divers projets impliquant du{' '}
              <span style={{ color: 'var(--red)' }}>développement front-end</span>, des{' '}
              <span style={{ color: 'var(--red)' }}>bases de données</span> et de la{' '}
              <span style={{ color: 'var(--red)' }}>programmation système</span>. Participeront particulièrement à la sécurité réseau, aux design systems et à la collaboration efficace.
            </>
          ) : (
            <>
              Efa niasa tamina tetikasa samihafa mifandraika amin'ny fampandrosoana{' '}
              <span style={{ color: 'var(--red)' }}>front-end</span>,{' '}
              <span style={{ color: 'var(--red)' }}>tahirin-kevitra (databases)</span> ary{' '}
              <span style={{ color: 'var(--red)' }}>fandaharana rafitra (system programming)</span>. Mahaliana ahy manokana ny fiarovana tambajotra, design systems ary fiaraha-miasa mahomby.
            </>
          )}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
