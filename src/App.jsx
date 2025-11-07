import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxShowcase from './components/ParallaxShowcase';
import Contact from './components/Contact';

function App() {
  // Load stored preferences
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [accent, setAccent] = useState(() => localStorage.getItem('accent') || '#ef4444');

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme, accent]);

  // Base palette without gradients (3-4 colors)
  const palette = useMemo(() => ({
    bg: theme === 'dark' ? '#0b0f19' : '#ffffff',
    surface: theme === 'dark' ? '#0f172a' : '#f8fafc',
    text: theme === 'dark' ? '#f8fafc' : '#0f172a',
    sub: theme === 'dark' ? 'rgba(248,250,252,0.7)' : '#334155',
  }), [theme]);

  return (
    <div style={{ background: palette.bg, color: palette.text }}>
      <Navbar theme={theme} setTheme={setTheme} accent={accent} setAccent={setAccent} />
      <main className="overflow-hidden">
        <Hero theme={theme} />
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl p-8 md:p-12" style={{ background: palette.surface, border: theme === 'dark' ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)' }}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About</h2>
              <p className="mt-4 max-w-3xl" style={{ color: palette.sub }}>
                I’m a frontend engineer focused on shipping fast, reliable products with an elegant user experience.
                I specialize in React, TypeScript and motion design, bringing interfaces to life with subtle yet premium animations.
              </p>
            </div>
          </div>
        </section>
        <ParallaxShowcase theme={theme} />
        <Contact theme={theme} />
      </main>
      <footer className="py-10 border-t" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: palette.sub }}>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#top" className="text-sm font-medium" style={{ color: 'var(--accent)' }}>Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
