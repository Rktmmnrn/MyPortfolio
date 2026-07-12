import { motion } from 'framer-motion';
import { translations, Language } from '../data/i18n';
import Card from '../component/ui/Card';

type AboutProps = { lang: Language };

const About = ({ lang }: AboutProps) => {
  return (
    <section id="Abt" className="flex-col lg:flex-row">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='min-w-[148px]'
      >
        {translations[lang].aboutTitle}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      >
        <Card label='./about.txt'>
          <p style={{ color: 'var(--text-2)', lineHeight: '1.85', marginBottom: '12px' }}
            dangerouslySetInnerHTML={{ __html: translations[lang].aboutPara1 }} />

          <p style={{ color: 'var(--text-2)', lineHeight: '1.85', marginBottom: '12px' }}
            dangerouslySetInnerHTML={{ __html: translations[lang].aboutPara2 }} />

          <p style={{ color: 'var(--text-2)', lineHeight: '1.85' }}
            dangerouslySetInnerHTML={{ __html: translations[lang].aboutPara3 }} />
        </Card>
      </motion.div>
    </section>
  );
};

export default About;
