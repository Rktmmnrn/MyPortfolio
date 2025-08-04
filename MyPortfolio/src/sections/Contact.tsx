import { motion } from 'framer-motion'
import Vector from '../component/vector'

import mail from '../assets/icons/mail.svg'
import git from '../assets/icons/github-icon-1.svg'
import lnkdn from '../assets/icons/linkedin-svgrepo-com.svg'

const Contact = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=""
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <p className="text-gray-700 mb-4">
          I'm currently open to new opportunities and collaborations. Feel free to reach out to me!
        </p>

        <div className="flex flex-col gap-3">
          <a href="mailto:rfanomezaniavo@gmail.com" rel="noopener noreferrer" target="_blank" className="text-[#800000] font-semibold hover:underline flex gap-2">
            <Vector nameVector={mail} style={{width: '20px'}}></Vector> rfanomezaniavo@gmail.com
          </a>
          <a href="https://github.com/Rktmmnrn" rel="noopener noreferrer" target="_blank" className="text-[#800000] font-semibold hover:underline flex gap-2">
            <Vector nameVector={git} style={{width: '20px'}}></Vector> GitHub
          </a>
          <a href="https://linkedin.com/in/fenohery-maminiriana" rel="noopener noreferrer" target="_blank" className="text-[#800000] font-semibold hover:underline flex gap-2">
            <Vector nameVector={lnkdn} style={{width: '20px'}}></Vector> LinkedIn
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
