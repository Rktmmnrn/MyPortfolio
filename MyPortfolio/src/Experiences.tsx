import { motion } from 'framer-motion';

const experiences = [
  {
    entreprise: 'ecole national informatique',
    poste: 'general computer science student',
    lien:'https://eni.mg/',
    periode: '2023 - today',
    description:
      'I made several mini projects with different programming langages like PHP, VueJS, C#, C++, C and Java.',
  },
  {
    entreprise: 'SAHA Technology',
    poste: 'Front-End developer',
    lien:'https://saha-technology.com/fr',
    periode: 'December 2024 - January 2025',
    description:
      'Modern and responsive interface integration with HTML, JS and TailwindCss. Collaboration with designers and developers for better progress.',
  },
];

const Experience = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="">
        experiences
      </motion.h2>

      <div className="relative border-l-4 border-[#800000] pl-6 space-y-12 flex flex-col w-2/3">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-md shadow-md relative flex flex-col group"
          >
            <span className="flex items-center justify-center absolute -left-[35px] top-0 w-5 h-5 bg-[#800000] border-3 border-[#800000] group-hover:border-gray-200 rounded-full"></span>

            <h3 className="text-xl font-semibold group flex items-center">    
              <span>{exp.poste}</span>
              <a href={exp.lien} target="_blank" className="flex relative text-sm text-gray-500 z-1 pb-1 overflow-hidden"> — {exp.entreprise}</a>
            </h3>
            <p className="text-sm text-gray-400 italic">{exp.periode}</p>
            <p className="text-gray-700 mt-2 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;
