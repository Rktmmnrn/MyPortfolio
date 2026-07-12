import skillsData from '../component/ui/SkillsData'
import { motion } from 'framer-motion'

import { translations, Language } from '../data/i18n';

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
        className='min-w-[125px]'
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
            className="grid grid-cols-1 gap-4 items-center justify-center rounded-xl w-full"
          >
            <h3>
              <span className="flex items-center justify-center" style={{ color: 'var(--red)' }}>{group.icon}</span>
              {t[group.title] as string}
            </h3>

            <div className='flex gap-2' style={{ flexWrap: 'wrap' }}>
              {group.items.map((item) =>
                <div
                  key={item.name}
                  title={item.name}
                  className='Skills-div-stacklist flex items-center gap-2'
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    className="Skills-div-img"
                  />
                  <span
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