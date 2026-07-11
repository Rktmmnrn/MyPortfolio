import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { projectsData, ProjectCategory } from '../component/ui/SkillsData';
import { translations, Language } from '../data/i18n';

type ProjectsProps = { lang: Language };

const FILTERS: { key: ProjectCategory | 'all'; labelKey: keyof typeof translations.en }[] = [
    { key: 'all', labelKey: 'filterAll' },
    { key: 'web', labelKey: 'filterWeb' },
    { key: 'desktop', labelKey: 'filterDesktop' },
    { key: 'network', labelKey: 'filterNetwork' },
];

const Projects = ({ lang }: ProjectsProps) => {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
    const t = translations[lang];

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') return projectsData;
        return projectsData.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="Prj" className="flex-col w-full">
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            >
                {t.projectsTitle}
            </motion.h2>

            <div className='prj-filter'>
                {FILTERS.map((f) => {
                    const isActive = activeFilter === f.key;
                    return (
                        <button
                            key={f.key}
                            onClick={() => setActiveFilter(f.key)}
                            style={{
                                fontFamily: 'var(--mono)',
                                fontSize: '11px',
                                letterSpacing: '1px',
                                padding: '7px 16px',
                                borderRadius: '2px',
                                cursor: 'pointer',
                                border: isActive ? '1px solid var(--red)' : '1px solid var(--border)',
                                background: isActive ? 'var(--red)' : 'transparent',
                                color: isActive ? 'var(--bg)' : 'var(--text-3)',
                                transition: 'all 0.2s',
                                textTransform: 'lowercase',
                            }}
                        >
                            {t[f.labelKey]}
                        </button>
                    );
                })}
            </div>

            <div>
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.name}
                            layout
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.4 }}
                            className="group"
                            style={{
                                border: project.featured ? '1px solid var(--border-md)' : '1px solid var(--border)',
                            }}
                        >
                            {project.featured && (
                                <span className='prj-span-featured'>
                                    {t.featuredTag}
                                </span>
                            )}

                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='w-full'>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    loading="lazy"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                    style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
                                />
                            </a>

                            <div
                                style={{ padding: '12px 15px' }}
                                className='flex flex-col items-start justify-between h-full w-full'
                            >
                                <h3>
                                    {project.name}
                                </h3>

                                <p style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: '1.6', margin: '0 0 14px' }}>
                                    {t[project.descKey] as string}
                                </p>

                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            style={{
                                                fontFamily: 'var(--mono)',
                                                fontSize: '9px',
                                                letterSpacing: '1px',
                                                color: 'var(--red)',
                                                border: '1px solid var(--border)',
                                                padding: '3px 8px',
                                                borderRadius: '2px',
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='prj-view'
                                    style={{}}
                                >
                                    {project.linkType === 'live' ? (
                                        <FiExternalLink size={13} />
                                    ) : (
                                        <FiGithub size={13} />
                                    )}
                                    {project.linkType === 'live' ? t.viewLive : t.viewCode}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
