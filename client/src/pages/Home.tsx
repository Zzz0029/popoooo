import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Target, Code, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-sm tracking-widest text-cyan-500 font-bold">RP.</div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <Link to="/login" className="text-zinc-500 hover:text-zinc-300">Admin</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Cybersecurity Researcher <br /> & Bug Bounty Hunter
            </h1>
            <p className="text-zinc-400 text-lg mb-8 max-w-[60ch] leading-relaxed">
              I research vulnerabilities, analyze web applications, and practice responsible disclosure to help make digital systems more secure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#achievements" className="px-6 py-3 bg-cyan-500 text-zinc-950 font-medium rounded hover:bg-cyan-400 transition-colors">
                View My Work
              </a>
              <a href="https://www.linkedin.com/in/riskipermana" target="_blank" rel="noreferrer" className="px-6 py-3 border border-zinc-800 rounded hover:bg-zinc-800 transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
          <div className="hidden md:block relative h-[500px] w-full rounded-lg overflow-hidden border border-zinc-800/50 bg-zinc-900/30">
             {/* Taste Skill aesthetic: A dark tech abstract placeholder */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950/20 to-zinc-950" />
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section id="about" className="py-24 border-t border-zinc-800/50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Focus</h2>
            <p className="text-zinc-400 max-w-[50ch]">Dedicated to offensive security, application testing, and finding critical flows in production systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-zinc-800/50 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <Shield className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="font-bold mb-2">Web App Security</h3>
              <p className="text-sm text-zinc-400">Auditing logic flaws, injection vulnerabilities, and broken access controls.</p>
            </div>
            <div className="p-6 border border-zinc-800/50 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <Target className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="font-bold mb-2">Bug Bounty</h3>
              <p className="text-sm text-zinc-400">Responsible disclosure through official programs for Fortune 500s.</p>
            </div>
            <div className="p-6 border border-zinc-800/50 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <Search className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="font-bold mb-2">Reconnaissance</h3>
              <p className="text-sm text-zinc-400">Asset discovery, OSINT, and mapping complex attack surfaces.</p>
            </div>
            <div className="p-6 border border-zinc-800/50 rounded-lg bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <Code className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="font-bold mb-2">CTF Player</h3>
              <p className="text-sm text-zinc-400">Competitive hacking in cryptography, web exploitation, and reverse engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Overview */}
      <section id="achievements" className="py-24 border-t border-zinc-800/50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Achievements</h2>
              <p className="text-zinc-400 max-w-[50ch]">Verified recognitions, bug bounty write-ups, and CTF results.</p>
            </div>
            <a href="/login" className="text-sm font-medium text-cyan-500 hover:text-cyan-400">View All</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hardcoded placeholders to follow Taste Skill styling (real data fetched from API in full app) */}
            <div className="p-8 border border-zinc-800/50 rounded-lg bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
              <div className="text-xs font-mono text-cyan-500 mb-4 tracking-wider uppercase">Hall of Fame</div>
              <h3 className="text-xl font-bold mb-2">NASA Bug Bounty Recognition</h3>
              <p className="text-sm text-zinc-400 mb-6">Part of a 4-student team from SMKN 1 Liwa acknowledging critical vulnerabilities found.</p>
              <div className="text-xs text-zinc-500 font-mono">Date: 2026</div>
            </div>
            
            <div className="p-8 border border-zinc-800/50 rounded-lg bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
              <div className="text-xs font-mono text-cyan-500 mb-4 tracking-wider uppercase">Competition</div>
              <h3 className="text-xl font-bold mb-2">1st Place LKS Provinsi Lampung</h3>
              <p className="text-sm text-zinc-400 mb-6">Winner of the provincial level Cyber Security competition representing the region.</p>
              <div className="text-xs text-zinc-500 font-mono">Date: 2026</div>
            </div>
            
            <div className="p-8 border border-zinc-800/50 rounded-lg bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
              <div className="text-xs font-mono text-cyan-500 mb-4 tracking-wider uppercase">Certification</div>
              <h3 className="text-xl font-bold mb-2">Certified Cybersecurity Educator (CCEP)</h3>
              <p className="text-sm text-zinc-400 mb-6">Red Team Leaders professional certification demonstrating advanced offensive capabilities.</p>
              <div className="text-xs text-zinc-500 font-mono">Date: Jan 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800/50 text-center">
        <p className="font-bold mb-2">Riski Permana</p>
        <p className="text-sm text-zinc-500 mb-6">Research. Secure. Responsible.</p>
        <p className="text-xs text-zinc-600">© 2026 Riski Permana.</p>
      </footer>
    </div>
  );
}
