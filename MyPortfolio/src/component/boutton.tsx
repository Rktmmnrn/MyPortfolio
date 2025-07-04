import { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const color1 = '#800000';

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button
    onClick={onClick}
    style={{
        color: 'white',
        backgroundColor: color1,
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textTransform: 'capitalize',
        alignItems: 'center',
        borderRadius: '50px',
        padding: '10px 20px',
        gap: '10px'
        }}>
        {children}
    </button>
  );
}
export default Button; 