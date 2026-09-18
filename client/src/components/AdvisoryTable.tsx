import { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, ExternalLink, Lock } from 'lucide-react';

interface Advisory {
  id?: string;
  organization: string;
  recognitionTitle: string;
  severity: string;
  vulnerabilityType?: string;
  description?: string;
  category: 'GOV' | 'ENTERPRISE' | 'COMPETITION';
  badge: string;
  year: string;
}

const defaultAdvisories: Advisory[] = [
  {
    organization: 'NASA (National Aeronautics and Space Administration)',
    recognitionTitle: 'Official NASA Bug Bounty Security Recognition',
    severity: 'CRITICAL / HIGH',
    vulnerabilityType: 'Web Application Infrastructure Vulnerability',
    description: 'Official hall of fame security acknowledgment from NASA for discovering vulnerabilities as part of a 4-student security research team from SMKN 1 Liwa.',
    category: 'ENTERPRISE',
    badge: 'NASA HOF',
    year: '2026'
  },
  {
    organization: 'BMKG-CSIRT (Meteorology, Climatology, & Geophysics Agency)',
    recognitionTitle: 'BMKG CSIRT Vulnerability Disclosure',
    severity: 'MEDIUM',
    vulnerabilityType: 'Web Service Security & Logic Audit',
    description: 'Official Hall of Fame listing by National BMKG CSIRT team for responsible security research and vulnerability reporting.',
    category: 'GOV',
    badge: 'NATIONAL CSIRT',
    year: '2026'
  },
  {
    organization: 'BT (British Telecommunications)',
    recognitionTitle: 'BT Security Global Hall of Fame',
    severity: 'HIGH',
    vulnerabilityType: 'Authentication & Access Control Defect',
    description: 'Included in the international BT Security Hall of Fame for identifying security vulnerabilities in enterprise infrastructure.',
    category: 'ENTERPRISE',
    badge: 'BT HOF',
    year: '2026'
  },
  {
    organization: 'CERT-EU (Computer Emergency Response Team for EU)',
    recognitionTitle: 'CERT-EU Security Disclosure Acknowledgment',
    severity: 'HIGH',
    vulnerabilityType: 'Infrastructure Security Assessment',
    description: 'Official European Union Computer Emergency Response Team acknowledgment for responsible vulnerability disclosure.',
    category: 'ENTERPRISE',
    badge: 'CERT-EU',
    year: '2026'
  },
  {
    organization: 'BekasiKota-CSIRT',
    recognitionTitle: 'Bekasi City Government CSIRT Recognition',
    severity: 'MEDIUM',
    vulnerabilityType: 'Access Control Flaw & Data Leakage',
    description: 'Government CSIRT certificate of appreciation for auditing regional public service endpoints.',
    category: 'GOV',
    badge: 'REGIONAL CSIRT',
    year: '2026'
  },
  {
    organization: 'Wonosobo CSIRT',
    recognitionTitle: 'Wonosobo CSIRT Security Hall of Fame',
    severity: 'MEDIUM',
    vulnerabilityType: 'Information Disclosure Vulnerability',
    description: 'Vulnerability disclosure recognition for securing public government web systems.',
    category: 'GOV',
    badge: 'REGIONAL CSIRT',
    year: '2026'
  },
  {
    organization: 'Gunungkidul CSIRT',
    recognitionTitle: 'Gunungkidul CSIRT Security Acknowledgment',
    severity: 'MEDIUM',
    vulnerabilityType: 'Web Application Security Audit',
    description: 'Official security acknowledgment from regional CSIRT team.',
    category: 'GOV',
    badge: 'REGIONAL CSIRT',
    year: '2026'
  }
];

export default function AdvisoryTable() {
  const [filter, setFilter] = useState<'ALL' | 'GOV' | 'ENTERPRISE'>('ALL');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = filter === 'ALL' ? defaultAdvisories : defaultAdvisories.filter(a => a.category === filter);

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1c1c1e] pb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1.5 border transition-all ${
              filter === 'ALL'
                ? 'bg-white text-black border-white font-bold'
                : 'bg-[#09090b] text-zinc-400 border-[#27272a] hover:text-white'
            }`}
          >
            [00] ALL DISCLOSURES ({defaultAdvisories.length})
          </button>
          <button
            onClick={() => setFilter('ENTERPRISE')}
            className={`px-3 py-1.5 border transition-all ${
              filter === 'ENTERPRISE'
                ? 'bg-white text-black border-white font-bold'
                : 'bg-[#09090b] text-zinc-400 border-[#27272a] hover:text-white'
            }`}
          >
            [01] NASA & ENTERPRISE
          </button>
          <button
            onClick={() => setFilter('GOV')}
            className={`px-3 py-1.5 border transition-all ${
              filter === 'GOV'
                ? 'bg-white text-black border-white font-bold'
                : 'bg-[#09090b] text-zinc-400 border-[#27272a] hover:text-white'
            }`}
          >
            [02] NATIONAL & GOV CSIRTS
          </button>
        </div>

        <span className="text-zinc-500 hidden sm:inline-block">SORT: SEVERITY_DESC</span>
      </div>

      {/* Ledger Table */}
      <div className="border border-[#1c1c1e] bg-[#000000] font-mono text-xs overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-[#0c0c0e] border-b border-[#1c1c1e] px-5 py-3 text-zinc-500 font-bold uppercase tracking-wider">
          <div className="col-span-4">Organization / Program</div>
          <div className="col-span-4">Vulnerability Scope</div>
          <div className="col-span-2">Severity</div>
          <div className="col-span-2 text-right">Verification</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-[#1c1c1e]">
          {filtered.map((item, idx) => {
            const isExpanded = expandedId === idx;
            return (
              <div key={idx} className="hover:bg-[#08080a] transition-colors">
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : idx)}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 px-5 py-4 items-center cursor-pointer select-none"
                >
                  <div className="md:col-span-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="font-bold text-white font-sans text-sm">{item.organization}</span>
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono">{item.badge} • {item.year}</div>
                  </div>

                  <div className="md:col-span-4 text-zinc-300 font-sans text-xs">
                    {item.recognitionTitle}
                  </div>

                  <div className="md:col-span-2">
                    <span className={`inline-block px-2 py-0.5 border text-[10px] font-bold font-mono ${
                      item.severity.includes('CRITICAL') || item.severity.includes('HIGH')
                        ? 'bg-rose-950/30 border-rose-800/50 text-rose-400'
                        : 'bg-amber-950/30 border-amber-800/50 text-amber-400'
                    }`}>
                      {item.severity}
                    </span>
                  </div>

                  <div className="md:col-span-2 flex items-center md:justify-end gap-2 text-cyan-400 text-xs">
                    <span>DETAILS</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="bg-[#050507] px-5 py-4 border-t border-[#1c1c1e] text-xs font-mono space-y-3">
                    <div className="text-zinc-400 leading-relaxed font-sans text-xs">
                      {item.description}
                    </div>
                    <div className="flex flex-wrap gap-4 pt-2 text-[11px] text-zinc-500 border-t border-[#121215]">
                      <div>TYPE: <span className="text-zinc-300">{item.vulnerabilityType}</span></div>
                      <div>STATUS: <span className="text-emerald-400">DISCLOSED & ACKNOWLEDGED</span></div>
                      <div>DISCLOSURE_YEAR: <span className="text-zinc-300">{item.year}</span></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
