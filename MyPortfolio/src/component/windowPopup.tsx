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
                <motion.div
                    ref={popupRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-0 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-50 w-full ${className || ''}`}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;