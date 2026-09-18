import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ShieldAlert, ArrowLeft, KeyRound, Terminal } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('riskiper819@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password }, { withCredentials: true });
      navigate('/admin');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Authentication failed. Ensure server is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#050505] p-6 text-[#f4f4f5] font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Top bar */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between font-mono text-xs text-zinc-500 pt-4">
        <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO SITE</span>
        </Link>
        <span>CMS PORTAL v1.0</span>
      </div>

      {/* Login Container */}
      <div className="w-full max-w-md mx-auto bg-[#09090b] border border-[#18181b] p-8 shadow-2xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#141417] border border-[#27272a] text-[11px] font-mono text-cyan-400 mb-4">
            <Terminal className="w-3 h-3" />
            <span>AUTHENTICATION SYSTEM</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Admin CMS Access</h1>
          <p className="text-zinc-400 text-xs mt-1 font-mono">Restricted to authorized security personnel.</p>
        </div>
        
        {error && (
          <div className="mb-6 p-3.5 border border-red-500/50 bg-red-950/20 text-red-400 text-xs font-mono leading-relaxed">
            [ERROR] {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#121215] border border-[#27272a] px-4 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">Passphrase</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#121215] border border-[#27272a] px-4 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>

          {/* Quick Credential Badge for Dev */}
          <div className="p-3 bg-[#0d0d10] border border-[#1f1f23] text-xs font-mono text-zinc-400 space-y-1">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 uppercase">
              <span>Local Dev Admin</span>
              <KeyRound className="w-3 h-3 text-cyan-500" />
            </div>
            <div className="text-zinc-300">Email: <span className="text-cyan-400">riskiper819@gmail.com</span></div>
            <div className="text-zinc-300">Password: <span className="text-cyan-400">admin123</span></div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white hover:bg-cyan-400 hover:text-black text-black font-mono text-xs uppercase tracking-wider font-bold py-3 px-4 transition-all disabled:opacity-50"
          >
            {loading ? 'AUTHENTICATING...' : 'AUTHENTICATE SYSTEM LOGIN'}
          </button>
        </form>
      </div>

      <div className="text-center font-mono text-xs text-zinc-600 pb-4">
        RISKI PERMANA // PHOENIX CYSEC PORTFOLIO
      </div>
    </div>
  );
}
