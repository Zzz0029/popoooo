import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const bootLogs = [
    'INIT KERNEL v4.19.0-x86_64-linux...',
    'MEM_CHK: 65536MB OK',
    'LOAD_MODULE: PHOENIX_CYSEC_CORE',
    'MOUNT: /dev/sec_storage -> /vault',
    'NET_VERIFY: CONNECTED TO SECURE MESH',
    'SYNC_DATABASE: NASA, CSIRT, BT HOF [100%]',
    'ENVIRONMENT SECURE. LAUNCHING INTERFACE...',
  ];

  useEffect(() => {
    // Progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Add logs based on progress percentage
    const step = Math.floor((progress / 100) * bootLogs.length);
    if (step > 0 && step <= bootLogs.length) {
      setLogs(bootLogs.slice(0, step));
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#000000] text-zinc-200 font-mono text-xs flex flex-col justify-between p-8 sm:p-16 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#1c1c1e] pb-4">
        <div className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-cyan-500 animate-pulse" />
          <span className="font-bold tracking-wider text-white">RISKI PERMANA // SYSTEM BOOTLOADER</span>
        </div>
        <span className="text-zinc-600 text-[11px]">BUILD 2026.09.18</span>
      </div>

      {/* Center Log Terminal */}
      <div className="max-w-2xl w-full mx-auto space-y-2 py-8">
        {logs.map((log, index) => (
          <div key={index} className="flex items-center justify-between text-zinc-400">
            <span className="text-cyan-500 font-bold">&gt; {log}</span>
            <span className="text-emerald-500 text-[10px] uppercase font-semibold">[OK]</span>
          </div>
        ))}
      </div>

      {/* Bottom Progress Bar */}
      <div className="max-w-2xl w-full mx-auto space-y-3 border-t border-[#1c1c1e] pt-6">
        <div className="flex justify-between items-center text-xs text-zinc-400 font-mono">
          <span>INITIALIZING SECURITY ENVIRONMENT</span>
          <span className="text-cyan-400 font-bold">{progress}%</span>
        </div>
        
        {/* Progress bar line */}
        <div className="w-full h-1 bg-[#121212] overflow-hidden">
          <div 
            className="h-full bg-cyan-500 transition-all duration-75" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] text-zinc-600">
          <span>TARGET: PHOENIX-CYSEC-PORTFOLIO</span>
          <span>CLICK ANYWHERE TO SKIP INTRO</span>
        </div>
      </div>
    </div>
  );
}
