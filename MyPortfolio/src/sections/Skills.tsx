import skillsData from '../component/SkillsData'
import { motion } from 'framer-motion'

import { translations, Language } from '../component/i18n';

type SkillsProps = { lang: Language };

const Skills = ({ lang }: SkillsProps) => {
  const t = translations[lang];

  return (
    <section id='Skl' className="flex-col lg:flex-row w-full">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {t.skillsTitle}
      </motion.h2>

      <div className="flex flex-col gap-[28px] w-full m-w-[720px]">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 items-center justify-center rounded-xl"
          >
            <h3
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-1)',
                textTransform: 'capitalize',
                letterSpacing: '0',
                justifyContent: 'flex-start',
                gap: '8px',
                marginBottom: '14px',
              }}
            >
              <span className="flex items-center justify-center" style={{ color: 'var(--red)' }}>{group.icon}</span>
              {t[group.title] as string}
            </h3>

            <div className='flex gap-2' style={{ flexWrap: 'wrap' }}>
              {group.items.map((item) =>
                <div
                  key={item.name}
                  title={item.name}
                  className='flex items-center gap-2'
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    padding: '7px 12px',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                    className="Skills-div-img"
                  />
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      letterSpacing: '0.5px',
                      color: 'var(--text-2)',
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              )}
            </div>
          </motion.div >
        ))}
      </div >
    </section>
  )
}

export default Skills;