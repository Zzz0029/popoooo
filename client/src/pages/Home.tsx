import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Target, Code, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation - Minimalist */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold tracking-tight text-lg">Riski Permana.</div>
          <div className="flex gap-8 text-sm font-medium text-[#a1a1aa]">
            <a href="#about" className="hover:text-white transition-colors">Focus</a>
            <a href="#achievements" className="hover:text-white transition-colors">Work</a>
            <Link to="/login" className="hover:text-white transition-colors">Admin</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Left Aligned, Typography Heavy, No Gradient Blobs */}
      <section className="relative min-h-[85dvh] flex items-center max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 lg:col-span-7"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05] text-white">
              Vulnerability research <br /> & responsible disclosure.
            </h1>
            <p className="text-[#a1a1aa] text-lg md:text-xl mb-10 max-w-[45ch] leading-relaxed">
              I audit web applications and infrastructure to find critical flaws before they are exploited. Specializing in bug bounty and offensive security.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#achievements" className="px-6 py-3 bg-[#ededed] text-[#0a0a0a] font-medium hover:bg-white transition-colors">
                View write-ups
              </a>
              <a href="https://www.linkedin.com/in/riskipermana" target="_blank" rel="noreferrer" className="px-6 py-3 border border-[#27272a] hover:border-[#3f3f46] text-[#ededed] transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
          
          <div className="md:col-span-4 lg:col-span-5 flex justify-end">
            <div className="w-full aspect-[4/5] max-w-[400px] bg-[#121212] border border-[#1f1f1f] p-6 flex flex-col justify-between">
              <Shield className="w-6 h-6 text-cyan-500" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-[#a1a1aa] uppercase tracking-widest mb-1">Status</p>
                <p className="text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 block" /> 
                  Available for new opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus - Asymmetric Bento Grid */}
      <section id="about" className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Discipline</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Cell 1: Large */}
            <div className="md:col-span-2 p-8 md:p-12 bg-[#121212] border border-[#1f1f1f] flex flex-col justify-end min-h-[300px]">
              <Target className="w-8 h-8 text-cyan-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-3">Bug Bounty</h3>
              <p className="text-[#a1a1aa] max-w-[40ch]">Hunting logic flaws and injection vulnerabilities across Fortune 500 infrastructure. Focus on high-impact, chainable exploits.</p>
            </div>
            
            {/* Cell 2: Tall */}
            <div className="p-8 bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col justify-end min-h-[300px]">
              <Code className="w-8 h-8 text-[#ededed] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">CTF</h3>
              <p className="text-sm text-[#a1a1aa]">Competitive cryptography, reverse engineering, and advanced web exploitation.</p>
            </div>
            
            {/* Cell 3: Wide split */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-8 bg-[#121212] border border-[#1f1f1f] flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Web App Security</h3>
                  <p className="text-sm text-[#a1a1aa] mt-1">Manual source code review & dynamic testing.</p>
                </div>
                <Shield className="w-6 h-6 text-[#52525b]" strokeWidth={1.5} />
              </div>
              <div className="p-8 bg-[#121212] border border-[#1f1f1f] flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Reconnaissance</h3>
                  <p className="text-sm text-[#a1a1aa] mt-1">Asset discovery and attack surface mapping.</p>
                </div>
                <Search className="w-6 h-6 text-[#52525b]" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work / Achievements - Clean list, no repetitive cards */}
      <section id="achievements" className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
            <Link to="/login" className="text-sm font-medium text-cyan-500 hover:text-cyan-400">View full log</Link>
          </div>
          
          <div className="border-t border-[#1f1f1f]">
            {/* Row 1 */}
            <div className="py-8 border-b border-[#1f1f1f] grid grid-cols-1 md:grid-cols-12 gap-4 items-start group">
              <div className="md:col-span-3 text-[#a1a1aa] text-sm">2026</div>
              <div className="md:col-span-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">NASA Bug Bounty Recognition</h3>
                <p className="text-[#a1a1aa] max-w-[50ch]">Acknowledged for finding critical vulnerabilities as part of a 4-student research team from SMKN 1 Liwa.</p>
              </div>
              <div className="md:col-span-3 text-right">
                <span className="inline-block px-3 py-1 bg-[#121212] border border-[#27272a] text-xs">Hall of Fame</span>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="py-8 border-b border-[#1f1f1f] grid grid-cols-1 md:grid-cols-12 gap-4 items-start group">
              <div className="md:col-span-3 text-[#a1a1aa] text-sm">2026</div>
              <div className="md:col-span-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">1st Place LKS Provinsi Lampung</h3>
                <p className="text-[#a1a1aa] max-w-[50ch]">Winner of the provincial level Cyber Security competition representing the region against top talent.</p>
              </div>
              <div className="md:col-span-3 text-right">
                <span className="inline-block px-3 py-1 bg-[#121212] border border-[#27272a] text-xs">Competition</span>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="py-8 border-b border-[#1f1f1f] grid grid-cols-1 md:grid-cols-12 gap-4 items-start group">
              <div className="md:col-span-3 text-[#a1a1aa] text-sm">Jan 2026</div>
              <div className="md:col-span-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">Certified Cybersecurity Educator (CCEP)</h3>
                <p className="text-[#a1a1aa] max-w-[50ch]">Professional certification by Red Team Leaders demonstrating advanced offensive and pedagogical capabilities.</p>
              </div>
              <div className="md:col-span-3 text-right">
                <span className="inline-block px-3 py-1 bg-[#121212] border border-[#27272a] text-xs">Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-bold">Riski Permana</p>
            <p className="text-sm text-[#a1a1aa]">Research. Secure. Responsible.</p>
          </div>
          <p className="text-xs text-[#52525b]">© 2026 Riski Permana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
