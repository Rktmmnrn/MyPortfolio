import { motion } from 'framer-motion';
import Vector from '../component/ui/vector';
import Card from '../component/ui/Card';
import mail from '../assets/icons/mail.svg';
import git from '../assets/icons/github-icon-1.svg';
import lnkdn from '../assets/icons/linkedin-svgrepo-com.svg';
import { translations, Language } from '../data/i18n';

type ContactProps = { lang: Language };

const links = [
  { href: 'mailto:rfanomezaniavo@gmail.com', icon: mail, label: 'rfanomezaniavo@gmail.com' },
  { href: 'https://github.com/Rktmmnrn', icon: git, label: 'github.com/Rktmmnrn' },
  { href: 'https://linkedin.com/in/fenohery-maminiriana', icon: lnkdn, label: 'linkedin / fenohery-maminiriana' },
];

const Contact = ({ lang }: ContactProps) => (
  <section id="Contct" className="flex-col lg:flex-row-reverse">
    <motion.h2
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {translations[lang].contactTitle}
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      style={{
        minWidth: 'min(100%, 420px)',
      }}
    >
      <Card label='./Connect.sh'>
        <p style={{ color: 'var(--text-2)', marginBottom: '20px', lineHeight: '1.7', fontSize: '14px' }}>
          {translations[lang].contactDesc}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {links.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-3 p-[11px_14px] border border-[rgba(180,20,20,0.18)] hover:border-[rgba(180,20,20,0.4)] hover:text-white hover:bg-[rgba(180,20,20,0.07)] hover:shadow-[0_0_12px_rgba(180,20,20,0.35)] rounded-[2px] font-mono text-xs text-[var(--text-3)] no-underline transition-all duration-200"
              style={{ letterSpacing: '1px' }}
            >
              <Vector nameVector={icon} style={{ width: '16px', flexShrink: 0, filter: 'invert(0.35)' }} />
              <span style={{ color: 'var(--text-2)', fontSize: '11px' }}>{label}</span>
            </a>
          ))}
        </div>
      </Card>
    </motion.div>
  </section>
);

export default Contact;
