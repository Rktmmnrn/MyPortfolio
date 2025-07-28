import { useState, useRef, useEffect } from 'react';
import skillsData from './component/SkillsData'
import { AnimatePresence, motion } from 'framer-motion'
import {FaFolderOpen} from 'react-icons/fa'

const skills = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setActiveSection(null);
      }
    }
    if (activeSection !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSection]);

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
            className="grid grid-cols-1 gap-4 items-center justify-center rounded-xl shadow-lg px-2"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold capitalize">
              <span className="w-7 h-7 flex items-center justify-center">{section.icon}</span>
              {section.title}
            </h3>

            <div className='w-full relative'>
              <FaFolderOpen
                size={40}
                className="w-10 h-10 cursor-pointer hover:scale-110 transition"
                onClick={() => toggleProjects(index)}
                title={activeSection === index ? 'Cacher projets' : 'Voir projets'}
              />
              <AnimatePresence>
                {activeSection === index && (
                  <motion.div
                    ref={popupRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-12 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-50 min-w-[250px]"
                  >
                    <h4 className="font-bold mb-2">Mes projets</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {section.projects?.map((project, i) => (
                        <div key={i} className="border rounded-lg p-2 flex gap-2 items-center hover:shadow transition">
                          <img src={project.image} alt={project.name} className="w-12 h-12 object-cover rounded" />
                          <div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <h5 className="font-semibold text-sm">{project.name}</h5>
                            </a>
                            <p className="text-xs text-gray-600">{project.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="overflow-hidden flex w-full">
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
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default skills;