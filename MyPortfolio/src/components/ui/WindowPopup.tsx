import { useRef, useEffect, ReactNode, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface WindowPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    size?: 'md' | 'lg' | 'xl';
    onDownload?: () => void;
    downloadLabel?: string;
    children: ReactNode;
}

const SIZE_CLASSES: Record<NonNullable<WindowPopupProps['size']>, string> = {
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-5xl',
};

const WindowPopup = ({
    isOpen,
    onClose,
    title,
    size = 'lg',
    onDownload,
    downloadLabel = 'download',
    children,
}: WindowPopupProps) => {
    const popupRef = useRef<HTMLDivElement>(null);

    // Fermer sur Escape
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose]
    );

    // Fermer si clic en dehors
    useEffect(() => {
        if (!isOpen) return;
        function handleClickOutside(e: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        // Empêcher le scroll du body pendant que la popup est ouverte
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-end py-12 px-4">
                    <motion.div
                        ref={popupRef}
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={`w-full ${SIZE_CLASSES[size]} flex flex-col`}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(180, 20, 20, 0.3)',
                            borderRadius: '3px',
                            boxShadow: '0 0 40px rgba(180, 20, 20, 0.18), 0 25px 60px rgba(0,0,0,0.6)',
                            maxHeight: '90vh',
                            fontFamily: 'var(--sans)',
                            position: 'relative',
                        }}
                    >
                        {/* Coins décoratifs rétro */}
                        <span style={{
                            position: 'absolute', top: '-1px', left: '-1px',
                            width: '12px', height: '12px',
                            borderTop: '2px solid var(--red)', borderLeft: '2px solid var(--red)',
                            pointerEvents: 'none',
                        }} />
                        <span style={{
                            position: 'absolute', bottom: '-1px', right: '-1px',
                            width: '12px', height: '12px',
                            borderBottom: '2px solid var(--red)', borderRight: '2px solid var(--red)',
                            pointerEvents: 'none',
                        }} />

                        {/* ── Barre de titre du terminal ── */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '10px 16px',
                                borderBottom: '1px solid rgba(180, 20, 20, 0.18)',
                                flexShrink: 0,
                            }}
                        >
                            {/* Titre */}
                            <span
                                style={{
                                    fontFamily: 'var(--mono)',
                                    fontSize: '11px',
                                    letterSpacing: '2px',
                                    color: 'rgba(180, 20, 20, 0.65)',
                                }}
                            >
                                // {title.toUpperCase()}
                            </span>

                            {/* Actions : téléchargement + fermeture */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {onDownload && (
                                    <button
                                        onClick={onDownload}
                                        style={{
                                            fontFamily: 'var(--mono)',
                                            fontSize: '10px',
                                            letterSpacing: '1.5px',
                                            color: 'var(--red)',
                                            border: '1px solid rgba(180, 20, 20, 0.35)',
                                            padding: '3px 8px',
                                            borderRadius: '2px',
                                            cursor: 'pointer',
                                            background: 'transparent',
                                            transition: 'all 0.2s',
                                            textTransform: 'uppercase',
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(180,20,20,0.1)';
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                                        }}
                                    >
                                        ↓ {downloadLabel}
                                    </button>
                                )}
                                <button
                                    onClick={onClose}
                                    aria-label="Fermer"
                                    style={{
                                        fontFamily: 'var(--mono)',
                                        fontSize: '10px',
                                        letterSpacing: '1px',
                                        color: 'var(--text-3)',
                                        border: '1px solid var(--border)',
                                        padding: '3px 7px',
                                        borderRadius: '2px',
                                        cursor: 'pointer',
                                        background: 'transparent',
                                        transition: 'all 0.2s',
                                        textTransform: 'uppercase',
                                    }}
                                    onMouseEnter={e => {
                                        const btn = e.currentTarget as HTMLButtonElement;
                                        btn.style.color = 'var(--text-1)';
                                        btn.style.borderColor = 'var(--border-md)';
                                    }}
                                    onMouseLeave={e => {
                                        const btn = e.currentTarget as HTMLButtonElement;
                                        btn.style.color = 'var(--text-3)';
                                        btn.style.borderColor = 'var(--border)';
                                    }}
                                >
                                    [X]
                                </button>
                            </div>
                        </div>

                        {/* ── Contenu scrollable ── */}
                        <div
                            style={{
                                overflowY: 'auto',
                                flexGrow: 1,
                                // Style personnalisé de la scrollbar
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(180,20,20,0.3) transparent',
                            }}
                        >
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WindowPopup;