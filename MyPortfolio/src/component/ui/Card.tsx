import { ReactNode, CSSProperties } from 'react';
import CornerAccents from './CornerAccents';

type CardProps = {
  children: ReactNode;
  label?: string;
  className?: string;
  style?: CSSProperties;
  showCorners?: boolean;
};

const Card = ({ children, label, className, style, showCorners = true }: CardProps) => (
  <div
    className={className}
    style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-card)',
      borderRadius: '3px',
      padding: '28px 32px',
      position: 'relative',
      ...style,
    }}
  >
    {showCorners && <CornerAccents />}

    {label && (
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '3px',
          color: 'var(--border-md)',
          marginBottom: '10px',
          paddingBottom: '10px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        // {label}
      </p>
    )}

    {children}
  </div>
);

export default Card;
