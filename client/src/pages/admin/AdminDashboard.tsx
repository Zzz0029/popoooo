import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    achievements: 0,
    projects: 0,
    certifications: 0,
  });

  useEffect(() => {
    // We would fetch stats here
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
          <h2 className="text-zinc-400 font-medium mb-2">Total Achievements</h2>
          <p className="text-4xl font-mono text-cyan-400">{stats.achievements}</p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
          <h2 className="text-zinc-400 font-medium mb-2">Projects</h2>
          <p className="text-4xl font-mono text-cyan-400">{stats.projects}</p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
          <h2 className="text-zinc-400 font-medium mb-2">Certifications</h2>
          <p className="text-4xl font-mono text-cyan-400">{stats.certifications}</p>
        </div>
      </div>
    </div>
  );
}
