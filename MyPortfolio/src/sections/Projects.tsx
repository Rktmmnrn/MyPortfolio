import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiInfo } from 'react-icons/fi';

import { projectsData, ProjectCategory, ProjectType } from '../components/ui/SkillsData';
import TagPill from '../components/ui/TagPill';
import WindowPopup from '../components/ui/WindowPopup';
import { translations, Language } from '../data/i18n';

type ProjectsProps = { lang: Language };

const FILTERS: { key: ProjectCategory | 'all'; labelKey: keyof typeof translations.en }[] = [
    { key: 'all', labelKey: 'filterAll' },
    { key: 'web', labelKey: 'filterWeb' },
    { key: 'desktop', labelKey: 'filterDesktop' },
    { key: 'network', labelKey: 'filterNetwork' },
];

// Contenu de la popup de détails d'un projet
const ProjectDetailContent = ({
    project,
    t,
}: {
    project: ProjectType;
    t: typeof translations.en;
}) => {
    const [activeImg, setActiveImg] = useState(0);
    const gallery = project.gallery ?? [project.image];

    return (
        <div style={{ padding: '24px' }}>
            {/* Galerie d'images */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
                <img
                    src={gallery[activeImg]}
                    alt={`${project.name} — vue ${activeImg + 1}`}
                    style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        borderRadius: '2px',
                        display: 'block',
                        border: '1px solid var(--border)',
                    }}
                />
                {/* Miniatures si plusieurs images */}
                {gallery.length > 1 && (
                    <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                        {gallery.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImg(idx)}
                                style={{
                                    padding: 0,
                                    border: idx === activeImg
                                        ? '2px solid var(--red)'
                                        : '2px solid var(--border)',
                                    borderRadius: '2px',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    transition: 'border-color 0.2s',
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`miniature ${idx + 1}`}
                                    style={{ width: '60px', height: '42px', objectFit: 'cover', display: 'block' }}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Nom du projet */}
            <h3
                style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text-1)',
                    marginBottom: '8px',
                    textTransform: 'none',
                    letterSpacing: '0',
                    justifyContent: 'flex-start',
                }}
            >
                {project.name}
            </h3>

            {/* Catégorie */}
            <p
                style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '10px',
                    letterSpacing: '2px',
                    color: 'var(--red)',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    opacity: 0.8,
                }}
            >
                // {project.category}
            </p>

            {/* Description */}
            <p
                style={{
                    color: 'var(--text-2)',
                    fontSize: '13px',
                    lineHeight: '1.8',
                    marginBottom: '20px',
                }}
            >
                {t[project.descKey] as string}
            </p>

            {/* Stack */}
            <div style={{ marginBottom: '24px' }}>
                <p
                    style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '10px',
                        letterSpacing: '2px',
                        color: 'var(--text-3)',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                    }}
                >
                    // stack
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {project.stack.map((tech) => (
                        <TagPill key={tech}>{tech}</TagPill>
                    ))}
                </div>
            </div>

            {/* Lien externe */}
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="prj-view"
                style={{ alignSelf: 'flex-start', display: 'inline-flex' }}
            >
                {project.linkType === 'live' ? <FiExternalLink size={13} /> : <FiGithub size={13} />}
                {project.linkType === 'live' ? t.viewLive : t.viewCode}
            </a>
        </div>
    );
};

// Composant principal Projects
const Projects = ({ lang }: ProjectsProps) => {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    const t = translations[lang];

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') return projectsData;
        return projectsData.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <>
            <section id="Prj" className="flex-col w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    {t.projectsTitle}
                </motion.h2>

                {/* Filtres */}
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

                {/* Grille de projets */}
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
                                    border: project.featured
                                        ? '1px solid var(--border-md)'
                                        : '1px solid var(--border)',
                                }}
                            >
                                {project.featured && (
                                    <span className='prj-span-featured'>{t.featuredTag}</span>
                                )}

                                {/* Image — redirection vers le lien du projet */}
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
                                    <h3>{project.name}</h3>

                                    <p style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: '1.6', margin: '0 0 14px' }}>
                                        {t[project.descKey] as string}
                                    </p>

                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                                        {project.stack.map((tech) => (
                                            <TagPill key={tech}>{tech}</TagPill>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='prj-view'
                                        >
                                            {project.linkType === 'live'
                                                ? <FiExternalLink size={13} />
                                                : <FiGithub size={13} />}
                                            {project.linkType === 'live' ? t.viewLive : t.viewCode}
                                        </a>

                                        {/* Bouton Détails */}
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className='prj-details'
                                        >
                                            <FiInfo size={13} />
                                            {t.detailsBtn}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* ── Popup Détails du projet ── */}
            <WindowPopup
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                title={selectedProject ? `${selectedProject.name}.project` : ''}
                size="lg"
            >
                {selectedProject && (
                    <ProjectDetailContent project={selectedProject} t={t} />
                )}
            </WindowPopup>
        </>
    );
};

export default Projects;
