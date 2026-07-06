import { motion } from 'framer-motion';
import { translations, Language } from '../data/i18n';

type ExperienceProps = { lang: Language };

const getExperiences = (lang: Language) => [
  {
    entreprise: 'École Nationale Informatique',
    poste: translations[lang].eniPoste,
    lien: 'https://eni.mg/',
    periode: translations[lang].eniPeriode,
    description: translations[lang].eniDesc,
  },
  {
    entreprise: 'SAHA Technology',
    poste: translations[lang].sahaPoste,
    lien: 'https://saha-technology.com/fr',
    periode: translations[lang].sahaPeriode,
    description: translations[lang].sahaDesc,
  },
  {
    entreprise: 'ENEAM',
    poste: translations[lang].eneamPoste,
    lien: 'https://eneam.mg/',
    periode: translations[lang].eneamPeriode,
    description: translations[lang].eneamDesc,
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
            className="group bg-[#131313] border border-[var(--border)] hover:border-[var(--border-md)] hover:shadow-[0_0_18px_var(--red-faint)] rounded-[3px] p-[22px_24px] relative transition-all duration-300"
          >
            {/* Point sur la timeline */}
            <span
              style={{
                position: 'relative',
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
                className="border rounded-[5px] py-1 px-2 font-mono text-[11px] text-[var(--text-3)] no-underline ml-2.5 transition-colors duration-200 hover:text-[var(--red)]"
              >
                — {exp.entreprise}
              </a>
            </h3>

            {/* Date */}
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                letterSpacing: '2px',
                color: 'var(--red)',
                opacity: 1,
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
