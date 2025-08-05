import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='Abt' className="flex-col lg:flex-row">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true}}
        className=""
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-lg shadow-md leading-relaxed text-gray-700 w-2/3"
      >
        <p>
          Passionate about technology, I am a computer science student at the National School of Informatics (Ecole National Informatique de Madagascar).
          I like building some applications (web and desktop), and I constantly seek to improve my skills in web and software development.
        </p>
        <p className="mt-2">
          I have already worked on various projects involving front-end development, databases, and system programming.
          I'm particularly interested in network security, design systems, and efficient collaboration.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
