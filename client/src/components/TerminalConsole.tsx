import { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

export default function TerminalConsole() {
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output' | 'system'; text: string }>>([
    { type: 'system', text: 'RP-CYSEC OS v2.4.0 [x86_64-linux-gnu]' },
    { type: 'system', text: 'Type "help" or "whoami" to inspect researcher profile.' },
    { type: 'output', text: '[✓] CSIRT Database Synchronized: NASA, BMKG, BT, CERT-EU verified.' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input' as const, text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands: whoami, csirt, ctf, certs, contact, clear',
        });
        break;
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'Riski Permana | Cyber Security Researcher & Bug Bounty Hunter @ Phoenix Cysec. Location: Lampung, Indonesia.',
        });
        break;
      case 'csirt':
        newHistory.push({
          type: 'output',
          text: 'Verified HOFs: NASA, BMKG-CSIRT, BekasiKota-CSIRT, Wonosobo-CSIRT, Gunungkidul-CSIRT, BT HOF, CERT-EU.',
        });
        break;
      case 'ctf':
        newHistory.push({
          type: 'output',
          text: '🏆 1st Place LKS Provinsi Lampung 2026 - Cyber Security Track',
        });
        break;
      case 'certs':
        newHistory.push({
          type: 'output',
          text: '📜 CCEP (Certified Cybersecurity Educator / Practitioner)',
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: 'Email: riskiper819@gmail.com | LinkedIn: linkedin.com/in/riskipermana',
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({
          type: 'output',
          text: `Command not recognized: "${cmd}". Type "help" for commands.`,
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="w-full bg-[#09090b] border border-[#27272a] font-mono text-xs shadow-2xl rounded-none overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="bg-[#18181b] border-b border-[#27272a] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-400 font-semibold">
          <Terminal className="w-3.5 h-3.5 text-cyan-500" />
          <span>riski@phoenix-cysec:~</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] text-zinc-500 tracking-wider uppercase">ONLINE</span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 h-72 overflow-y-auto space-y-2 text-zinc-300">
        {history.map((item, index) => (
          <div key={index} className="leading-relaxed">
            {item.type === 'input' && (
              <span className="text-cyan-400 font-semibold">{item.text}</span>
            )}
            {item.type === 'system' && (
              <span className="text-zinc-500 italic">{item.text}</span>
            )}
            {item.type === 'output' && (
              <span className="text-zinc-300">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Line */}
      <form onSubmit={handleCommand} className="border-t border-[#27272a] bg-[#0c0c0e] px-4 py-2 flex items-center gap-2">
        <span className="text-cyan-500 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type command (e.g. 'help')..."
          className="w-full bg-transparent text-zinc-100 placeholder-zinc-600 focus:outline-none text-xs font-mono"
        />
      </form>
    </div>
  );
}
