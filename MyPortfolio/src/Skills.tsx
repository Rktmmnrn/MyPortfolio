import { useState } from 'react';
import skillsData from './component/SkillsData'
import { motion } from 'framer-motion'

const skills = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleProjects = (index: number) => {
    setActiveSection(prev => (prev === index ? null : index));
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Skills & Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 2xl:grid-cols-3">
        {skillsData.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 items-center justify-center rounded-xl shadow-lg"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold capitalize">
              <span className="w-7 h-7 flex items-center justify-center">{section.icon}</span>
              {section.title}
            </h3>

            <div className='w-full'>
              <button
                onClick={() => toggleProjects(index)}
                className="text-sm px-3 py-1 border rounded hover:bg-gray-200"
              >
                {activeSection === index ? 'Cacher projets' : 'Voir projets'}
              </button>
            </div>
            {activeSection === index && (
              <div className="grid grid-cols-1 gap-4 mt-4">
                {section.projects?.map((project, i) => (
                  <div key={i} className="border rounded-lg p-3 flex gap-3 items-center hover:shadow transition">
                    <img key={project.name} src={project.image} alt={project.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                  </div>
                ))
                }
              </div>
            )}

            <div className="overflow-hidden flex w-full">
              <div className={index === 0 ? 'auto-scroll' : 'auto'}>
                {section.items?.map((item, j) => (
                  <div key={j} className='flex flex-col items-center relative justify-center w-[80px] h-[70px] group overflow-hidden'>
                    <img key={item.name} src={item.icon} alt={item.name} className="w-12 h-12 object-contain Skills-div-img group-hover:translate-y-[-4px]" title={item.name} />
                    <p className='font-light transition-transform translate-y-full duration-300 group-hover:translate-y-0  group-hover:flex'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default skills;