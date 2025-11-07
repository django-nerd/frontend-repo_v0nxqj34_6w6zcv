import { motion } from 'framer-motion';

export default function Contact({ theme }) {
  const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
  const subColor = theme === 'dark' ? 'rgba(248,250,252,0.7)' : '#334155';

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: textColor }}>
          Let’s build something great
        </motion.h2>
        <p className="mt-3 max-w-2xl" style={{ color: subColor }}>
          I’m available for select freelance work and collaborations.
        </p>

        <form className="mt-10 grid gap-4 md:grid-cols-2">
          <input required placeholder="Name" className="h-12 px-4 rounded-md border bg-transparent" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)', color: textColor }} />
          <input required type="email" placeholder="Email" className="h-12 px-4 rounded-md border bg-transparent" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)', color: textColor }} />
          <textarea required placeholder="Project details" rows={5} className="md:col-span-2 p-4 rounded-md border bg-transparent" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)', color: textColor }} />
          <div className="md:col-span-2">
            <button type="submit" className="px-6 h-12 rounded-md font-medium text-white" style={{ background: 'var(--accent)' }}>
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
