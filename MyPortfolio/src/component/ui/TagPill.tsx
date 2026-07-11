type TagPillProps = {
  children: string;
  variant?: 'outline' | 'solid';
};

const TagPill = ({ children, variant = 'outline' }: TagPillProps) => (
  <span
    style={{
      fontFamily: 'var(--mono)',
      fontSize: '9px',
      letterSpacing: '1px',
      color: variant === 'outline' ? 'var(--red)' : 'var(--text-2)',
      border: '1px solid var(--border)',
      background: variant === 'solid' ? 'var(--bg-card)' : 'transparent',
      padding: '3px 8px',
      borderRadius: '2px',
      display: 'inline-block',
    }}
  >
    {children}
  </span>
);

export default TagPill;
