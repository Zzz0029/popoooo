import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShieldAlert } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      setError(err.response?.data?.error || 'Authentication failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-6 text-[#ededed] font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <ShieldAlert className="w-8 h-8 text-cyan-500 mb-4" strokeWidth={1.5} />
          <h1 className="text-2xl font-bold tracking-tight">System Access</h1>
          <p className="text-[#a1a1aa] text-sm mt-1">Restricted area. Please authenticate.</p>
        </div>
        
        {error && (
          <div className="mb-6 p-4 border-l-2 border-red-500 bg-[#1a0f0f] text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#121212] border border-[#27272a] px-4 py-2.5 text-[#ededed] focus:outline-none focus:border-[#52525b] transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Passphrase</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#121212] border border-[#27272a] px-4 py-2.5 text-[#ededed] focus:outline-none focus:border-[#52525b] transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ededed] hover:bg-white text-[#0a0a0a] font-medium py-3 px-4 transition-colors mt-2 disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
