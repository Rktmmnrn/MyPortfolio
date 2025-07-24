import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
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
          Passionate about technology and problem solving, I am a computer science student at the National School of Informatics (ENI Madagascar). I love building functional and elegant interfaces, and I constantly seek to improve my skills in web and software development.
        </p>
        <p className="mt-4">
          I have already worked on various projects involving front-end development, databases, and system programming. I'm particularly interested in clean code, design systems, and efficient collaboration.
        </p>
      </motion.div>
    </>
  );
};

export default About;
