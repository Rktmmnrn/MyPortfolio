import { useEffect, useState } from 'react';
import { projectsData } from '../ui/SkillsData';
import skillsData from '../ui/SkillsData';
import { translations } from '../../data/i18n';

// ── Calcul des métriques réelles du portfolio ──────────────────────────────
const NB_PROJECTS = projectsData.length;
const NB_SKILL_CATEGORIES = skillsData.length;
const NB_TECHNOLOGIES = skillsData.reduce((acc, g) => acc + g.items.length, 0);
const NB_EXPERIENCES = Object.values(translations.en).filter(
  (_, idx) => ['eniPoste', 'sahaPoste', 'eneamPoste'].includes(Object.keys(translations.en)[idx])
).length || 3;

const BOOT_LINES = [
  `Initializing neural core...`,
  `Scanning ${NB_SKILL_CATEGORIES} skill categories (${NB_TECHNOLOGIES} technologies)...`,
  `Mounting ${NB_PROJECTS} projects into memory...`,
  `Loading ${NB_EXPERIENCES} experience records...`,
  `System ready. Welcome to the grid.`,
];

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const duration = 1800; // ms
    const intervalMs = 20;
    const totalSteps = duration / intervalMs;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(nextProgress);

      const lineIndex = Math.floor((nextProgress / 100) * BOOT_LINES.length);
      setActiveLine(Math.min(lineIndex, BOOT_LINES.length - 1));

      if (nextProgress === 100) clearInterval(timer);
    }, intervalMs);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0d0d] flex items-center justify-center p-4">
      <div
        style={{
          width: 'min(90%, 520px)',
          background: '#131313',
          border: '1px solid rgba(180, 20, 20, 0.3)',
          borderRadius: '3px',
          padding: '24px',
          position: 'relative',
          boxShadow: '0 0 40px rgba(180, 20, 20, 0.15)',
        }}
      >
        {/* Coins décoratifs rétro */}
        <span style={{
          position: 'absolute', top: '-1px', left: '-1px',
          width: '10px', height: '10px',
          borderTop: '2px solid #b41414', borderLeft: '2px solid #b41414',
        }} />
        <span style={{
          position: 'absolute', bottom: '-1px', right: '-1px',
          width: '10px', height: '10px',
          borderBottom: '2px solid #b41414', borderRight: '2px solid #b41414',
        }} />

        {/* Barre d'en-tête du terminal */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(180, 20, 20, 0.18)',
          paddingBottom: '10px',
          marginBottom: '16px',
          fontSize: '11px',
          letterSpacing: '2px',
          color: 'rgba(180, 20, 20, 0.6)',
          fontFamily: 'var(--mono)',
        }}>
          <span>// BOOT_SEQUENCE.SH</span>
          <span style={{
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: '#b41414',
            boxShadow: '0 0 6px #b41414',
            animation: 'status-pulse 1.5s ease-in-out infinite',
          }} />
        </div>

        {/* Lignes de commande du terminal */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '12px',
          color: '#9a9a9a',
          minHeight: '120px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <p style={{ color: 'rgba(180, 20, 20, 0.7)' }}>
            user@portfolio:~$ ./load_assets.sh
          </p>
          {BOOT_LINES.slice(0, activeLine + 1).map((line, idx) => (
            <p key={idx} style={{ color: idx === activeLine ? '#e2e2e2' : '#9a9a9a' }}>
              <span style={{ color: '#b41414', opacity: 0.6 }}>&gt;</span> {line}
              {idx === activeLine && progress < 100 && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '12px',
                    background: '#b41414',
                    marginLeft: '4px',
                    verticalAlign: 'middle',
                    animation: 'blink-cursor 1s step-end infinite',
                  }}
                />
              )}
            </p>
          ))}
        </div>

        {/* Barre de progression */}
        <div style={{ marginTop: '20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            color: 'rgba(180, 20, 20, 0.8)',
            marginBottom: '6px',
            letterSpacing: '1px',
          }}>
            <span>SYSTEM_LOAD</span>
            <span>{progress}%</span>
          </div>

          <div style={{
            height: '6px',
            background: '#0d0d0d',
            border: '1px solid rgba(180, 20, 20, 0.18)',
            borderRadius: '1px',
            overflow: 'hidden',
          }}>
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: '#b41414',
                boxShadow: '0 0 10px rgba(180, 20, 20, 0.8)',
                transition: 'width 0.05s ease-out',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;