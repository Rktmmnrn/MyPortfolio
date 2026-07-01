import { useRef, useEffect, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
}

const Popup = ({ isOpen, onClose, children, className }: PopupProps) => {
    const popupRef = useRef<HTMLDivElement>(null);

    // Fermer si click en dehors
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <motion.div
                        ref={popupRef}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-[#131313] border border-[rgba(180,20,20,0.3)] shadow-[0_0_30px_rgba(180,20,20,0.15)] rounded p-6 max-w-md w-full relative ${className || ''}`}
                        style={{ fontFamily: 'var(--sans)' }}
                    >
                        {/* Coins décoratifs */}
                        <span style={{
                            position: 'absolute', top: '-1px', left: '-1px',
                            width: '10px', height: '10px',
                            borderTop: '2px solid var(--red)', borderLeft: '2px solid var(--red)',
                        }} />
                        <span style={{
                            position: 'absolute', bottom: '-1px', right: '-1px',
                            width: '10px', height: '10px',
                            borderBottom: '2px solid var(--red)', borderRight: '2px solid var(--red)',
                        }} />

                        {/* Bouton de fermeture */}
                        <button 
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
                            style={{ fontFamily: 'var(--mono)', fontSize: '11px', cursor: 'pointer' }}
                        >
                            [X]
                        </button>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Popup;