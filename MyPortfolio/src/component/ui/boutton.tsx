import { ReactNode, MouseEventHandler, CSSProperties } from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
};

const Button = ({ children, onClick, className, style }: ButtonProps) => (
  <motion.button
    onClick={onClick}
    whileHover="hover"
    style={style}
    className={`font-bold flex justify-between items-center py-2 px-5 ${className || ''}`}
  >
    {children}
  </motion.button>
);

export default Button;
