type CornerAccentsProps = {
  size?: number;
};

const CornerAccents = ({ size = 12 }: CornerAccentsProps) => (
  <>
    <span
      style={{
        position: 'absolute',
        top: '-1px',
        left: '-1px',
        width: `${size}px`,
        height: `${size}px`,
        borderTop: '2px solid var(--red)',
        borderLeft: '2px solid var(--red)',
      }}
    />
    <span
      style={{
        position: 'absolute',
        bottom: '-1px',
        right: '-1px',
        width: `${size}px`,
        height: `${size}px`,
        borderBottom: '2px solid var(--red)',
        borderRight: '2px solid var(--red)',
      }}
    />
  </>
);

export default CornerAccents;
