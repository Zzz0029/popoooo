import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Terminal as TerminalIcon, ExternalLink, ChevronRight, Lock, CheckCircle2, ShieldCheck, Mail, Linkedin, Cpu } from 'lucide-react';
import TerminalConsole from '../components/TerminalConsole';
import api from '../lib/api';

export default function Home() {
  const [hofs, setHofs] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [hofRes, achRes] = await Promise.all([
          api.get('/hall-of-fame').catch(() => ({ data: [] })),
          api.get('/achievements').catch(() => ({ data: [] }))
        ]);
        if (hofRes.data && hofRes.data.length > 0) setHofs(hofRes.data);
        if (achRes.data && achRes.data.length > 0) setAchievements(achRes.data);
      } catch (e) {
        console.error('Failed to load live data', e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Static fallback data matching exact user accomplishments if API data empty
  const defaultHofs = [
    {
      organization: 'NASA (National Aeronautics and Space Administration)',
      recognitionTitle: 'Official Bug Bounty Security Acknowledgment',
      severity: 'Critical / High',
      vulnerabilityType: 'Web Security Vulnerability',
      description: 'Recognized as part of a 4-student research team from SMKN 1 Liwa for discovering and reporting security flaws.',
      badge: 'NASA HOF'
    },
    {
      organization: 'BMKG-CSIRT',
      recognitionTitle: 'Vulnerability Disclosure Recognition',
      severity: 'Medium',
      vulnerabilityType: 'Web Vulnerability Audit',
      description: 'Official Hall of Fame listing by National Meteorological, Climatological, and Geophysical Agency CSIRT.',
      badge: 'CSIRT'
    },
    {
      organization: 'BT (British Telecommunications)',
      recognitionTitle: 'BT Security Hall of Fame',
      severity: 'High',
      vulnerabilityType: 'Application Logic Defect',
      description: 'Listed in global BT Security Hall of Fame for responsible vulnerability disclosure.',
      badge: 'BT HOF'
    },
    {
      organization: 'CERT-EU',
      recognitionTitle: 'EU Computer Emergency Response Team Acknowledgment',
      severity: 'High',
      vulnerabilityType: 'Infrastructure Security',
      description: 'Official recognition from Computer Emergency Response Team for EU Institutions.',
      badge: 'CERT-EU'
    },
    {
      organization: 'BekasiKota-CSIRT',
      recognitionTitle: 'Bekasi City CSIRT Security Hall of Fame',
      severity: 'Medium',
      vulnerabilityType: 'Access Control Flaw',
      description: 'Certificate of appreciation for identifying and reporting regional government web vulnerabilities.',
      badge: 'GOV CSIRT'
    },
    {
      organization: 'Wonosobo CSIRT',
      recognitionTitle: 'Wonosobo CSIRT Security Acknowledgment',
      severity: 'Medium',
      vulnerabilityType: 'Information Disclosure',
      description: 'Vulnerability disclosure acknowledgment for securing public digital infrastructure.',
      badge: 'GOV CSIRT'
    },
    {
      organization: 'Gunungkidul CSIRT',
      recognitionTitle: 'Gunungkidul CSIRT Security Recognition',
      severity: 'Medium',
      vulnerabilityType: 'Web Service Security',
      description: 'Public security acknowledgment from regional CSIRT team.',
      badge: 'GOV CSIRT'
    }
  ];

  const displayHofs = hofs.length > 0 ? hofs : defaultHofs;

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f5] font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#18181b]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-cyan-500 rounded-none inline-block"></span>
            <span className="font-mono text-sm font-bold tracking-tight text-white">RISKI PERMANA</span>
            <span className="text-zinc-600 text-xs hidden sm:inline-block font-mono">| PHOENIX CYSEC</span>
          </div>
          
          <nav className="flex items-center gap-6 text-xs font-mono text-zinc-400">
            <a href="#recognitions" className="hover:text-cyan-400 transition-colors uppercase tracking-wider">01. Recognitions</a>
            <a href="#ctf" className="hover:text-cyan-400 transition-colors uppercase tracking-wider">02. Competition</a>
            <a href="#toolkit" className="hover:text-cyan-400 transition-colors uppercase tracking-wider">03. Toolkit</a>
            <Link to="/login" className="px-3 py-1.5 border border-[#27272a] hover:border-cyan-500/50 hover:text-white transition-all text-zinc-300">
              CMS ADMIN
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Hero Section */}
      <section className="relative border-b border-[#18181b] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Researcher Specs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121215] border border-[#27272a] text-xs font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>SMK NEGERI 1 LIWA // LAMPUNG, INDONESIA</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Cyber Security Researcher & Bug Bounty Hunter
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Offensive web security researcher focused on logic flaw identification, attack surface mapping, and responsible vulnerability disclosure across public & enterprise targets.
              </p>
            </div>

            {/* Quick Metrics & Achievements Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#09090b] border border-[#18181b]">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">LKS Lampung 2026</div>
                <div className="text-xl font-bold font-mono text-cyan-400 mt-1">1st Place</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Cyber Security Gold</div>
              </div>
              <div className="p-4 bg-[#09090b] border border-[#18181b]">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">NASA Recognition</div>
                <div className="text-xl font-bold font-mono text-white mt-1">SMKN 1 Liwa</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">4-Student Team</div>
              </div>
              <div className="p-4 bg-[#09090b] border border-[#18181b] col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Certifications</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">CCEP</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Red Team Leaders</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#recognitions" 
                className="px-6 py-3 bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-cyan-400 transition-colors"
              >
                View Disclosures
              </a>
              <a 
                href="mailto:riskiper819@gmail.com" 
                className="px-6 py-3 border border-[#27272a] bg-[#09090b] text-zinc-300 font-mono text-xs uppercase tracking-wider hover:border-zinc-500 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                Contact Researcher
              </a>
              <a 
                href="https://www.linkedin.com/in/riskipermana" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 border border-[#27272a] bg-[#09090b] text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Technical Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="mb-2 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>SYSTEM_SHELL_v2.4</span>
              <span>INTERACTIVE CONSOLE</span>
            </div>
            <TerminalConsole />
          </div>

        </div>
      </section>

      {/* 01. Recognitions & Hall of Fame List */}
      <section id="recognitions" className="py-20 border-b border-[#18181b] bg-[#070709]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#18181b] gap-4">
            <div>
              <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">01 // RECOGNITIONS</span>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Hall of Fame & Vulnerability Disclosures</h2>
            </div>
            <p className="text-xs font-mono text-zinc-500 max-w-sm">
              Official acknowledgments from international space agencies, national CSIRTs, and enterprise programs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {displayHofs.map((hof, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-[#09090b] border border-[#18181b] hover:border-[#27272a] transition-all grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span className="font-bold text-sm text-white">{hof.organization}</span>
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">{hof.recognitionTitle || hof.badge}</div>
                </div>

                <div className="md:col-span-6 text-xs text-zinc-400 font-sans leading-relaxed">
                  {hof.description}
                </div>

                <div className="md:col-span-2 flex md:justify-end items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-1 bg-[#141417] border border-[#27272a] text-zinc-300">
                    {hof.severity || 'Acknowledged'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. Competition & Achievements */}
      <section id="ctf" className="py-20 border-b border-[#18181b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#18181b] gap-4">
            <div>
              <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">02 // COMPETITION & ACADEMICS</span>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">CTF & Academic Accomplishments</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#09090b] border border-[#18181b] space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">GOLD MEDAL</span>
                <span className="font-mono text-xs text-zinc-500">2026</span>
              </div>
              <h3 className="text-xl font-bold text-white">1st Place LKS Provinsi Lampung 2026</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Secured Champion (1st Place) in the Cyber Security category at the Provincial Vocational Student Competency Competition (LKS), representing SMKN 1 Liwa.
              </p>
              <div className="pt-2 text-xs font-mono text-zinc-500">Track: Network Security, Web Exploitation, Digital Forensics</div>
            </div>

            <div className="p-8 bg-[#09090b] border border-[#18181b] space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">CERTIFICATION</span>
                <span className="font-mono text-xs text-zinc-500">VALID</span>
              </div>
              <h3 className="text-xl font-bold text-white">CCEP (Certified Cybersecurity Educator / Practitioner)</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Professional accreditation issued by Red Team Leaders validating offensive security proficiency, vulnerability auditing, and technical security leadership.
              </p>
              <div className="pt-2 text-xs font-mono text-zinc-500">Issuer: Red Team Leaders</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Toolkit & Core Skills */}
      <section id="toolkit" className="py-20 border-b border-[#18181b] bg-[#070709]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 pb-4 border-b border-[#18181b]">
            <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">03 // CAPABILITIES</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Offensive Security & Audit Toolkit</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 bg-[#09090b] border border-[#18181b]">
              <div className="font-mono text-xs text-cyan-400 mb-2">// 01</div>
              <h4 className="font-bold text-white text-base mb-2">Web Application Security</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">OWASP Top 10 auditing, Broken Access Control (BAC), IDOR, SQLi, XSS, SSRF, & Business Logic Flaws.</p>
            </div>

            <div className="p-6 bg-[#09090b] border border-[#18181b]">
              <div className="font-mono text-xs text-cyan-400 mb-2">// 02</div>
              <h4 className="font-bold text-white text-base mb-2">Recon & Reconnaissance</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">Attack surface mapping, subdomain enumeration, port scanning, asset discovery, & OSINT investigation.</p>
            </div>

            <div className="p-6 bg-[#09090b] border border-[#18181b]">
              <div className="font-mono text-xs text-cyan-400 mb-2">// 03</div>
              <h4 className="font-bold text-white text-base mb-2">Security Tooling</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">Burp Suite Pro, Nmap, Metasploit, Wireshark, SQLmap, Subfinder, Amass, & custom Python scripts.</p>
            </div>

            <div className="p-6 bg-[#09090b] border border-[#18181b]">
              <div className="font-mono text-xs text-cyan-400 mb-2">// 04</div>
              <h4 className="font-bold text-white text-base mb-2">Full-Stack Development</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">Node.js, Express, React.js, TypeScript, PostgreSQL, Prisma, SQLite, Tailwind CSS, & REST APIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span className="text-white font-bold">RISKI PERMANA</span> &copy; 2026. PHOENIX CYSEC.
          </div>
          <div className="flex items-center gap-4">
            <span>riskiper819@gmail.com</span>
            <span>•</span>
            <Link to="/login" className="text-cyan-500 hover:underline">CMS LOGIN</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
