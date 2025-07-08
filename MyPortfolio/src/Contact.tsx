import { motion } from 'framer-motion'
import Vector from './component/vector'

import mail from './assets/icons/mail.svg'
import { Fa500Px } from 'react-icons/fa'
import git from './assets/icons/github-icon-1.svg'
import lnkdn from './assets/icons/linkedin-svgrepo-com.svg'

const Contact = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=""
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <p className="text-gray-700 mb-4">
          I'm currently open to new opportunities and collaborations. Feel free to reach out to me!
        </p>

        <div className="flex flex-col gap-3">
          <a href="mailto:rfanomezaniavo@gmail.com" className="text-[#800000] font-semibold hover:underline flex gap-2">
            <Vector nameVector={mail} style={{width: '20px'}}></Vector> rfanomezaniavo@gmail.com
            {/* // <Fa500Px size={50}/> */}
          </a>
          <a href="https://github.com/Rktmmnrn" target="_blank" className="text-[#800000] font-semibold hover:underline flex gap-2">
            <Vector nameVector={git} style={{width: '20px'}}></Vector> GitHub
          </a>
          <a href="https://linkedin.com/in/fenohery-maminiriana" target="_blank" className="text-[#800000] font-semibold hover:underline flex gap-2">
            <Vector nameVector={lnkdn} style={{width: '20px'}}></Vector> LinkedIn
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
