import { useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

export default function Navbar({ theme, setTheme, accent, setAccent }) {
  // Persist preferences
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('accent', accent);
    document.documentElement.style.setProperty('--accent', accent);
  }, [accent]);

  const accents = [
    { name: 'Red', value: '#ef4444' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Amber', value: '#f59e0b' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur ${
        theme === 'dark' ? 'bg-black/70' : 'bg-white/70'
      }`}
      style={{
        borderBottom: theme === 'dark'
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(0,0,0,0.08)'
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
          <span style={{ color: 'var(--accent)' }}>◆</span> Profolio
        </a>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Palette size={18} style={{ color: theme === 'dark' ? '#fff' : '#000' }} />
            {accents.map((a) => (
              <button
                key={a.value}
                aria-label={`Set accent ${a.name}`}
                onClick={() => setAccent(a.value)}
                className="w-6 h-6 rounded-full border"
                style={{
                  backgroundColor: a.value,
                  borderColor: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)',
                  outline: accent === a.value ? `2px solid ${a.value}` : 'none',
                }}
              />
            ))}
          </div>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border"
            style={{
              borderColor: theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
              color: theme === 'dark' ? '#fff' : '#000',
              background: 'transparent',
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
