import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Shield } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password }, { withCredentials: true });
      navigate('/admin');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-6">
      <div className="w-full max-w-sm p-8 border border-zinc-800 bg-zinc-900/50 rounded-lg shadow-xl shadow-black/50">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">
            <Shield className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mb-8">Admin Access</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2 text-zinc-100 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-2 text-zinc-100 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold py-2 px-4 rounded transition-colors mt-4"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
