import { FiSun, FiMoon } from 'react-icons/fi';
import { Theme } from '../../types/theme';

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    onClick={onToggle}
    className="theme-toggle"
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
  </button>
);

export default ThemeToggle;
