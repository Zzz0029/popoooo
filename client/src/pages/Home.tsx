import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Shield, Award, Mail, ExternalLink, Cpu, Lock, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import BootScreen from '../components/BootScreen';
import TerminalConsole from '../components/TerminalConsole';
import AdvisoryTable from '../components/AdvisoryTable';

export default function Home() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      {/* Bootloader screen on initial load */}
      {booting && <BootScreen onComplete={() => setBooting(false)} />}

      <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        
        {/* Top Header / Status bar */}
        <header className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-md border-b border-[#1c1c1e]">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-cyan-500 block"></span>
              <span className="font-bold text-white tracking-wider">RISKI PERMANA</span>
              <span className="text-zinc-600 hidden sm:inline">// PHOENIX CYSEC</span>
            </div>

            <nav className="flex items-center gap-6 text-zinc-400">
              <a href="#disclosures" className="hover:text-cyan-400 transition-colors uppercase">[01. DISCLOSURES]</a>
              <a href="#competition" className="hover:text-cyan-400 transition-colors uppercase">[02. COMPETITION]</a>
              <a href="#toolkit" className="hover:text-cyan-400 transition-colors uppercase">[03. TOOLKIT]</a>
              <Link to="/login" className="px-3 py-1 bg-[#121215] border border-[#27272a] hover:border-cyan-500 hover:text-white transition-all text-zinc-200 font-bold">
                CMS LOGIN
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section: Technical Telemetry & Split Terminal */}
        <section className="border-b border-[#1c1c1e] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Specification Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Telemetry pill */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#09090b] border border-[#1c1c1e] font-mono text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>SYSTEM STATUS: ACTIVE SECURITY AUDITS</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-500">LAMPUNG, ID</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
                  Vulnerability Research <br />
                  <span className="text-cyan-400">&amp; Offensive Audit.</span>
                </h1>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  Cyber Security Researcher &amp; Bug Bounty Hunter at Phoenix Cysec. Specialized in web application penetration testing, logic defect exploitation, and responsible vulnerability disclosures.
                </p>
              </div>

              {/* Technical Telemetry Data Grid (Swiss Style 1px border grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#1c1c1e] bg-[#000000] font-mono text-xs">
                <div className="p-4 border-r border-b sm:border-b-0 border-[#1c1c1e]">
                  <div className="text-zinc-500 uppercase text-[10px]">LKS Lampung</div>
                  <div className="text-lg font-bold text-cyan-400 mt-1">1st GOLD</div>
                  <div className="text-[10px] text-zinc-600">Cyber Security</div>
                </div>
                <div className="p-4 border-r sm:border-r border-b sm:border-b-0 border-[#1c1c1e]">
                  <div className="text-zinc-500 uppercase text-[10px]">NASA Research</div>
                  <div className="text-lg font-bold text-white mt-1">SMKN 1 Liwa</div>
                  <div className="text-[10px] text-zinc-600">4-Student Team</div>
                </div>
                <div className="p-4 border-r border-[#1c1c1e]">
                  <div className="text-zinc-500 uppercase text-[10px]">Certification</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">CCEP</div>
                  <div className="text-[10px] text-zinc-600">Red Team Leaders</div>
                </div>
                <div className="p-4">
                  <div className="text-zinc-500 uppercase text-[10px]">HOF Record</div>
                  <div className="text-lg font-bold text-white mt-1">7+ Verified</div>
                  <div className="text-[10px] text-zinc-600">CSIRTs &amp; NASA</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                <a 
                  href="#disclosures" 
                  className="px-6 py-3.5 bg-white text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors"
                >
                  EXPLORE DISCLOSURES &gt;
                </a>
                <a 
                  href="mailto:riskiper819@gmail.com" 
                  className="px-6 py-3.5 bg-[#09090b] border border-[#27272a] text-zinc-300 uppercase tracking-wider hover:border-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  CONTACT RESEARCHER
                </a>
                <a 
                  href="https://www.linkedin.com/in/riskipermana" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3.5 bg-[#09090b] border border-[#27272a] text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors flex items-center justify-center"
                  title="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>

            </div>

            {/* Right Interactive Shell Console */}
            <div className="lg:col-span-5 w-full">
              <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                <span>INTERACTIVE_SHELL // CONSOLE</span>
                <span>RUN "help" FOR COMMANDS</span>
              </div>
              <TerminalConsole />
            </div>

          </div>
        </section>

        {/* 01. Disclosures & Hall of Fame Table */}
        <section id="disclosures" className="py-20 border-b border-[#1c1c1e] bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            <div>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">// 01. VULNERABILITY AUDIT LEDGER</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Verified Hall of Fame &amp; Disclosures</h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-xl">
                Official acknowledgments from NASA, national CERTs, government CSIRTs, and global telecommunications infrastructure.
              </p>
            </div>

            <AdvisoryTable />
          </div>
        </section>

        {/* 02. Competition & Academic Record */}
        <section id="competition" className="py-20 border-b border-[#1c1c1e]">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            <div>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">// 02. COMPETITIVE RECORD &amp; ACCREDITATION</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">CTF Competition &amp; Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LKS Winner */}
              <div className="p-8 bg-[#08080a] border border-[#1c1c1e] space-y-4">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">CHAMPION // GOLD MEDAL</span>
                  <span className="text-zinc-500">2026</span>
                </div>
                <h3 className="text-2xl font-bold text-white">1st Place LKS Provinsi Lampung 2026 — Cyber Security</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  Represented SMKN 1 Liwa in the Provincial Vocational Student Competency Competition (LKS), achieving 1st Place overall in the Cyber Security track.
                </p>
                <div className="pt-2 font-mono text-xs text-zinc-500 border-t border-[#121215]">
                  SCOPE: Network Security, Dynamic Penetration Testing, Binary Analysis &amp; Digital Forensics
                </div>
              </div>

              {/* Certification */}
              <div className="p-8 bg-[#08080a] border border-[#1c1c1e] space-y-4">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">PROFESSIONAL ACCREDITATION</span>
                  <span className="text-zinc-500">VALID</span>
                </div>
                <h3 className="text-2xl font-bold text-white">CCEP (Certified Cybersecurity Educator / Practitioner)</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  Issued by Red Team Leaders validating offensive security methodology, web auditing, ethical hacking, and cybersecurity leadership.
                </p>
                <div className="pt-2 font-mono text-xs text-zinc-500 border-t border-[#121215]">
                  ISSUER: Red Team Leaders / Cyber Security Accreditation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Technical Capabilities Grid */}
        <section id="toolkit" className="py-20 border-b border-[#1c1c1e] bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            <div>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest">// 03. TECHNICAL CAPABILITIES</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Offensive Security &amp; Audit Stack</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#1c1c1e] bg-[#000000] font-mono text-xs">
              <div className="p-6 border-r border-b sm:border-b-0 border-[#1c1c1e] space-y-3">
                <div className="text-cyan-400 font-bold">// 01. APPSEC</div>
                <h4 className="text-white font-bold text-base">Web Application Security</h4>
                <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                  OWASP Top 10, IDOR, Broken Access Control (BAC), SQL Injection, XSS, SSRF, &amp; Authentication Bypasses.
                </p>
              </div>

              <div className="p-6 border-r border-b sm:border-b-0 border-[#1c1c1e] space-y-3">
                <div className="text-cyan-400 font-bold">// 02. RECON</div>
                <h4 className="text-white font-bold text-base">Reconnaissance &amp; OSINT</h4>
                <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                  Subdomain enumeration, attack surface mapping, port scanning, asset discovery, &amp; DNS analysis.
                </p>
              </div>

              <div className="p-6 border-r border-b sm:border-b-0 border-[#1c1c1e] space-y-3">
                <div className="text-cyan-400 font-bold">// 03. TOOLING</div>
                <h4 className="text-white font-bold text-base">Security Toolset</h4>
                <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                  Burp Suite Pro, Nmap, Metasploit, Wireshark, SQLmap, Subfinder, Amass, &amp; Python automation.
                </p>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-cyan-400 font-bold">// 04. DEVSTACK</div>
                <h4 className="text-white font-bold text-base">Full-Stack Development</h4>
                <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                  Node.js, Express, React, TypeScript, PostgreSQL, Prisma, SQLite, Tailwind CSS, &amp; REST APIs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-[#000000] font-mono text-xs text-zinc-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-white font-bold">RISKI PERMANA</span> &copy; 2026. PHOENIX CYSEC.
            </div>
            <div className="flex items-center gap-4">
              <span>riskiper819@gmail.com</span>
              <span>|</span>
              <Link to="/login" className="text-cyan-400 hover:underline font-bold">CMS ADMIN LOGIN</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
