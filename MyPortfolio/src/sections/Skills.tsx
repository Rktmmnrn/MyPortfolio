import { useState } from 'react';
import skillsData from '../component/SkillsData'
import { motion } from 'framer-motion'

import Popup from '../component/windowPopup';
import Btn from '../component/boutton'
import { translations, Language } from '../component/i18n';

type SkillsProps = { lang: Language };

const getCategoryTitle = (title: string, lang: Language) => {
  if (lang === 'fr') {
    if (title === 'web & database') return 'web & bases de données';
    if (title === 'system & logiciel') return 'système & logiciel';
    if (title === 'network & tools') return 'réseau & outils';
    if (title === 'others') return 'autres';
  }
  if (lang === 'mg') {
    if (title === 'web & database') return 'tranonkala & tahirin-kevitra';
    if (title === 'system & logiciel') return 'rafitra & rindrankajy';
    if (title === 'network & tools') return 'tambajotra & fitaovana';
    if (title === 'others') return 'hafa';
  }
  return title;
};

const Skills = ({ lang }: SkillsProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleProjects = (index: number) => {
    setActiveSection(prev => {
      const newValue = prev === index ? null : index;
      console.log('Toggle:', { prev, index, newValue });
      return newValue;
    });
  };

  return (
    <section id='Skl' className="flex-col lg:flex-row">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {translations[lang].skillsTitle}
      </motion.h2>

      <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 2xl:grid-cols-3">
        {skillsData.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 items-center justify-center rounded-xl shadow-[0px_0px_10px_rgb(128,0,0)] px-2 backdrop-blur-md"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold capitalize">
              <span className="w-7 h-7 flex items-center justify-center">{section.icon}</span>
              {getCategoryTitle(section.title, lang)}
            </h3>

            <div className='w-full relative'>
              {section.projects?.[0] && (
                <a href={section.projects[0].link} target='_blank' rel="noopener noreferrer">
                  <img
                    src={section.projects[0].image}
                    alt={section.projects[0].name}
                    className="w-full h-60 object-cover rounded-lg hover:scale-102 transition-all duration-300"
                  />
                </a>
              )}
              {section.title !== 'others' && (
                <Btn
                  className='my-4 capitalize rounded bg-[#800000] text-white hover:bg-transparent hover:text-[#800000] border-1 border-[#800000] transition-all duration-200'
                  onClick={() => toggleProjects(index)}
                >
                  {activeSection === index ? translations[lang].viewLess : translations[lang].viewAll}
                </Btn>
              )}
            </div>

            {/* Popup */}
            <Popup isOpen={activeSection === index} onClose={() => setActiveSection(null)}>
              <h4 className="font-bold mb-2">{translations[lang].myProjects}</h4>
              <div className="grid grid-cols-1 gap-4">
                {section.projects?.map((project, i) => (
                  <div key={i} className="border border-[rgba(180,20,20,0.18)] rounded-lg p-2 flex gap-2 items-center hover:shadow transition">
                    <img src={project.image} alt={project.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <h5 className="font-semibold text-sm">{project.name}</h5>
                      </a>
                      <p className="text-xs text-[var(--text-2)]">
                        {project.descKey ? (translations[lang] as any)[project.descKey] : project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Popup>

            <div className="overflow-hidden flex w-full"> {/* Skills icons */}
              <div className={index === 0 ? 'auto-scroll' : 'auto'}>
                {section.items?.map((item, j) => (
                  <div key={j} className='flex flex-col items-center relative justify-center w-[80px] h-[70px] group overflow-hidden'>
                    <img key={item.name} src={item.icon} alt={item.name}
                      className="w-12 h-12 object-contain Skills-div-img group-hover:translate-y-[-4px]"
                      title={item.name}
                    />
                    <p className='font-light transition-transform translate-y-full duration-300 group-hover:translate-y-0  group-hover:flex'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div >
        ))}
      </div >
    </section>
  )
}

export default Skills;