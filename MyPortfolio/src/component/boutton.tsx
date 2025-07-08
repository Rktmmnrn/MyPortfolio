import { ReactNode, MouseEventHandler } from "react";
import { motion } from 'framer-motion'

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <motion.button
    onClick={onClick}
    whileHover="hover"
    className="text-white bg-[#800000] font-bold flex flex-row justify-between capitalize items-center rounded-[50px] py-2 px-5 gap-2"
    >
    {children}
    </motion.button>
  );
}
export default Button; 