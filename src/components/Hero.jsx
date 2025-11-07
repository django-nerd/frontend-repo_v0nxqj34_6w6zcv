import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ theme }) {
  return (
    <section id="top" className="relative h-[82vh] w-full">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 grid place-items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ color: theme === 'dark' ? '#fff' : '#0f172a' }}>
            Building modern interfaces that feel effortless
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.75)' : '#334155' }}>
            I craft delightful, high-performance web experiences with an obsession for details,
            motion, and accessibility.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#work" className="px-5 py-3 rounded-md font-medium" style={{ background: 'var(--accent)', color: '#fff' }}>
              View Work
            </a>
            <a href="#contact" className="px-5 py-3 rounded-md font-medium border" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)', color: theme === 'dark' ? '#fff' : '#0f172a' }}>
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
