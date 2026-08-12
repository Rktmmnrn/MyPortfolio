import { translations, Language } from '../../data/i18n';

type AvailableProps = { lang: Language };

const Available = ({ lang }: AvailableProps) => (
    <span className='flex items-center' style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text-3)', gap: '7px' }}>
        <span
            style={{
                width: '6px', height: '6px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 5px rgba(34,197,94,0.7)',
                animation: 'status-pulse 2.5s ease-in-out infinite',
            }}
        />
        {translations[lang].available}
    </span>
);

export default Available;