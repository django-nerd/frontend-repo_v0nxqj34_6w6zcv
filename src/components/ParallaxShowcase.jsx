import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Code2, MonitorSmartphone } from 'lucide-react';

export default function ParallaxShowcase({ theme }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const subColor = theme === 'dark' ? 'rgba(248,250,252,0.7)' : '#334155';

  return (
    <section ref={ref} id="work" className="relative py-28">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 style={{ y: y1, color: textColor }} className="text-3xl md:text-4xl font-bold tracking-tight">
          Selected work
        </motion.h2>
        <motion.p style={{ y: y2, color: subColor }} className="mt-3 max-w-2xl">
          A small collection of projects focused on performance, smooth interactions, and robust architecture.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{
            icon: <Rocket size={20} />, title: 'Launch-ready',
            desc: 'Clean code, strong typing, and CI baked in for reliability.'
          }, {
            icon: <Code2 size={20} />, title: 'Engineer-first UI',
            desc: 'I ship accessible, component-driven systems at scale.'
          }, {
            icon: <MonitorSmartphone size={20} />, title: 'Responsive by design',
            desc: 'Every screen, every device, without compromise.'
          }].map((card, i) => (
            <motion.div
              key={card.title}
              style={{ y: [y3, y2, y1][i % 3] }}
              className="p-6 rounded-xl border"
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="w-10 h-10 rounded-md grid place-items-center" style={{ background: 'var(--accent)' }}>
                <div className="text-white">{card.icon}</div>
              </div>
              <h3 className="mt-4 font-semibold" style={{ color: textColor }}>{card.title}</h3>
              <p className="mt-2 text-sm" style={{ color: subColor }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
