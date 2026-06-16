import { motion } from 'framer-motion';
import { translations, Language } from '../component/i18n';

type ExperienceProps = { lang: Language };

const getExperiences = (lang: Language) => [
  {
    entreprise: 'École Nationale Informatique',
    poste: translations[lang].eniPoste,
    lien: 'https://eni.mg/',
    periode: lang === 'en' ? '2023 — today' : lang === 'fr' ? "2023 — aujourd'hui" : '2023 — ankehitriny',
    description: translations[lang].eniDesc,
  },
  {
    entreprise: 'SAHA Technology',
    poste: translations[lang].sahaPoste,
    lien: 'https://saha-technology.com/fr',
    periode: lang === 'en' ? 'Dec 2024 — Jan 2025' : lang === 'fr' ? 'Déc 2024 — Jan 2025' : 'Des 2024 — Jan 2025',
    description: translations[lang].sahaDesc,
  },
];

const Experience = ({ lang }: ExperienceProps) => {
  const experiences = getExperiences(lang);

  return (
    <section id="Exp" className="flex-col lg:flex-row-reverse">
      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {translations[lang].experiencesTitle}
      </motion.h2>

      <div
        style={{
          width: 'min(100%, 600px)',
          borderLeft: '2px solid rgba(180,20,20,0.3)',
          paddingLeft: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group bg-[#131313] border border-[rgba(180,20,20,0.18)] hover:border-[rgba(180,20,20,0.4)] hover:shadow-[0_0_18px_rgba(180,20,20,0.08)] rounded-[3px] p-[22px_24px] relative transition-all duration-300"
          >
            {/* Point sur la timeline */}
            <span
              style={{
                position: 'absolute',
                left: '-37px', top: '22px',
                width: '10px', height: '10px',
                borderRadius: '50%',
                background: 'var(--bg)',
                border: '2px solid var(--red)',
                boxShadow: '0 0 8px var(--red-glow)',
              }}
            />

            {/* Poste */}
            <h3
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '15px',
                fontWeight: 600,
                color: 'var(--text-1)',
                marginBottom: '4px',
                textTransform: 'none',
                letterSpacing: '0',
                justifyContent: 'flex-start',
                gap: '0',
              }}
            >
              {exp.poste}
              <a
                href={exp.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[var(--text-3)] no-underline ml-2.5 transition-colors duration-200 hover:text-[var(--red)]"
              >
                — {exp.entreprise}
              </a>
            </h3>

            {/* Date */}
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '2px',
                color: 'var(--red)',
                opacity: 0.6,
                marginBottom: '12px',
              }}
            >
              {exp.periode}
            </p>

            {/* Description */}
            <p style={{ color: 'var(--text-2)', fontSize: '13px', lineHeight: '1.8' }}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
