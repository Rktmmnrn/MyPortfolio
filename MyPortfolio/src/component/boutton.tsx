import { ReactNode, MouseEventHandler } from "react";
import { motion } from 'framer-motion'

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover="hover"
      className={`font-bold flex justify-between items-center py-2 px-5 ${className || ''}`}
    >
      {children}
    </motion.button>
  );
}
export default Button; 